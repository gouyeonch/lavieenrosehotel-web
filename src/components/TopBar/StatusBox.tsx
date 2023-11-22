import React, { useState } from "react";
import { S } from "./style";

const StatusBox: React.FC = () => {
  const [userName, setUserName] = useState("정구연");
  const [alermCnt, setalermCnt] = useState(2);

  return (
    <>
      <S.AlertBox>
        <S.Bell/>
        <S.BellRedDot>
          <S.AlertNum>{alermCnt}</S.AlertNum>
        </S.BellRedDot>
      </S.AlertBox>

      <S.Profile/>

      <S.UserName>{userName}</S.UserName>
    </>
  );
};

export default StatusBox;