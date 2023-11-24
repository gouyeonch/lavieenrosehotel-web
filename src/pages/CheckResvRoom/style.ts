import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 1920px;
    height: 1080px;
    background-color: #FFFFFF;
`;

const MainBody = styled.div`
    display: flex;

    margin: 0 auto;
    width: 1920px;
    height: 1030px;
`;

const RightBody = styled.div`
    width: 1620px;
    height: 1030px;
`;

const ImgaeArea = styled.div`
    margin: 0 auto;
    width: 1920px;
    height: 938px;
    background-color: #FFFFFF;

    font-weight: 700;
    line-height: 900px;
    text-align: center;
`

const ResvContainer = styled.div`
    width: 100%; 
    height: 100%; 
    padding: 16px; 
    background: white; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05); 
    border: 1px #EEEEEE solid; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap: 16px; 
    display: inline-flex
`

const ResvText = styled.div`
    text-align: center; 
    color: black; 
    font-size: 16px; 
    font-family: Noto Sans KR; 
    font-weight: 500; 
    word-wrap: break-word;
`

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    ResvContainer,
    ResvText,
  };