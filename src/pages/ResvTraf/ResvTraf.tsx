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

const imageUrls = [
    Bus1,
    Bus2,
];

const TrafCalendar = () => {
    const [startDate, setStartDate] = useState<Date | null>();
    const threeMonthsFromNow: Date = addMonths(new Date(), 3); // 오늘로부터 3개월 뒤의 날짜 계산

    return (
        <S.CalendarContainer marginLeft={100}>
            <DatePicker
                showIcon
                locale={ko} //한글
                dateFormat='yyyy.MM.dd' // 날짜 형태
                shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                minDate={new Date()} // minDate 이전 날짜 선택 불가
                maxDate={threeMonthsFromNow} // maxDate 이후 날짜 선택 불가
                placeholderText="탑승 날짜 선택"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
            />
        </S.CalendarContainer>
        
    );
};

const SpotLocation = () => {
    return (
        <S.SpotBox>
            <S.SpotTitleText>탑승지 목록</S.SpotTitleText>
            <S.SpotLayer>
                <S.SpotIcon />
                    <S.SpotText>동국대학교 정문</S.SpotText>
            </S.SpotLayer>
            <S.SpotLayer>
                <S.SpotIcon />
                    <S.SpotText>동국대학교 후문</S.SpotText>
            </S.SpotLayer>
            <S.SpotLayer>
                <S.SpotIcon />
                    <S.SpotText>동국대학교 팔정도</S.SpotText>
            </S.SpotLayer>
        </S.SpotBox>
    );
}

const TrafficType = () => {
    return (
        <S.OptionBox>
            <S.OptionTitleText>옵션 목록</S.OptionTitleText>
            <S.OptionLayer>
                <S.SpotIcon />
                    <S.SpotText>권종 선택</S.SpotText>
            </S.OptionLayer>
            <S.OptionLayer>
                <S.SpotIcon />
                    <S.SpotText>방향 선택</S.SpotText>
            </S.OptionLayer>
            <S.OptionLayer>
                <S.SpotIcon />
                    <S.SpotText>인원 선택</S.SpotText>
            </S.OptionLayer>
        </S.OptionBox>
    );
}

const ResvTraf: React.FC = () => {
    const [Calendar, setCalendar] = useState(false);
    const [spot, setSpot] = useState(false);
    const [option, setOption] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
                <S.ConfirmButton>완료</S.ConfirmButton>
            </S.Layout>
            <S.BodyArea>
                {Calendar && <TrafCalendar />}
                {spot && <SpotLocation />} 
                {option && <TrafficType />}
            </S.BodyArea>
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
    );
}

export default ResvTraf;