import React, { useState } from "react";
import { S } from "./style";
import Button from "../../components/Button/Button";

const ResvNotFound: React.FC = () => {
  return (
    <>
        <S.NotFoundContainer>
          <S.NotFoundText>현재 부대/복리시설 예약이 없습니다.</S.NotFoundText>
          <S.StyledLink to="/homepage"><Button buttonName="예약하러 홈페이지로 이동"/></S.StyledLink>
        </S.NotFoundContainer>
    </>
  );
};

export default ResvNotFound;