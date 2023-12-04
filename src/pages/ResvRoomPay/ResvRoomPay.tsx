import React, { useState, useEffect } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
import CenterBox from "./CenterBox";
import Button from "../../components/Button/Button";

const ResvRoomPay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { roomPrice } = location.state || {}; // props로 전달된 방 가격 정보

    const handlePay = () => {
        alert("예약되었습니다.");
        navigate(`/homepage`);
    }
    
    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="객실 결제"/>
                <S.MainBody>
                    <S.SidebarArea></S.SidebarArea>
                        <S.RightBody>
                            <CenterBox></CenterBox>
                        </S.RightBody>
                        <S.PayMenubarArea>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>객실이름</S.PayMenubarTitle>
                            <S.PayMenubarContents>패밀리-일반객실-정원전망-성인</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>기간</S.PayMenubarTitle>
                            <S.PayMenubarContents>4일</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>체크인</S.PayMenubarTitle>
                            <S.PayMenubarContents>12.05 일 12:00</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>체크아웃</S.PayMenubarTitle>
                            <S.PayMenubarContents>12.06 수 12:00</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PriceArea>
                            <S.PayMenubarContents>총 결제금액</S.PayMenubarContents>
                            <S.redText>{ roomPrice }원</S.redText>
                            <S.PayMenubarContents>적립 마일리지</S.PayMenubarContents>
                            <S.redText>{ roomPrice * 0.03 }원</S.redText>
                        </S.PriceArea>
                        <span onClick={handlePay}><Button buttonName="결제하기" /></span>
                        </S.PayMenubarArea>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default ResvRoomPay;