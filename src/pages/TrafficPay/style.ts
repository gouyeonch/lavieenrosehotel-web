import styled from "styled-components";


const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const MainBody = styled.div`
    display: flex;

    height: 1030px;
`;

const RightBody = styled.div`
    width: calc(100% - 300px);
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







const GrayText = styled.div`
    text-align: center; 
    color: gray; 
    font-size: 20px; 
    font-family: Noto Sans KR; 
    font-weight: 500; 
    word-wrap: break-word;
`



const redText = styled.div`
    color: #FF0000; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 500; 
    line-height: 37.50px; 
    word-wrap: break-word
`



const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`

const TitleText = styled.div`

    margin-bottom: 20px;

    color: black;
    font-size: 35px;
    font-family: Noto Sans KR;
    font-weight: 500;
    word-wrap: break-word
`
const Margin = styled.div`

    margin-bottom: 40px;

`

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    GrayText,
    redText,
    CenterContainer,
    TitleText,
    Margin,
  };