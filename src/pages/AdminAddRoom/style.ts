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
    font-size:18px;
    font-family: Noto Sans KR; 
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

const TextInput = styled.input`
    width: 100px;
    height: 25px;
    margin: 0 50px 0 0;
`

const SelectInput = styled.select`
    height: 25px;
    width: 100px;
    margin: 0 50px 0 0;
`

const nbsp = styled.a`
    width: 80px;
    margin: 0 8% 0 0;
`;

const NumberInput = styled.input`
     height: 20px;
     width: 80px;
     margin: 0 80px 0 0; 
`
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center; /* 가로 중앙 정렬 */
`;
export const S = {
    Container,
    MainBody,
    RightBody,
    InfoForm,
    FloatingButton,
    ButtonDiv,
    TextInput,
    SelectInput,
    nbsp,
    NumberInput,
    CheckBoxContainer
  };