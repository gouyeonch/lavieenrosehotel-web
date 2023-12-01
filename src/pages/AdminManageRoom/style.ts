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

const InfoForm = styled.div`
    color: 'black';
    fontSize: 20;
    fontFamily: 'Inter';
    fontWeight: '700';
    lineHeight: 30;
    wordWrap: 'break-word';
    margin-top: 8px;
    margin-left: 25px;
    display: flex;
    flex-direction: column; 
    gap: 15px;
`


const FloatingButton = styled.button`
    border: none;
    outline: none;
    background:none;
`

const ButtonDiv = styled.div`
    width: 900px;
    height: 100px;
    display:flex;
    margin-left: auto;
`
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
    font-weight: 600;
    word-wrap: break-word
`
const RoomList = styled.div`
    border: 1px solid #000;
    overflow-y: auto;
    border-radius: 10px; 
    height : 60%;
    width : 95%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    color: black;
    font-size: 20px;
    font-family: Noto Sans KR;
    font-weight: 600;
    word-wrap: break-word
`
const RoomContainer = styled.div`
    
    margin-top: 20px;
    margin-left: 20px;
    width: calc(100% - 100px); 
    height: 50px; 
    padding: 16px; 
    background: white; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05); 
    border: 1px #EEEEEE solid;
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: flex;
`
const RoomLeft = styled.div`
    width: 70%; 
    height: 80%; 
    background: white; 
    flex-direction: column; 
    justify-content: space-around; 
    align-items: flex-start; 
    gap: 16px; 
    display: inline-flex
`
const RoomText = styled.div`
    text-align: center; 
    color: black; 
    font-size: 20px; 
    font-family: Noto Sans KR; 
    font-weight: 700; 
    word-wrap: break-word;
    
`

const DivForButton = styled.div`
    margin-left: 80%; 
    width : 100%;
`

export const S = {
    Container,
    MainBody,
    RightBody,
    InfoForm,
    FloatingButton,
    ButtonDiv,
    NotFoundContainer,
    NotFoundText,
    RoomList,
    RoomContainer,
    RoomLeft,
    RoomText,
    DivForButton
  };