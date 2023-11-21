import React, { useState } from "react";
import styled from "styled-components";

const SidebarArea = styled.div`
    height: 100vh;
    background-color: #f7f7f5;
    top: 50px;
    width: 300px;
`;

const SidebarAreaTitle = styled.div`
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

const SidebarTitle = styled.div`
    color: black;
    font-family: Inter;
    font-size: 25px;
    font-weight: 700;
    line-height: normal;
`;
const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;
`;

const SidebarContents = styled.div`
color: #000;

font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 100;
line-height: normal;
`;


function SidebarUser() {
    return (
        <SidebarArea>
            <SidebarAreaTitle>전체 메뉴</SidebarAreaTitle>
            <SidebarWrapper>
                <SidebarTitle>객실 예약 관리</SidebarTitle>
                <SidebarContents>객실 예약 현황 확인</SidebarContents>
            </SidebarWrapper>
            <SidebarWrapper>
                <SidebarTitle>부대/복리 시설예약 관리</SidebarTitle>
                <SidebarContents>부대/복리 시설예약 현황 확인</SidebarContents>
            </SidebarWrapper>
            <SidebarWrapper>
                <SidebarTitle>교통편예약 관리</SidebarTitle>
                <SidebarContents>교통편 예약확인</SidebarContents>
            </SidebarWrapper>
        </SidebarArea>
    );
}

export default SidebarUser;