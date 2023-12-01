import React, { useState } from "react";
import { S } from "./style";

const ResvNotFound: React.FC = () => {
  return (
    <>
        <S.NotFoundContainer>
          <S.NotFoundText>아직 등록된 객실이 없습니다</S.NotFoundText>
        </S.NotFoundContainer>
    </>
  );
};

export default ResvNotFound;