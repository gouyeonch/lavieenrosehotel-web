import React, { useState } from "react";
import { S } from "./style";
import Button from "../../components/Button/Button";

const ResvNotFound: React.FC = () => {
  return (
    <>
        <S.NotFoundContainer>
          <S.NotFoundText>현재 객실 예약이 없습니다.</S.NotFoundText>
          <Button buttonName="예약하러 홈페이지로 이동"/>
        </S.NotFoundContainer>
    </>
  );
};

export default ResvNotFound;