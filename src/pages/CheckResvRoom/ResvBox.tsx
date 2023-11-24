import React, { useState } from "react";
import { S } from "./style";

type ResvData = {
    paymentDate : string;
    resvDate : string;
    room : string;
    payment : string;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  return (
    <>
        <S.ResvContainer>
            <S.ResvText>{ResvData.paymentDate}</S.ResvText>
            <S.ResvText>{ResvData.resvDate}</S.ResvText>
            <S.ResvText>{ResvData.room}</S.ResvText>
            <S.ResvText>{ResvData.payment}</S.ResvText>
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;