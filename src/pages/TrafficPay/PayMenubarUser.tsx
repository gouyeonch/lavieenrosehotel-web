import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { S } from "./style";

const PayMenubarArea = styled.div`
    height: 1030px;
    background-color: white;
    top: 50px;
    width: 300px;
    
    
`;

const PayMenubarAreaTitle = styled.div`
    display: flex;
    width: 300px;
    height: 50px;
    padding: 9px 21px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;    
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-weight: 700;
    line-height: 150%; /* 37.5px */
    letter-spacing: -0.55px;
`;

const PayMenubarTitle = styled.div`
    color: gray;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
`;
const PayMenubarWrapper = styled.div`
height: 100px;
background-color: white;
top: 50px;
width: 300px;
`;

const PayMenubarContents = styled.div`
    color: black;
    font-family: Inter;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
`;

function PayMenubarUser() {
    return (
        <PayMenubarArea>
            <PayMenubarTitle>탑승날짜</PayMenubarTitle>
            <PayMenubarTitle>2023.11.05</PayMenubarTitle>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>탑승시간</PayMenubarTitle>
            <PayMenubarContents>13:00</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>탑승지</PayMenubarTitle>
            <PayMenubarContents>A spot</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>옵션</PayMenubarTitle>
            <PayMenubarContents>편도-리조트행-3명</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarContents>총 결제 금액</PayMenubarContents>
            <S.redText>256,000원</S.redText>
            <PayMenubarContents>적립마일리지</PayMenubarContents>
            <Button buttonName="결제하기"/>
        </PayMenubarArea>
    );
}

export default PayMenubarUser;