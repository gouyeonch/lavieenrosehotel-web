import styled from "styled-components";
import PhoneCkImg from "../../assets/buttons/PhoneCk.svg"
import LoginImg from "../../assets/buttons/Login.svg"
import KakaoImg from "../../assets/buttons/Kakao.svg"
import GoogleImg from "../../assets/buttons/Google.svg"
import OrImg from "../../assets/textContainer/or.svg"

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const LoginBox = styled.div`
    margin: 0 auto;
    margin-top: 20px;

    width: 328px;
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

const GotoSignUp = styled.div`
    margin-top: 25px;
    margin-left: 250px;

    color: #3A3A3A;
    font-size: 12px;
    font-family: Noto Sans KR;
    font-weight: 500;
    word-wrap: break-word;

    cursor: pointer;

`

const PhoneCkBtn = styled.div`
    margin-left: auto;
    margin-right: 6px;
    width: 112px;
    height: 43px;
    background-image: url(${PhoneCkImg});

    cursor: pointer;
`;

const LoginBtn = styled.div`
    margin-top: 20px;
    width: 328px;
    height: 45px;
    background-image: url(${LoginImg});

    cursor: pointer;
`;

const Or = styled.div`
    width: 328px;
    height: 45px;
    background-image: url(${OrImg});

    cursor: pointer;
`;

const KakaoBtn = styled.div`
    width: 328px;
    height: 45px;
    background-image: url(${KakaoImg});

    cursor: pointer;
`;

const GoogleBtn = styled.div`
    width: 328px;
    height: 45px;
    background-image: url(${GoogleImg});

    cursor: pointer;
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

export const S = {
    Container,
    LoginBox,
    Title,
    GotoSignUp,
    PhoneCkBtn,
    LoginBtn,
    Or,
    KakaoBtn,
    GoogleBtn,
    PwInputBox,
}

