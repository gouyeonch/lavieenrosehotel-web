import styled from "styled-components";
import PhoneCkImg from "../../assets/buttons/PhoneCk.svg"

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const Title = styled.div`
    margin-top: 15px;

    text-align: center;

    color: black;
    font-size: 25px;
    font-family: Inter;
    font-weight: 700;
    line-height: 37.50px;
    word-wrap: break-word
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column; 

    margin: 0 auto;
    margin-top: 50px;

    width: 465px;

    gap: 8px;
`;

const FormBox = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 6px 8px;
    gap: 6px;
    border-radius: 5px; 
    overflow: hidden; 
    border: 1px rgba(0, 0, 0, 0.66) solid
`;

const InputBox = styled.textarea`
    line-height: 28px;

    padding-left: 10px; 

    width: 427px;
    height: 30px;
    font-size: 13px;
    resize: none;
    border-radius: 5px;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const PwInputBox = styled.input`
    line-height: 28px;

    padding-left: 10px; 

    width: 427px;
    height: 32px;
    font-size: 13px;
    resize: none;
    border-radius: 5px;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const PhoneBox = styled.input`
    display: flex;

    width: 430px;
    height: 35px;
`;

const PhoneCk = styled.div`
    border-radius: 5px;
    border: 1px rgba(0, 0, 0, 0.44) solid
`;

const PhoneCkBtn = styled.div`
    margin-left: auto;
    margin-right: 6px;
    width: 112px;
    height: 43px;
    background-image: url(${PhoneCkImg});

    cursor: pointer;
`;

export const S = {
    Container,
    Title,
    FormContainer,
    FormBox,
    InputBox,
    PwInputBox,
    PhoneBox,
    PhoneCk,
    PhoneCkBtn,
}

