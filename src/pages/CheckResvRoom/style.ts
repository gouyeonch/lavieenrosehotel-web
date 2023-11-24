import styled from "styled-components";
import CancelResvBtnImg from  "../../assets/buttons/CancelResvBtn.svg"

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

const ResvList = styled.div`
    margin-top: 8px;
    margin-left: 25px;
    display: flex;
    flex-direction: column; 
    gap: 15px;
`

const ResvContainer = styled.div`
    
    width: 1488px; 
    height: 148px; 
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

const CancelResvBtn = styled.div`
    position :relative;
    width: 140px;
    height: 38px;
    top: 0px;
    left: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 10px; 
    border: 1.50px #FF0000 solid;
    overflow: hidden;

    background-image: url(${CancelResvBtnImg})
`

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    ResvList,
    ResvContainer,
    ResvText,
    CancelResvBtn,
  };