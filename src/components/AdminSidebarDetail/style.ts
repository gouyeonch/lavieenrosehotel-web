import styled from "styled-components";
import Cicle from "../../assets/icons/Circle.svg";

const Text = styled.span`
    color: #E8E3CE;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 45px */
    letter-spacing: -0.66px;
`;

const CircleArea = styled.span`
    width: 60px;
    height: 61px;
    flex-shrink: 0;
    background-image: url(${Cicle});
    display: flex; // flex를 사용해 내부 요소를 정렬
    justify-content: center; // 수평 가운데 정렬
    align-items: center; // 수직 가운데 정렬
`;

const Layout = styled.div`
    width: 250px;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;

    // 마지막 Layout을 제외한 모든 Layout에 가상 요소 적용
    &:not(:last-child) ${Layout} {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 100%; // Layout의 하단에서 시작
            left: 30px; // 적절한 위치 조정
            width: 2px;
            height: 70%; // 적절한 길이 조정
            background-color: #E8E3CE;
        }
    }
`;

const SidebarArea = styled.div`
    height: 100vh;
    top: 50px;
    width: 300px;
`;

export const S = {
    CircleArea,
    Text,
    SidebarWrapper,
    Layout,
    SidebarArea,
};

