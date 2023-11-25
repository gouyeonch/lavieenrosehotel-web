import styled from "styled-components";
import CancelResvImg from  "../../assets/icons/CancelResv.svg"

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

const ResvList = styled.div`
    margin-top: 8px;
    margin-left: 25px;
    display: flex;
    flex-direction: column; 
    gap: 15px;
`

const ResvContainer = styled.div`
    
    width: calc(100% - 100px); 
    height: 148px; 
    padding: 16px; 
    background: white; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05); 
    border: 1px #EEEEEE solid; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: flex;
`

const ResvLeft = styled.div`
    width: 1188px; 
    height: 148px; 
    background: white; 
    flex-direction: column; 
    justify-content: space-around; 
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

const CancelResv = styled.div`
    margin-top: 95px;
    margin-left: auto;
    margin-right: 10px;
    min-width: 143px; 
    height: 41px; 
    padding-left: 10px; 
    padding-right: 10px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 10px; 
    overflow: hidden; 
    border: 1.50px #FF0000 solid; 
    justify-content: flex-start; 
    align-items: center; 
    gap: 9px; 
    display: inline-flex
`

const CancelResvText = styled.div`
    color: #FF0000; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 500; 
    line-height: 37.50px; 
    word-wrap: break-word
`

const CancelResvIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${CancelResvImg});
`;

const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`

const NotFoundText = styled.div`
    margin-top: 230px;
    margin-bottom: 20px;

    color: black;
    font-size: 35px;
    font-family: Noto Sans KR;
    font-weight: 500;
    word-wrap: break-word
`

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    ResvList,
    ResvContainer,
    ResvLeft,
    ResvText,
    CancelResv,
    CancelResvText,
    CancelResvIcon,
    NotFoundContainer,
    NotFoundText,
  };