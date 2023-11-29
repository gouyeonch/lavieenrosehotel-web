import React, { useState } from "react";

import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import CalendarComponent from "../../components/Calendar/Calendar";

// 인원 선택 컴포넌트
const PeoplePickerComponent = () => {
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

const AmenType = () => {
    // 객실 유형 선택 컴포넌트 구현
    return (
        <S.AmenBox>
            <S.AmenTitleText>시설유형</S.AmenTitleText>
            <S.AmenLayer>
                <S.RoomTypeIcon>

                </S.RoomTypeIcon>
            </S.AmenLayer>
            <S.AmenLayer>
                <S.RoomTypeIcon>

                </S.RoomTypeIcon>
            </S.AmenLayer>
        </S.AmenBox>
    );
}

const ResvAmen: React.FC = () => {
    const [Calendar, setCalendar] = useState(false);
    const [NoP, setNoP] = useState(false);
    const [amen, setAmen] = useState(false);
    const [isActiveCalendar, setIsActiveCalendar] = useState(false);
    const [isActiveNoP, setIsActiveNoP] = useState(false);
    const [isActiveRoom, setIsActiveRoom] = useState(false);

    const toggleCalendar = () => {
        setCalendar(!Calendar);
        setNoP(false);
        setAmen(false);
        setIsActiveCalendar(!isActiveCalendar);
        setIsActiveNoP(false);
        setIsActiveRoom(false);
    };

    const toggleNoP = () => {
        setNoP(!NoP);
        setCalendar(false);
        setAmen(false);
        setIsActiveNoP(!isActiveNoP);
        setIsActiveCalendar(false);
        setIsActiveRoom(false);
    };

    const toggleRoom = () => {
        setAmen(!amen);
        setCalendar(false);
        setNoP(false);
        setIsActiveRoom(!isActiveRoom);
        setIsActiveCalendar(false);
        setIsActiveNoP(false);
    };

    return (
        <S.Container>
            <TopBar pageName="홈페이지" />
            <UserTopBar />
            <S.BlueLine />
            <S.Layout>
                <S.Contents isActive={isActiveRoom} onClick={toggleRoom}>
                    <S.Title>부대/복리시설 유형 선택</S.Title>
                    <S.SubTitle>어떤 시설을 선택할까요</S.SubTitle>
                </S.Contents>
                <S.Contents isActive={isActiveCalendar} onClick={toggleCalendar}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>시설이용일은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents isActive={isActiveNoP} onClick={toggleNoP}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
            </S.Layout>
            <S.BodyArea>
                {amen && <AmenType />}
                {Calendar && <CalendarComponent />}
                {NoP && <PeoplePickerComponent />}
            </S.BodyArea>
        </S.Container>
        
    );
}

export default ResvAmen;