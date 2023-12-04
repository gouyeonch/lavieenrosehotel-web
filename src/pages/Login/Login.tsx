import React, { useState } from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxPw from "../../components/InputBox/InputBoxPw";
import apiClient from "../../api/AxiosBlank";
import Button from "../../components/Button/Button";


const Login: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
        
    const formData = new FormData()
    formData.append("serial_id", id);
    formData.append("password", pw);


    console.log(formData)
    console.log(id)
    console.log(pw)

    await apiClient
      .post(`/auth/sign-in`, formData, {
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("에러가 발생했습니다: ", error);
      });
  };

  return (
    <>
      <S.Container>
        <TopBar isAdmin={false} pageName="홈페이지" barStatus={2} />

        <S.Title>로그인</S.Title>

        <S.LoginBox>
            <InputBox label={"아이디"} value={id} onChange={setId} width={"310px"}/>
            <InputBoxPw label={"비밀번호"} value={pw} onChange={setPw} width={"310px"}/>

            <S.GotoSignUp onClick={()=>navigate("/signup")}>회원가입하기</S.GotoSignUp>

            <S.LoginBtn onClick={handleSubmit}/>
            <S.Or/>
            <S.KakaoBtn/>
            <S.GoogleBtn/>
        </S.LoginBox>
        
      </S.Container>
    </>
  );
};

export default Login;