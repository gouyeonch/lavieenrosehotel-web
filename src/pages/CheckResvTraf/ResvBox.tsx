import React, { useState } from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api/Axios";

type ResvData = {
  payment_date : string;
  start_date : string;
  end_date : string;
  start_end_location : string;
  total_price : string;
  id: number;
};

interface ResvProps {
    ResvData: ResvData;
}

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  const deleteUserTrafResv = async () => {
    if (window.confirm('교통편 예약을 취소 하시겠습니까?')) {
        await apiClient.delete(`/reservation-rooms/${ResvData.id}`).then((res) => {
            alert('예약 취소 되었되었습니다.');
            navigate(`/checkResvTraf`);
        })
    } else {
      alert('예약 취소를 철회했습니다.');
      navigate(`/checkResvTraf`);
    }
  };

  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.start_date} ~ {ResvData.end_date}</S.ResvText>
            <S.ResvText>교통편 : {ResvData.start_end_location}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>
            
          <S.CancelResv>
            <S.CancelResvIcon />
            <S.CancelResvText onClick={deleteUserTrafResv}>예약취소</S.CancelResvText>
          </S.CancelResv>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;