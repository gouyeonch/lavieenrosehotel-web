import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";

const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  return (
    <>
    <TopBar pageName="로그인"/>

      <S.MainContainer>
        
        <S.ContainerLogin>
          <S.TextLogin>로그인</S.TextLogin>
        </S.ContainerLogin>

        <S.SubContainer>
        <S.InputContainer>
           <S.InputLabel>아이디</S.InputLabel>
           <S.InputField 
              value={id}
              onChange={(e) => setId(e.target.value)}
              >
            <S.PlaceholderText>ID</S.PlaceholderText>
           </S.InputField>
          </S.InputContainer>
          
          <S.InputContainer>
            <S.InputLabel>비밀번호</S.InputLabel>
            <S.InputField 
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              >
              <S.PlaceholderText>****</S.PlaceholderText>
            </S.InputField>
          </S.InputContainer>

          <S.CheckBoxContainer>
           <S.CheckBoxLabel><S.CheckBox/>로그인 상태 유지</S.CheckBoxLabel>
          <S.InnerButton>회원가입하기</S.InnerButton>
          </S.CheckBoxContainer>

          <S.Button>
            <S.ButtonText>로그인</S.ButtonText>
          </S.Button>
         
        </S.SubContainer> 

        <S.Container>
            <S.Line/>
            <S.TextContainer>
              <S.TextOr>또는</S.TextOr>
            </S.TextContainer>
            <S.Line2/>
          </S.Container>

        <S.ContainerKakao>
          <S.InnerContainerKakao>
            <S.IconContainerKakao>
              <S.IconKakao/>
            </S.IconContainerKakao>
            <S.TextKakao>카카오계정으로 로그인</S.TextKakao>
          </S.InnerContainerKakao>
        </S.ContainerKakao>

        <S.ContainerGoogle>
          <S.InnerContainerGoogle>
            <S.IconContainerGoogle>
              <S.IconGoogle/>
            </S.IconContainerGoogle>
            <S.TextGoogle>구글계정으로 로그인</S.TextGoogle>
          </S.InnerContainerGoogle>
        </S.ContainerGoogle>
       </S.MainContainer>

    </>
  );
};

export default Login;