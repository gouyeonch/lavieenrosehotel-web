import styled from "styled-components";


const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const SidebarArea = styled.div`
    height: 1030px;
    background-color: white;
    top: 50px;
    width: 300px;
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
    color: rgba(0, 0, 0, 0.44); 
    font-size: 30px; font-family: 
    Inter; font-weight: 200; 
    line-height: 45px; 
    word-wrap: break-word;
`



const redText = styled.div`
    color: #FF0707; 
    font-size: 30px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 45px; 
    word-wrap: break-word;
`



const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`

const TitleText = styled.div`

    color: black; 
    font-size: 30px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 45px; 
    word-wrap: break-word;
`
const Margin = styled.div`
    color: white;
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
    SidebarArea,
  };