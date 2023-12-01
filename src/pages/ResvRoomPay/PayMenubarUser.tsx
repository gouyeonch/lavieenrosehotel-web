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
    word-wrap: break-word
`;

function PayMenubarUser() {
    return (
        <PayMenubarArea>
            <PayMenubarTitle>객실이름</PayMenubarTitle>
            <PayMenubarContents>패밀리-일반객실-정원전망-성인</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>기간</PayMenubarTitle>
            <PayMenubarContents>4일</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>체크인</PayMenubarTitle>
            <PayMenubarContents>11.05 일 12:00</PayMenubarContents>
            <PayMenubarWrapper>
            </PayMenubarWrapper>
            <PayMenubarTitle>체크아웃</PayMenubarTitle>
            <PayMenubarContents>11.08 수 12:00</PayMenubarContents>
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