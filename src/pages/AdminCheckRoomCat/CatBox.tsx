import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { S } from "./style";
import apiClient from "../../api/Axios";

type CatData = {
  id: number;
  name: string;
};

interface CatProps {
    CatData: CatData;
  }

const CatBox: React.FC<CatProps> = ({ CatData }) => {
  const navigate = useNavigate();
  const deleteAdminRoomCat = async () => {
    if (window.confirm('객실 카테고리를 삭제하시겠습니까?')) {
        await apiClient.delete(`/admin/categories/${CatData.id}`).then((res) => {
            alert('삭제되었습니다.');
            navigate(`/adminCheckRoomCat`);
        })
    }
  };
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
              <S.CancelCatText onClick={deleteAdminRoomCat}>삭제</S.CancelCatText>
            </S.CancelCat>
          </S.ButtonBox>
          
        </S.CatContainer>
    </>
  );
};

export default CatBox;