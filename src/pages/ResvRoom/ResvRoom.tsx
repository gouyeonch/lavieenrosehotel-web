import React, { useState } from "react";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import CalendarComponent from "../../components/Calendar/Calendar";


const PeoplePickerComponent = () => {
    // 인원 선택 컴포넌트 구현
    return <div>인원 선택</div>;
}

const ResvRoom: React.FC = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [showPeoplePicker, setShowPeoplePicker] = useState(false);

    return (
        <S.Container>
            <TopBar pageName="홈페이지" />
            <UserTopBar />
            <S.Layout>
                <S.Contents onClick={() => setShowCalendar(!showCalendar)}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>객실 이용시간은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={() => setShowPeoplePicker(!showPeoplePicker)}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
            </S.Layout>
                {showCalendar && <CalendarComponent />} {/* 캘린더 컴포넌트 */}
                {showPeoplePicker && <PeoplePickerComponent />} {/* 인원 선택 컴포넌트 */}
            <S.BodyArea>
            </S.BodyArea>
        </S.Container>
        
    );

}

export default ResvRoom;