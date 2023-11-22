import styled from "styled-components";
import LoginBtnImg from "../../assets/buttons/LoginBtn.svg"
import BellImg from "../../assets/icons/Bell.svg"
import BellRedDotImg from "../../assets/icons/BellRedDot.svg"
import ProfileImg from "../../assets/icons/Profile.svg"

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
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: 29px;
    background-color: #FFFFFF;
`;

const LoginBtn = styled.div`
    margin-left: auto;
    margin-right: 29px;
    width: 127px;
    height: 36px;
    background-image: url(${LoginBtnImg});
`;

const Bell = styled.div`
    width: 23.5px;
    height: 25.48px;
    margin-top: 3.25px;
    margin-bottom: 3.27px;
    margin-left: 4.25px;
    margin-right: 4.25px;
    background-image: url(${BellImg});
`;

const BellRedDot = styled.div`
    margin-left: auto;
    margin-right: 29px;
    width: 127px;
    height: 36px;
    background-image: url(${BellRedDotImg});
`;

const Profile = styled.div`
    margin-left: 8px;

    width: 32px;
    height: 32px;
    background-image: url(${ProfileImg});
`;

const UserName = styled.div`
    margin-left: 8px;

    color: black;
    font-size: 16px;
    font-family: Noto Sans KR;
    font-weight: 500;
    word-wrap: break-word
`

export const S = {
    Container,
    TopBarNameBox,
    TopBarName,
    StatusBox,
    LoginBtn,
    Bell,
    BellRedDot,
    Profile,
    UserName
  };