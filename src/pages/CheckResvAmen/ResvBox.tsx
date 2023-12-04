import React, { useState } from "react";
import { S } from "./style";

type ResvData = {
  payment_date : string;
  start_date : string;
  amenity_name : string;
  total_price : string;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
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
            <S.CancelResvText>예약취소</S.CancelResvText>
          </S.CancelResv>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;