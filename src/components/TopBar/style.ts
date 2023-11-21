import styled from "styled-components";
import LoginBtnImg from "../../assets/buttons/LoginBtn.svg"


const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 1900px;
    height: 50px;
    align-items: center;
    background-color: #FFFFFF;
`;

const TopBarNameBox = styled.div`
    position: relative;
    left: 17px;
`;

const TopBarName = styled.div`
    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word;
`;

const StatusBox = styled.div`
    margin: 0 auto;
    width: 1900px;
    height: 50px;
    background-color: #FFFFFF;
`;

const LoginBtn = styled.div`
    margin-left: auto;
    margin-right: 29px;
    width: 127px;
    height: 36px;
    background-image: url(${LoginBtnImg});
`;

export const S = {
    Container,
    TopBarNameBox,
    TopBarName,
    StatusBox,
    LoginBtn
  };