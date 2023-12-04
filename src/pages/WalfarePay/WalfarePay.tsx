import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import CenterBox from "./CenterBox";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const WalfarePay: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { amenPrice } = location.state || {}; // props로 전달된 방 가격 정보

    const handlePay = () => {
        alert("예약되었습니다.");
        navigate(`/homepage`);
    }

    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="부대/복리 시설 결제"/>
                <S.MainBody>
                    <S.SidebarArea></S.SidebarArea>
                        <S.RightBody>
                            <CenterBox></CenterBox>
                        </S.RightBody>
                        <S.PayMenubarArea>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>부대/복리시설 이름</S.PayMenubarTitle>
                            <S.PayMenubarContents>스키장</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>시설 이용일</S.PayMenubarTitle>
                            <S.PayMenubarContents>2023.12.07</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PayMenubarWrapper>
                            <S.PayMenubarTitle>인원</S.PayMenubarTitle>
                            <S.PayMenubarContents>3명</S.PayMenubarContents>
                        </S.PayMenubarWrapper>
                        <S.PriceArea>
                            <S.PayMenubarContents>총 결제금액</S.PayMenubarContents>
                            <S.redText>{ amenPrice }원</S.redText>
                            <S.PayMenubarContents>적립 마일리지</S.PayMenubarContents>
                            <S.redText>{ amenPrice * 0.03 }원</S.redText>
                        </S.PriceArea>
                        <span onClick={handlePay}><Button buttonName="결제하기" /></span>
                        </S.PayMenubarArea>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default WalfarePay;