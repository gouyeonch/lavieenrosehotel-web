import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { S } from "./style";
import apiClient from "../../api/Axios";

type ResvData = {
  id: number,
  start_date: string,
  end_date: string,
  category_name: string,
  payment_date: string,
  total_price: number,
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  const deleteUserRoom = async () => {
    if (window.confirm('예약을 취소 하시겠습니까?')) {
        await apiClient.delete(`/reservation-rooms/${ResvData.id}`).then((res) => {
            alert('예약 취소 되었되었습니다.');
            navigate(`/checkResvRoom`);
        })
    } else {
      alert('예약 취소를 철회했습니다.');
      navigate(`/checkResvRoom`);
    }
  };

  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>숙박기간 : {ResvData.start_date} ~ {ResvData.end_date}</S.ResvText>
            <S.ResvText>객실 : {ResvData.category_name}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>
            
          <S.ButtonBox>
            <S.Detail>
              <S.DetailIcon />
              <S.DetailText onClick={()=>navigate(``)}>상세정보</S.DetailText>
            </S.Detail>
            
            <S.CancelResv>
              <S.CancelResvIcon />
              <S.CancelResvText onClick={deleteUserRoom}>예약취소</S.CancelResvText>
            </S.CancelResv>
          </S.ButtonBox>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;