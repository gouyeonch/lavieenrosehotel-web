import React, { useState } from "react";
import { S } from "./style";
import apiClient from "../../api/Axios";
import { useNavigate } from "react-router-dom";

type ResvData = {
  payment_date : string;
  start_date : string;
  amenity_name : string;
  total_price : string;
  id: number;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  const deleteUserAmen = async () => {
    if (window.confirm('예약을 취소 하시겠습니까?')) {
        await apiClient.delete(`/reservation-amenities/${ResvData.id}`).then((res) => {
            alert('예약 취소되었습니다.');
            navigate(`/checkResvAmen`);
        })
    } else {
      alert('예약 취소를 철회했습니다.');
      navigate(`/checkResvAmen`);
    }
  };

  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.start_date}</S.ResvText>
            <S.ResvText>부대/복리시설 : {ResvData.amenity_name}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>
            
          <S.CancelResv>
            <S.CancelResvIcon />
            <S.CancelResvText onClick={deleteUserAmen}>예약취소</S.CancelResvText>
          </S.CancelResv>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;