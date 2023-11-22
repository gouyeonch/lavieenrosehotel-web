import React, { useState } from "react";
import { S } from "./style";

const StatusBox: React.FC = () => {
  const [userName, setUserName] = useState("정구연");
  return (
    <>
      <S.Bell/>
      <S.Profile/>
      <S.UserName>{userName}</S.UserName>
    </>
  );
};

export default StatusBox;