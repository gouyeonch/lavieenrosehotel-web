import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { addMonths } from 'date-fns'; 
import Ski1 from "../../assets/images/ski1.png";
import Ski2 from "../../assets/images/ski2.png";
import WaterPark1 from "../../assets/images/waterpark1.png";
import WaterPark2 from "../../assets/images/waterpark2.png";
import api from "../../api/Axios";
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const imageUrls = [
    Ski1,
    Ski2,
    WaterPark1,
    WaterPark2,
];

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

interface CalendarProps {
    onSelectDate: (type: Date) => void;
}

const AmenCalendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
    const [startDate, setStartDate] = useState<Date | null>();
    const threeMonthsFromNow: Date = addMonths(new Date(), 3); // 오늘로부터 3개월 뒤의 날짜 계산

    useEffect(() => {
        if (startDate) {
            onSelectDate(startDate);
        }
    }, [startDate, onSelectDate]);

    return (
        <S.CalendarContainer marginLeft={400}>
            <DatePicker
                showIcon
                locale={ko} //한글
                dateFormat='yyyy.MM.dd' // 날짜 형태
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
                placeholderText="시설 이용 날짜 선택"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
            />
        </S.CalendarContainer>
    );
};

interface AmenTypeProps {
    onSelectAmenType: (type: string) => void;
    selectedAmenType: string;
}

const AmenType: React.FC<AmenTypeProps> = ({onSelectAmenType, selectedAmenType}) => {
    return (
        <S.AmenBox>
            <S.AmenTitleText>시설유형</S.AmenTitleText>
            <S.AmenLayer onClick={() => onSelectAmenType('SKI')} isSelected={selectedAmenType === 'SKI'}>
                <S.RoomTypeIcon />
                    &nbsp; 스키장
            </S.AmenLayer>
            <S.AmenLayer onClick={() => onSelectAmenType('WATER_PARK')} isSelected={selectedAmenType === 'WATER_PARK'}>
                <S.RoomTypeIcon />
                    &nbsp; 워터파크
            </S.AmenLayer>
        </S.AmenBox>
    );
}

const ResvAmen: React.FC = () => {
    const navigate = useNavigate();
    const [Calendar, setCalendar] = useState(false);
    const [NoP, setNoP] = useState(false);
    const [amen, setAmen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedAmenType, setSelectedAmenType] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [adult, setAdult] = useState(0);
    const [teenager, setTeenager] = useState(0);
    const [child, setChild] = useState(0);
    const [amenPrice, setAmenPrice] = useState(0);
    
    const handleResvSubmit = async () => {
        if (selectedDate == null) {
            alert('날짜를 선택해주세요.');
            return;
        }

        if (adult <= 0 || selectedAmenType === null) {
            alert('모든 옵션을 선택해주세요.');
            return;
        }

        if (selectedAmenType != '' && selectedDate != null && adult > 0) {
            const formattedDate = format(selectedDate, 'yyyy-MM-dd');
            console.log(formattedDate); // "yyyy-MM-dd" 형식의 날짜 출력
            
            // 현재 시간을 시드로 사용한 랜덤 숫자 생성 함수
            const getRandomNumberWithSeed = () => {
                const seed = Date.now(); // 현재 시간을 시드로 사용
                const random = Math.sin(seed) * 10000;
                return random - Math.floor(random);
            };

            // 예약할 때 마다 랜덤 imp_uid 생성
            const impUid = getRandomNumberWithSeed().toString().slice(2, 12); // 10자리로 자름.

            const payload = {
                amenity_type: selectedAmenType,
                start_date: formattedDate,
                adult_cnt: adult,
                teenager_cnt: teenager,
                child_cnt: child,
                reservation_name: '조원준',
                reservation_phone_number: '010-4020-6292',

                // 결제
                imp_uid: impUid,
                payment_method: 'CASH',
                total_price: amenPrice,
                discount_price: amenPrice * 0.03,
                payment_price: amenPrice * 0.97,
            };

            try {
                const response = await api.post('/reservation-amenities', payload);
                console.log(response.data);
                // alert('예약이 완료되었습니다.');
                navigate(`/homepage`);
            } catch (error) {
                console.error('예약 중 오류가 발생했습니다:', error);
            }
        }
        else {
            alert('모든 옵션을 선택해주세요.');
            return;
        }

        navigate(`/payAmen`, { state: { amenPrice }});
    };

    const handleAmenPriceCal = async () => {
        try {
            const resp = await api.get(`/reservation-amenity-price?totalCnt=${adult + teenager}&amenityType=${selectedAmenType}`);
            if (resp && resp.data) {
                const price = resp.data.data.total_price;
                setAmenPrice(price);
            }
            console.log(resp.data.data);
            alert(resp.data.data.total_price + "원");
        } catch (error) {
            console.error('No data received', error);
        }
    };

    const handleSelectAmenType = (type: string) => {
        setSelectedAmenType(type);
    }

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
    }

    const handleSelectPeople = (people: number[]) => {
        setAdult(people[0]);
        setTeenager(people[1]);
        setChild(people[2]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 4000); // 3초 간격으로 이미지 인덱스 변경
    
        return () => clearInterval(interval); // 컴포넌트 언마운트시 인터벌 정리
      }, []);

    const toggleCalendar = () => {
        setCalendar(!Calendar);
    };

    const toggleNoP = () => {
        setNoP(!NoP);
    };

    const toggleRoom = () => {
        setAmen(!amen);
    };

    return (
        <S.Container>
            <TopBar isAdmin={false} pageName="Lavieenrose" />
            <UserTopBar />
            <S.BlueLine />
            <S.Layout>
                <S.Contents onClick={toggleRoom}>
                    <S.Title>부대/복리시설 유형 선택</S.Title>
                    <S.SubTitle>어떤 시설을 선택할까요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleCalendar}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>시설이용일은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleNoP}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
                <S.ConfirmButton onClick={handleAmenPriceCal}>계산</S.ConfirmButton>
                <S.ConfirmButton onClick={handleResvSubmit}>예약</S.ConfirmButton>
            </S.Layout>
            <S.BodyArea>
                {amen && <AmenType onSelectAmenType={handleSelectAmenType} selectedAmenType={selectedAmenType}/>}
                {Calendar && <AmenCalendar onSelectDate={handleSelectDate} />}
                {NoP && <PeoplePickerComponent onSelectPeople={handleSelectPeople} />}
            </S.BodyArea>
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
        
    );
}

export default ResvAmen;