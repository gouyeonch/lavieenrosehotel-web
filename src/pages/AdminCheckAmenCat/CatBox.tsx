import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";

type CatData = {
  id: number
  amenity_type: string;
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
            <S.CatText>부대/복리 시설명 : {CatData.amenity_type}</S.CatText>
          </S.CatLeft>
            
          <S.ButtonBox>
            <S.Detail>
              <S.DetailIcon />
              <S.DetailText onClick={()=>navigate(`/adminAmenCatUpdate/${CatData.id}`)}>상세정보 확인/수정</S.DetailText>
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