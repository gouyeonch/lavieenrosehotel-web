import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { S } from "./style";

const PayMenubarArea = styled.div`
    width: 500px; 
    height: 1029px; 
    position: relative; 
    background: white; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: inline-flex;

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
    color: rgba(0, 0, 0, 0.44); 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 200; 
    line-height: 37.50px; 
    word-wrap: break-word;
`;
const PayMenubarWrapper = styled.div`
height: 100px;
background-color: white;
top: 50px;
width: 300px;
`;

const PayMenubarContents = styled.div`
    color: black; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 37.50px; 
    word-wrap: break-word;
`;

function PayMenubarUser() {
    return (
        <PayMenubarArea>
            <PayMenubarTitle>부대/복리시설 이름</PayMenubarTitle>
            <PayMenubarContents>스키</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>시설 이용일</PayMenubarTitle>
            <PayMenubarContents>2023.11.25</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>인원</PayMenubarTitle>
            <PayMenubarContents>성인1 청소년1 아동2</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarContents>총 결제 금액</PayMenubarContents>
            <S.redText>100,000원</S.redText>
            <PayMenubarContents>적립마일리지</PayMenubarContents>
            <Button buttonName="결제하기"/>
        </PayMenubarArea>
    );
}

export default PayMenubarUser;