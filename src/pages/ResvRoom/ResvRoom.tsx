import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale'; //한국어 설정
import { addMonths } from 'date-fns';
import Room1 from "../../assets/images/room1.png";
import Room2 from "../../assets/images/room2.png";
import Room3 from "../../assets/images/room3.png";
import Room4 from "../../assets/images/room4.png";

// 슬라이드 이미지 URL 배열
const imageUrls = [
  Room1,
  Room2,
  Room3,
  Room4,
  // 추가 이미지 URL
];

const RoomCalendar = () => {
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();
    const threeMonthsFromNow: Date = addMonths(new Date(), 3); // 오늘로부터 3개월 뒤의 날짜 계산

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

const PeoplePickerComponent: React.FC = () => {
    const [adults, setAdults] = useState<number>(0);
    const [teenagers, setTeenagers] = useState<number>(0);
    const [children, setChildren] = useState<number>(0);

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

const RoomType = () => {
    // 객실 유형 선택 컴포넌트 구현
    return (
        <S.RoomBox>
            <S.RoomTitleText>등록된 객실</S.RoomTitleText>
            <S.RoomLayer>
                <S.RoomTypeIcon />
            </S.RoomLayer>
            <S.RoomLayer>
                <S.RoomTypeIcon />
            </S.RoomLayer>
            <S.RoomLayer>
                <S.RoomTypeIcon />
            </S.RoomLayer>
        </S.RoomBox>
    );
}

const ResvRoom: React.FC = () => {
    const [Calendar, setCalendar] = useState(false);
    const [NoP, setNoP] = useState(false);
    const [room, setRoom] = useState(false);
    const [isActiveCalendar, setIsActiveCalendar] = useState(false);
    const [isActiveNoP, setIsActiveNoP] = useState(false);
    const [isActiveRoom, setIsActiveRoom] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000); // 3초 간격으로 이미지 인덱스 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트시 인터벌 정리
    }, []);

    const toggleCalendar = () => {
        setCalendar(!Calendar);
        setNoP(false);
        setRoom(false);
        setIsActiveCalendar(!isActiveCalendar);
        setIsActiveNoP(false);
        setIsActiveRoom(false);
    };

    const toggleNoP = () => {
        setNoP(!NoP);
        setCalendar(false);
        setRoom(false);
        setIsActiveNoP(!isActiveNoP);
        setIsActiveCalendar(false);
        setIsActiveRoom(false);
    };

    const toggleRoom = () => {
        setRoom(!room);
        setCalendar(false);
        setNoP(false);
        setIsActiveRoom(!isActiveRoom);
        setIsActiveCalendar(false);
        setIsActiveNoP(false);
    };

    return (
        <S.Container>
            <TopBar isAdmin={false} pageName="홈페이지" />
            <UserTopBar />
            <S.BlueLine />
            <S.Layout>
                <S.Contents isActive={isActiveCalendar} onClick={toggleCalendar}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>객실 이용시간은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents isActive={isActiveNoP} onClick={toggleNoP}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
                <S.Contents isActive={isActiveRoom} onClick={toggleRoom}>
                    <S.Title>객실 유형 선택</S.Title>
                    <S.SubTitle>어떤 객실을 선택할까요</S.SubTitle>
                </S.Contents>
            </S.Layout>
            <S.BodyArea>
                {Calendar && <RoomCalendar />} {/* 캘린더 컴포넌트 */}
                {NoP && <PeoplePickerComponent />} {/* 인원 선택 컴포넌트 */}
                {room && <RoomType />} {/* 방 선택 컴포넌트 */}
            </S.BodyArea>
            <S.ImageArea backgroundImage={imageUrls[currentImageIndex]} />
        </S.Container>
    );
}

export default ResvRoom;