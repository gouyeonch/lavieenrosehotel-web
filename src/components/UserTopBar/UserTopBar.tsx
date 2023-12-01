import React, { useState } from "react";
import { S } from "./style";

const UserTopBar: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.StyledLink to ="/resvRoom"><S.ResvRoomBtn>객실예약</S.ResvRoomBtn></S.StyledLink>
        <S.StyledLink to ="/resvAmen"><S.ResvAmenBtn>부대/복리시설예약</S.ResvAmenBtn></S.StyledLink>
        <S.StyledLink to ="/resvTraf"><S.ResvTrafBtn>교통편예약</S.ResvTrafBtn></S.StyledLink>
      </S.Container>
    </>
  );
};

export default UserTopBar;