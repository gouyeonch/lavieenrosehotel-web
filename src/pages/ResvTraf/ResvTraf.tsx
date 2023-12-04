import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import { addMonths } from 'date-fns'; 
import Bus1 from "../../assets/images/bus1.png";
import Bus2 from "../../assets/images/bus2.png";
import api from "../../api/Axios";
import { differenceInDays , format } from 'date-fns';
import { useNavigate } from "react-router-dom";

const imageUrls = [
    Bus1,
    Bus2,
];

interface CalendarProps {
    onSelectDate: (startDate: Date, endDate: Date) => void;
}

const TrafCalendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();
    const threeMonthsFromNow: Date = addMonths(new Date(), 3);

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
                placeholderText="출발하는 날짜 선택"
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
                placeholderText="돌아오는 날짜 선택"
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
            />
        </S.CalendarContainer>
    );
};

interface SpotProps {
    onSelectLocation: (type: string) => void;
    selectedLocation?: string | null;
}

const SpotLocation: React.FC<SpotProps> = ({ onSelectLocation, selectedLocation }) => {
    return (
        <S.SpotBox>
            <S.SpotTitleText>탑승지 목록</S.SpotTitleText>
            <S.SpotLayer onClick={() => onSelectLocation('홍대')} isSelected={selectedLocation === '홍대'}>
                <S.SpotIcon />
                    <S.SpotText>홍대</S.SpotText>
            </S.SpotLayer>
            <S.SpotLayer onClick={() => onSelectLocation('강남')} isSelected={selectedLocation === '강남'}>
                <S.SpotIcon />
                    <S.SpotText>강남</S.SpotText>
            </S.SpotLayer>
            <S.SpotLayer onClick={() => onSelectLocation('고속터미널')} isSelected={selectedLocation === '고속터미널'}>
                <S.SpotIcon />
                    <S.SpotText>고속터미널</S.SpotText>
            </S.SpotLayer>
        </S.SpotBox>
    );
}

interface TrafProps {
    onSelectTrafType: (type: number) => void;
    selectedTrafType?: number | null;
    id: number | null,
    name: string | null,
    capacity: number | null,
    price: number | null,
}

interface TrafInfo {
    id: number;
    name: string;
    capacity: number;
    price: number;
}

const TrafficType: React.FC<TrafProps> = ({ 
    onSelectTrafType, 
    selectedTrafType,
}) => {
    const [traffics, setTraffics] = useState<TrafInfo[]>([]);

    const getTrafficList = async () => {
        try {
            const resp = await api.get(`/transportations`);
            if (resp && resp.data) {
                setTraffics(resp.data.data);
                console.log(resp.data.data);
            }
            console.log(resp.data);
        } catch (error) {
            console.error('No data received', error);
        }
    };

    useEffect(() => {
        getTrafficList();
    }, []);

    return (
        <S.OptionBox>
            <S.OptionTitleText>옵션 목록</S.OptionTitleText>
            {traffics.map(traffic => (
                <S.OptionLayer onClick={() => onSelectTrafType(traffic.id)} key={traffic.id} isSelected={selectedTrafType === traffic.id}>
                <S.SpotIcon />
                    <S.SpotText>{traffic.name} - {traffic.capacity}명 - {traffic.price}원</S.SpotText>
                </S.OptionLayer>
            ))}
        </S.OptionBox>
    );
}

const ResvTraf: React.FC = () => {
    const navigate = useNavigate();
    const [Calendar, setCalendar] = useState(false);
    const [spot, setSpot] = useState(false);
    const [option, setOption] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [location, setLocation] = useState<string | null>();
    const [selectedTrafType, setSelectedTrafType] = useState<number>();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000); // 3초 간격으로 이미지 인덱스 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트시 인터벌 정리
    }, []);

    const toggleCalendar = () => {
        setCalendar(!Calendar);
    }

    const toggleSpot = () => {
        setSpot(!spot);
    }

    const toggleOption = () => {
        setOption(!option);
    }

    const handleResvSubmit = async () => {
        if (startDate == null || endDate == null) {
            alert('날짜를 선택해주세요.');
            return;
        }

        if (startDate > endDate) {
            alert('출발하는 날짜가 도착하는 날짜보다 빠를 수 없습니다. 날짜를 다시 선택해주세요.');
            return;
        }

        if (location === null || selectedTrafType === null) {
            alert('모든 옵션을 선택해주세요.');
            return;
        }
        
        const formattedStartDate = format(startDate, 'yyyy-MM-dd');
        const formattedEndDate = format(endDate, 'yyyy-MM-dd');

        // 현재 시간을 시드로 사용한 랜덤 숫자 생성 함수
        const getRandomNumberWithSeed = () => {
            const seed = Date.now(); // 현재 시간을 시드로 사용
            const random = Math.sin(seed) * 10000;
            return random - Math.floor(random);
        };

        // 예약할 때 마다 랜덤 imp_uid 생성
        const impUid = getRandomNumberWithSeed().toString().slice(2, 12); // 10자리로 자름.

        const payload = {
            start_date: formattedStartDate,
            end_date: formattedEndDate,
            type_id: selectedTrafType,
            location_name: location,

            reservation_name: '조원준',
            reservation_phone_number: '010-4020-6292',

            // 결제
            imp_uid: impUid,
            payment_method: 'KAKAOPAY',
            price: 65000,
            discount_price: 5000,
            payment_price: 60000,
        };

        try {
            const response = await api.post('/reservation-transportations', payload);
            console.log(response.data);
            alert('예약이 완료되었습니다.');
            navigate(`/homepage`);
        } catch (error) {
            console.error('예약 중 오류가 발생했습니다:', error);
        }
    };

    const handleSelectTrafType = (type: number) => {
        setSelectedTrafType(type);
    };

    const handleSelectDate = (start_date: Date, end_date: Date) => {
        setStartDate(start_date);
        setEndDate(end_date);
    };

    const handleSelectLocation = (location: string) => {
        setLocation(location);
    };

    return (
        <S.Container>
            <TopBar isAdmin={false} pageName="Lavieenrose" />
            <UserTopBar />
            <S.BlueLine />
            <S.Layout>
                <S.Contents onClick={toggleCalendar}>
                    <S.Title>날짜</S.Title>
                    <S.SubTitle>탑승 날짜는 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleSpot}>
                    <S.Title>탑승지</S.Title>
                    <S.SubTitle>탑승지는 어디인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={toggleOption}>
                    <S.Title>옵션선택</S.Title>
                    <S.SubTitle>세부옵션을 선택하세요</S.SubTitle>
                </S.Contents>
                <S.ConfirmButton onClick={handleResvSubmit}>완료</S.ConfirmButton>
            </S.Layout>
            <S.BodyArea>
                {Calendar && <TrafCalendar onSelectDate={handleSelectDate} />}
                {spot && <SpotLocation onSelectLocation={handleSelectLocation} selectedLocation={location} />} 
                {option && <TrafficType onSelectTrafType={handleSelectTrafType} selectedTrafType={selectedTrafType}/>}
            </S.BodyArea>
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
    );
}

export default ResvTraf;