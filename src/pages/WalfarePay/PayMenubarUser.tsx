import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { S } from "./style";

const PayMenubarArea = styled.div`
    width: 400px;
    height: auto;
    flex-shrink: 0;
    margin-top: 20px;
    margin-right: 200px;
`;

const PayMenubarWrapper = styled.div`
    display: flex;
    width: 400px;
    height: 90px;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
`;

const PayMenubarTitle = styled.div`
    color: rgba(0, 0, 0, 0.44); 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 200; 
    line-height: 37.50px; 
    word-wrap: break-word;
`;


const PayMenubarContents = styled.div`
    color: black; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 37.50px; 
    word-wrap: break-word
`;

const PriceArea = styled.div`
    display: flex;
    width: 400px;
    height: 90px;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    margin-top: 170px;
    margin-bottom: 100px;
`;


function PayMenubarUser() {
    return (
        <PayMenubarArea>
            <PayMenubarWrapper>
                <PayMenubarTitle>부대/복리 시설</PayMenubarTitle>
                <PayMenubarContents>패밀리-일반객실-정원전망-성인</PayMenubarContents>
            </PayMenubarWrapper>
            <PayMenubarWrapper>
                <PayMenubarTitle>시설 이용일</PayMenubarTitle>
                <PayMenubarContents>4일</PayMenubarContents>
            </PayMenubarWrapper>
            <PayMenubarWrapper>
                <PayMenubarTitle>인원</PayMenubarTitle>
                <PayMenubarContents>11.05 일 12:00</PayMenubarContents>
            </PayMenubarWrapper>
            <PriceArea>
                <PayMenubarContents>총 결제금액</PayMenubarContents>
                <S.redText>256,000원</S.redText>
                <PayMenubarContents>적립 마일리지</PayMenubarContents>
                <S.redText>2,560원</S.redText>
            </PriceArea>
            <Button buttonName="결제하기"/>
        </PayMenubarArea>
    );
}

export default PayMenubarUser;