import React, { useState } from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";


const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <TopBar isAdmin={false} pageName="홈페이지" barStatus={2} />

        <S.Title>로그인</S.Title>

        <S.LoginBox>
            <InputBox label={"아이디"} value={id} onChange={setId} width={"310px"}/>
            <InputBox label={"비밀번호"} value={pw} onChange={setPw} width={"310px"}/>

            <S.GotoSignUp onClick={()=>navigate("/signup")}>회원가입하기</S.GotoSignUp>

            <S.LoginBtn onClick={()=>navigate("/homepage")}/>
            <S.Or/>
            <S.KakaoBtn/>
            <S.GoogleBtn/>
        </S.LoginBox>

        
      </S.Container>
    </>
  );
};

export default Login;