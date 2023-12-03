import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/Axios";

type CatData = {
  id: number
  amenity_type: string;
};

interface CatProps {
    CatData: CatData;
  }

const CatBox: React.FC<CatProps> = ({ CatData }) => {
  const navigate = useNavigate();
  const deleteAdminAmenCat = async () => {
    if (window.confirm('부대시설 카테고리를 삭제하시겠습니까?')) {
        await apiClient.delete(`/admin/categories/${CatData.id}`).then((res) => {
            alert('삭제되었습니다.');
            navigate(`/adminCheckAmenCat`);
        })
    }
  };
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
              <S.CancelCatText onClick={deleteAdminAmenCat}>삭제</S.CancelCatText>
            </S.CancelCat>
          </S.ButtonBox>
          
          
        </S.CatContainer>
    </>
  );
};

export default CatBox;