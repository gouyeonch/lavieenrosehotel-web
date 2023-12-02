import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	box-sizing: border-box;
	text-align: center;
    text-decoration: none;
`;

const SidebarArea = styled.div`
    height: 1030px;
    background-color: #f7f7f5;
    top: 50px;
    width: 300px;
    border-right: 1px solid #C6BCBC;
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
    font-size: 30px;
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


function SidebarAdmin() {
    return (
        <SidebarArea>
            <SidebarAreaTitle>관리페이지</SidebarAreaTitle>
            <SidebarWrapper>
                <SidebarTitle>객실관리</SidebarTitle>
                <StyledLink to="/adminManageRoom"><SidebarContents>개별 객실 관리</SidebarContents></StyledLink>
                <StyledLink to="/adminCheckRoomCat"><SidebarContents>객실 카테고리 관리</SidebarContents></StyledLink>
                <StyledLink to="/adminCheckResvRoom"><SidebarContents>객실 예약현황 확인</SidebarContents></StyledLink>
            </SidebarWrapper>
            <SidebarWrapper>
                <SidebarTitle>숙박관리</SidebarTitle>
                <StyledLink to="/adminResvRoom"><SidebarContents>숙박 관리</SidebarContents></StyledLink>
            </SidebarWrapper>
            <SidebarWrapper>
                <SidebarTitle>부대/복리 시설 관리</SidebarTitle>
                <StyledLink to="/adminCheckAmenCat"><SidebarContents>부대/복리 시설 관리</SidebarContents></StyledLink>
            </SidebarWrapper>
        </SidebarArea>
    );
}

export default SidebarAdmin;