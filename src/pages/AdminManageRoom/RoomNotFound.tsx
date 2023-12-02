import React, { useState } from "react";
import { S } from "./style";
import Add from "../../assets/buttons/AddRoomButton.png";

const ResvNotFound: React.FC = () => {
  return (
    <>
        <S.NotFoundContainer>
          <S.NotFoundText>아직 등록된 객실이 없습니다</S.NotFoundText>
          <S.DivForButton>
            <S.StyledLink to="/adminAddRoom"><button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={Add} /></button></S.StyledLink>
          </S.DivForButton>
        </S.NotFoundContainer>
    </>
  );
};

export default ResvNotFound;