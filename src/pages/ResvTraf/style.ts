import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`;

const Layout = styled.div`
    display: inline-flex;
    width: 100%;
    height: 90px;
    padding: 5px 981px 5px 107px;
    align-items: flex-start;
    gap: 26px;
    border-bottom: 1px solid #C6BCBC;
`;

const Contents = styled.button`
    width: 260px;
    height: 90px;
    border: none;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #FFFFFF;
    }
`;

const Title = styled.div`
    width: 120px;
    height: 33px;
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.44);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
`;

const SubTitle = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.44px;
    margin-top: 20px;
`;

const BodyArea = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: #FFFFFF;
`;

const BlueLine = styled.div`
    border: 1px solid #1745EB;
    background: #1745EB;
    width: 100px;
    height: 1px;
    margin-left: 490px;
    margin-top: -2px;
`;

const ConfirmButton = styled.button`
    width: 260px;
    height: 90px;
    border: none;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #FFFFFF;
    }
`;

export const S = {
    Container,
    Layout,
    Contents,
    Title,
    SubTitle,
    BodyArea,
    BlueLine,
    ConfirmButton,
}

