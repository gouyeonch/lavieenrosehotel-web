import React, { useState } from "react";
import { useNavigate } from "react-router";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";

const SignUp: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwcheck] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [authNum, setAuthNum] = useState<string>("");
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <TopBar isAdmin={false} pageName="홈페이지" barStatus={2} />

        <S.Title>회원가입</S.Title>

        <S.FormContainer>
          <S.FormBox>
            <S.InputBox
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주세요"
            />
            <S.PwInputBox
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
            <S.PwInputBox
              type="password"
              value={pwCheck}
              onChange={(e) => setPwcheck(e.target.value)}
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </S.FormBox>

          <S.FormBox>
            <S.InputBox
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              placeholder="사용하실 사용자명을 입력해주세요"
            />
          </S.FormBox>

          <S.FormBox>
            

            <S.InputBox
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="휴대전화번호를 입력해주세요"
              />

            
          </S.FormBox>

          <S.PhoneCkBtn onClick={() => navigate("/login")}/>

        </S.FormContainer>
      </S.Container>
    </>
  );
};

export default SignUp;