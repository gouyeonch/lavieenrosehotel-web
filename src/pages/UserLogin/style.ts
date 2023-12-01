import styled from 'styled-components';
import KakaoIconImg from "../../assets/icons/Kakao.svg"
import GoogleIconImg from "../../assets/icons/Google.svg"

const ContainerLogin = styled.div`
    width: 152px;
    height: 26px;
    padding-left: 140px;
    padding-right: 48px;
    padding-top: 1px;
    padding-bottom: 1px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const TextLogin = styled.div`
    color: black;
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 900;
    word-wrap: break-word;
`;

const MainContainer = styled.div`
    background: white;
    width: 834px;
    height: 1419px;
    padding-top: 64px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    display: inline-flex;
`;

const SubContainer = styled.div`
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 1px;
    padding-bottom: 1px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: flex;
    flex-direction: column;
`;

const InputContainer = styled.div`
    flex-direction: column;
    padding-bottom: 17px;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    display: flex;    
    word-break: break-all
`;

const InputLabel = styled.div`
    color: #3A3A3A;
    padding-right: 270px;
    font-size: 16px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    word-wrap: break-word;
`;

const InputField = styled.textarea`
    width: 328px;
    height: 7px;
    padding: 18px 8px;
    border-radius: 8px;
    border: 1px #CCCCCC solid;
    justify-content: flex-start;
    align-items: center;
    display: inline-flex;
    word-break: break-all
`;

const PlaceholderText = styled.div`
    color: #AAAAAA;
    font-size: 12px;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    word-wrap: break-word;
`;

const CheckBoxLabel = styled.div`
    color: #3A3A3A;
    font-size: 12px;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    word-wrap: break-word;
`;

const CheckBoxContainer = styled.div`
    justify-content: center;
    align-items: center;
    gap: 8px;
    display: flex;
`;

const SignUpLink = styled.div`
    color: #3A3A3A;
    font-size: 12px;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    word-wrap: break-word;
`;

const InnerButtonContainer = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    display: flex;
`;

const InnerButton = styled.div`
    padding-left: 100px;
    color: #3A3A3A;
    font-size: 12px;
    font-family: 'Noto Sans KR';
    font-weight: 500;
    word-wrap: break-word;
`;

const Button = styled.div`
    width: 328px;
    height: 45px;
    background: black;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
`;
const CheckBox = styled.div`
    border: 1px #CCCCCC solid;
    width: 12px;
    height: 12px;
    background: white;
    justify-content: center;
    align-items: center;
    display: inline-flex;
`;
const ButtonText = styled.div`
    text-align: center;
    color: white;
    font-size: 16px;
    font-family: 'Abyssinica SIL';
    font-weight: 400;
    word-wrap: break-word;
`;

const Margin = styled.div`
    word-break: break-all
`;

const Container = styled.div`
    width: 326px;
    height: 50px;
    padding-top: 19px;
    padding-bottom: 19px;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    justify-content: flex-start;
    align-items: center;
    gap: 17px;
    display: inline-flex;
`;

const Line = styled.div`
    width: 150px;
    height: 0px;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const Line2 = styled.div`
    width: 150px;
    height: 0;
    border: 1px rgba(0, 0, 0, 0.44) solid;
`;

const TextContainer = styled.div`
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    display: flex;
`;

const TextOr = styled.div`
    color: gray;
    font-size: 17px;
    font-family: 'Noto Sans KR';
    font-weight: 900;
    word-wrap: break-word;
    white-space: nowrap;
`;

const ContainerKakao = styled.div`
  width: 328px;
  height: 43.73px;
  padding-left: 14px;
  padding-right: 14px;
  background: #FEE500;
  border-radius: 6px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

const InnerContainerKakao = styled.div`
  padding-left: 62px;
  padding-right: 82px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
`;

const IconContainerKakao = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
`;

const IconKakao = styled.div`
  width: 18px;
  height: 16.80px;
  left: 0;
  top: 0.60px;
  position: absolute;
  background-image: url(${KakaoIconImg});
`;

const TextKakao = styled.div`
  color: rgba(0, 0, 0, 0.66);
  font-size: 15px;
  font-family: 'Joti One';
  font-weight: 400;
  line-height: 22.50px;
  word-wrap: break-word;
`;

const ContainerGoogle = styled.div`
  width: 328px;
  height: 43.73px;
  padding-left: 14px;
  padding-right: 14px;
  background: #fffff;
  border-radius: 6px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  
  border: 1px #000000 solid;
`;

const InnerContainerGoogle = styled.div`
  padding-left: 62px;
  padding-right: 82px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;  
`;

const IconContainerGoogle = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
`;

const IconGoogle = styled.div`
  width: 24px;
  height: 24px;
  left: 0;
  top: 0.60px;
  position: absolute;
  background-image: url(${GoogleIconImg});
`;

const TextGoogle = styled.div`
  color: rgba(0, 0, 0, 0.66);
  font-size: 15px;
  font-family: 'Joti One';
  font-weight: 400;
  line-height: 22.50px;
  word-wrap: break-word;
`;


export const S = {
    ContainerLogin,
    TextLogin,
    MainContainer,
    SubContainer,
    InnerButton,
    InnerButtonContainer,
    SignUpLink,
    CheckBoxContainer,
    CheckBoxLabel,
    CheckBox,
    PlaceholderText,
    InputField,
    InputLabel,
    InputContainer,
    Button,
    ButtonText,
    Margin,
    Container,
    Line,
    TextContainer,
    TextOr,
    Line2,
    ContainerKakao,
    InnerContainerKakao,
    IconContainerKakao,
    IconKakao,
    TextKakao,
    ContainerGoogle,
    InnerContainerGoogle,
    IconContainerGoogle,
    IconGoogle,
    TextGoogle,

  };