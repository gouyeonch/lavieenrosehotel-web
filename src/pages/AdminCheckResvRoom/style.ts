import styled from "styled-components";
import CancelResvImg from  "../../assets/icons/CancelResv.svg"
import CheckIconImg from  "../../assets/icons/CheckIcon.svg"

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
    cursor: pointer;
`

const ResvLeft = styled.div`
    width: 70%; 
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
    display: inline-flex;
    cursor: pointer;
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

const CheckIn = styled.div`
    
    margin-top: 95px;
    margin-left: auto;
    margin-right: 10px;
    min-width: 130px; 
    height: 41px; 
    padding-left: 10px; 
    padding-right: 10px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 10px; 
    overflow: hidden; 
    border: 1.50px #3443EB solid; 
    justify-content: flex-start; 
    align-items: center; 
    gap: 9px; 
    display: inline-flex;
    cursor: pointer;
`

const CheckInText = styled.div`
    color: #3443EB;
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 500; 
    line-height: 37.50px; 
    word-wrap: break-word
`

const CheckInIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${CheckIconImg});
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

const ButtonBox = styled.div`
    display: flex;
    margin-left: auto;
`

export const S = {
    Container,
    MainBody,
    RightBody,
    ResvList,
    ResvContainer,
    ResvLeft,
    ResvText,
    CancelResv,
    CancelResvText,
    CancelResvIcon,
    CheckIn,
    CheckInText,
    CheckInIcon,
    NotFoundContainer,
    NotFoundText,
    ButtonBox,
  };