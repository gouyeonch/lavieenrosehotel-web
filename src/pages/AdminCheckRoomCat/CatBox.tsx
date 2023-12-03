import React from "react";
import { useNavigate } from "react-router-dom";
import { S } from "./style";

type CatData = {
  id: number;
  name: string;
};

interface CatProps {
    CatData: CatData;
  }

const CatBox: React.FC<CatProps> = ({ CatData }) => {
  const navigate = useNavigate();
  return (
    <>
        <S.CatContainer>
          <S.CatLeft>
            <S.CatText>객실 카테고리 : {CatData.name}</S.CatText>
          </S.CatLeft>
            
          <S.ButtonBox>
            <S.Detail>
              <S.DetailIcon />
              <S.DetailText onClick={()=>navigate(`/adminRoomCatUpdate/${CatData.id}`)}>상세정보 확인/수정</S.DetailText>
            </S.Detail>
            <S.CancelCat>
              <S.CancelCatIcon />
              <S.CancelCatText>삭제</S.CancelCatText>
            </S.CancelCat>
          </S.ButtonBox>
          
        </S.CatContainer>
    </>
  );
};

export default CatBox;