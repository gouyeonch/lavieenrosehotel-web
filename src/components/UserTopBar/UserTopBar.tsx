import React, { useState } from "react";
import { S } from "./style";


const UserTopBar: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.ResvRoomBtn>객실예약</S.ResvRoomBtn>
        <S.ResvAmenBtn>부대/복리시설예약</S.ResvAmenBtn>
        <S.ResvTrafBtn>교통편예약</S.ResvTrafBtn>
      </S.Container>
    </>
  );
};

export default UserTopBar;