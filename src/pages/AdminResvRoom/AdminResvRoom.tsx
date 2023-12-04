import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import { S } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import { addMonths } from 'date-fns'; 
import { useNavigate } from "react-router-dom";
import Room1 from "../../assets/images/room1.png";
import Room2 from "../../assets/images/room2.png";
import Room3 from "../../assets/images/room3.png";
import Room4 from "../../assets/images/room4.png";
import { differenceInDays , format } from 'date-fns';
import api from "../../api/Axios";

const imageUrls = [
    Room1,
    Room2,
    Room3,
    Room4,
  // 추가 이미지 URL
];

interface CalendarProps {
    onSelectDate: (startDate: Date, endDate: Date) => void;
}

const RoomCalendar:React.FC<CalendarProps> = ({ onSelectDate }) => {
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();
    const threeMonthsFromNow: Date = addMonths(new Date(), 3); // 오늘로부터 3개월 뒤의 날짜 계산

    useEffect(() => {
        if (startDate && endDate) {
            onSelectDate(startDate, endDate);
        }
    }, [startDate, endDate, onSelectDate]);

    return (
        <S.CalendarContainer marginLeft={50}>
            <DatePicker
                showIcon
                locale={ko} //한글
                dateFormat='yyyy.MM.dd' // 날짜 형태
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
                placeholderText="체크인 날짜 선택"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
            />
            ~
            <DatePicker
                showIcon
                locale={ko} //한글
                dateFormat='yyyy.MM.dd' // 날짜 형태
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
                placeholderText="체크아웃 날짜 선택"
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
            />
        </S.CalendarContainer>
        
    );
};

interface PeopleProps {
    onSelectPeople: (type: number[]) => void;
}

const PeoplePickerComponent: React.FC<PeopleProps> = ({ onSelectPeople }) => {
    const [adults, setAdults] = useState<number>(0);
    const [teenagers, setTeenagers] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);

    useEffect(() => {
        onSelectPeople([adults, teenagers, children]);
    }, [adults, teenagers, children, onSelectPeople]);

    const increment = (setter: React.Dispatch<React.SetStateAction<number>>, count: number) => {
        setter(count + 1);
    };

    const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, count: number) => {
        if (count > 0) {
            setter(count - 1);
        }
    };

    return (
        <S.PeopleBox>
            <S.PeopleLayer>
                <S.PeopleText>성인</S.PeopleText>
                <S.Button onClick={() => decrement(setAdults, adults)}>-</S.Button>
                        <S.PeopleText>{adults}</S.PeopleText>
                <S.Button onClick={() => increment(setAdults, adults)}>+</S.Button>
            </S.PeopleLayer>
            <S.PeopleLayer>
                <S.PeopleText>아동</S.PeopleText>
                <S.Button onClick={() => decrement(setTeenagers, teenagers)}>-</S.Button>
                        <S.PeopleText>{teenagers}</S.PeopleText>
                <S.Button onClick={() => increment(setTeenagers, teenagers)}>+</S.Button>
            </S.PeopleLayer>
            <S.PeopleLayer>
                <S.PeopleText>유아</S.PeopleText>
                <S.Button onClick={() => decrement(setChildren, children)}>-</S.Button>
                        <S.PeopleText>{children}</S.PeopleText>
                <S.Button onClick={() => increment(setChildren, children)}>+</S.Button>
            </S.PeopleLayer>
        </S.PeopleBox>
    );
}

interface RoomTypeProps {
    onSelectRoomType: (type: number) => void;
    selectedRoomType?: number | null;
    startDate: string | null;
    endDate: string | null;
    adultCnt: number | null;
    teenagerCnt: number | null;
    childCnt: number | null;
}

interface Category {
    id: number;
    name: string;
    room_type: string;
    view_type: string;
}

const RoomType: React.FC<RoomTypeProps> = ({
    onSelectRoomType, 
    selectedRoomType,
    startDate,
    endDate,
    adultCnt,
    teenagerCnt,
    childCnt
}) => {
    const [categories, setCategories] = useState<Category[]>([]);

    const getRoomCat = async () => {
        try {
            const resp = await api.get(`/categories?startDate=${startDate}&endDate=${endDate}&adultCnt=${adultCnt}&teenagerCnt=${teenagerCnt}&childCnt=${childCnt}`);
            if (resp && resp.data) {
                setCategories(resp.data.data);
                console.log(resp.data.data);
            }
            console.log(resp.data);
        } catch (error) {
            console.error('No data received', error);
        }
    };

    useEffect(() => {
        getRoomCat();
    }, []);

    return (
        <S.RoomBox>
            <S.RoomTitleText>등록된 객실</S.RoomTitleText>
            {categories.map(category => (
                <S.RoomLayer onClick={() => onSelectRoomType(category.id)} key={category.id} isSelected={selectedRoomType === category.id}>
                    <S.RoomTypeIcon />
                    <S.RoomInfo> &nbsp; {`${category.name} - ${category.room_type} - ${category.view_type}`}</S.RoomInfo>
                </S.RoomLayer>
            ))}
        </S.RoomBox>
    );
}

const AdminResvRoom: React.FC = () => {
    const navigate = useNavigate();
    const [Calendar, setCalendar] = useState(false);
    const [NoP, setNoP] = useState(false);
    const [room, setRoom] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedRoomType, setSelectedRoomType] = useState<number>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [adult, setAdult] = useState(0);
    const [teenager, setTeenager] = useState(0);
    const [child, setChild] = useState(0);

    const formattedStartDate = startDate ? format(startDate, 'yyyy-MM-dd') : '';
    const formattedEndDate = endDate ? format(endDate, 'yyyy-MM-dd') : '';

    const handleResvSubmit = async () => {
        if (startDate == null || endDate == null) {
            alert('날짜를 선택해주세요.');
            return;
        }

        if (startDate > endDate) {
            alert('체크아웃 날짜가 체크인 날짜보다 빠를 수 없습니다. 날짜를 다시 선택해주세요.');
            return;
        }

        if (adult <= 0 || selectedRoomType === null) {
            alert('모든 옵션을 선택해주세요.');
            return;
        }
        
        const formattedStartDate = format(startDate, 'yyyy-MM-dd');
        const formattedEndDate = format(endDate, 'yyyy-MM-dd');
        const daysDiff = differenceInDays(endDate, startDate);
        const breakfastOrders = Array(daysDiff).fill(true); // 또는 Array(daysDiff).fill(false)로 설정할 수 있음

        const generateRandomString = (length: number) => {
            return Math.random().toString(36).slice(2, length + 2);
        };

        const payload = {
            start_date: formattedStartDate,
            end_date: formattedEndDate,
            adult_cnt: adult,
            teenager_cnt: teenager,
            child_cnt: child,
            category_id: selectedRoomType,

            reservation_name: '조원준',
            reservation_phone_number: '010-4020-6292',

            breakfast_orders: breakfastOrders,

            // 결제
            imp_uid: generateRandomString(10),
            payment_method: 'CASH',
            total_price: 100000,
            discount_price: 10000,
            payment_price: 90000,
        };

        try {
            const response = await api.post('/reservation-rooms', payload);
            console.log(response.data);
            alert('예약이 완료되었습니다.');
            navigate(`/homepage`);
        } catch (error) {
            console.error('예약 중 오류가 발생했습니다:', error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 4000); // 3초 간격으로 이미지 인덱스 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트시 인터벌 정리
    }, []);

    const handleSelectRoomType = (type: number) => {
        setSelectedRoomType(type);
    };

    const handleSelectDate = (start_date: Date, end_date: Date) => {
        setStartDate(start_date);
        setEndDate(end_date);
    };

    const handleSelectPeople = (people: number[]) => {
        setAdult(people[0]);
        setTeenager(people[1]);
        setChild(people[2]);
    };

    const toggleCalendar = () => {
        setCalendar(!Calendar);
    };

    const toggleNoP = () => {
        setNoP(!NoP);
    };

    const toggleRoom = () => {
        setRoom(!room);
    };

    return (
        <S.Container>
            <TopBar isAdmin={true} pageName="관리자 예약" />
            <S.Layout>
                <S.Contents onClick={toggleCalendar}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>객실 이용시간은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleNoP}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleRoom}>
                    <S.Title>객실 유형 선택</S.Title>
                    <S.SubTitle>어떤 객실을 선택할까요</S.SubTitle>
                </S.Contents>
                <S.ConfirmButton onClick={handleResvSubmit}>완료</S.ConfirmButton>
            </S.Layout>
            <S.BodyArea>
            {Calendar && <RoomCalendar onSelectDate={handleSelectDate} />} {/* 캘린더 컴포넌트 */}
                {NoP && <PeoplePickerComponent onSelectPeople={handleSelectPeople} />} {/* 인원 선택 컴포넌트 */}
                {room && <RoomType 
                            onSelectRoomType={handleSelectRoomType} 
                            selectedRoomType={selectedRoomType} 
                            startDate={formattedStartDate}
                            endDate={formattedEndDate}
                            adultCnt={adult}
                            teenagerCnt={teenager}
                            childCnt={child}
                            />} {/* 방 선택 컴포넌트 */}
            </S.BodyArea>
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
    );
}

export default AdminResvRoom;