import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";

const SignUpSocial: React.FC = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwcheck] = useState<string>("");
  const [nickName, setNickName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [authNum, setAuthNum] = useState<string>("");

  return (
    <>
      <S.Container>
        <TopBar isAdmin={false} pageName="홈페이지" barStatus={2} />

        <S.Title>회원가입</S.Title>

        <S.FormContainer>

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

          <S.PhoneCkBtn/>

        </S.FormContainer>
      </S.Container>
    </>
  );
};

export default SignUpSocial;