import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";


const SignupNormal: React.FC = () => {
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [pwCheck, setPwCheck] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [authNum, setAuthNum] = useState<string>("");
    
  return (
    <>
    <TopBar isAdmin={false} pageName="회원가입"/>
    <S.MainContainer>
        <S.ContainerSignup>
            <S.TextSignUp>회원가입</S.TextSignUp>
        </S.ContainerSignup>
        <S.SubContainer>
            <S.InputBox style={{top:6}}>
                <S.InputText>아이디를 입력해주세요</S.InputText>
            </S.InputBox>
            <S.InputBox style={{top:56}}>
                <S.InputText>비밀번호를 입력해주세요<S.lockIcon style={{left:390}}></S.lockIcon></S.InputText>
            </S.InputBox>
            <S.InputBox style={{top:106}}>
                <S.InputText>비밀번호를 다시 입력해주세요<S.unlockIcon style={{left:390}}></S.unlockIcon></S.InputText>                
            </S.InputBox>
        </S.SubContainer>

        <S.nameContainer>
            <S.nameInputBox>
                <S.nameInputText>사용하실 사용자명을 입력해주세요</S.nameInputText>
            </S.nameInputBox>
        </S.nameContainer>

        <S.ContainerPhone>
            <S.Container82>
                <S.TextContainer82>
                    <S.Text82>+82</S.Text82>
                </S.TextContainer82>
            </S.Container82>

            <S.ContainerPhoneInput>
                <S.TextContainerPhoneInput>
                    <S.TextPhoneInput>휴대전화번호를 입력하세요</S.TextPhoneInput>
                </S.TextContainerPhoneInput>
            </S.ContainerPhoneInput>

            <S.AuthContainer>
                <S.AuthTextContainer>
                    <S.AuthText>인증</S.AuthText>
                </S.AuthTextContainer>
            </S.AuthContainer>
            
            <S.InputContainer>
                <S.InputTextContainer>
                    <S.InputText2>인증번호를 입력하세요</S.InputText2>
                </S.InputTextContainer>
            </S.InputContainer>

            <S.CompleteContainer>
                <S.CompleteText>입력완료</S.CompleteText>
            </S.CompleteContainer>

        </S.ContainerPhone>
    </S.MainContainer>
    </>
  );
};

export default SignupNormal;