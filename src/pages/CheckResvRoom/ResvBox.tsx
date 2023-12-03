import React, { useState } from "react";
import { S } from "./style";

type ResvData = {
    id: number,
    status: string,
    startDate: string,
    endDate: string,
    categoryName: string,
    maxCapacity: number,
    paymentDate: string,
    totalPrice: number,
    adultCnt: number,
    teenagerCnt: number,
    childCnt: number,
    
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
  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>숙박기간 : {ResvData.start_date} ~ {ResvData.end_date}</S.ResvText>
            <S.ResvText>객실 : {ResvData.category_name}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.payment_date}</S.ResvText>
          </S.ResvLeft>
            
          <S.ButtonBox>
            <S.Detail>
              <S.DetailIcon />
              <S.DetailText>상세정보</S.DetailText>
            </S.Detail>
            
            <S.CancelResv>
              <S.CancelResvIcon />
              <S.CancelResvText>예약취소</S.CancelResvText>
            </S.CancelResv>
          </S.ButtonBox>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;