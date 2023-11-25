import React, { useState } from "react";
import { S } from "./style";

type CatData = {
    name: string;
};

interface CatProps {
    CatData: CatData;
  }

const CatBox: React.FC<CatProps> = ({ CatData }) => {
  return (
    <>
        <S.CatContainer>
          <S.CatLeft>
            <S.CatText>객실 카테고리 : {CatData.name}</S.CatText>
          </S.CatLeft>
            
          <S.CancelCat>
            <S.CancelCatIcon />
            <S.CancelCatText>삭제</S.CancelCatText>
          </S.CancelCat>
          
        </S.CatContainer>
    </>
  );
};

export default CatBox;