import React, { useState } from "react";
import { S } from "./style";

type ResvData = {
    paymentDate : string;
    resvDate : string;
    room : string;
    payment : string;
    checkIn : boolean;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.paymentDate}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.resvDate}</S.ResvText>
            <S.ResvText>객실 : {ResvData.room}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.payment}</S.ResvText>
          </S.ResvLeft>

          <S.ButtonBox>
            {ResvData.checkIn === true ? (
              <S.CheckIn>
                <S.CheckInText>체크인</S.CheckInText>
              </S.CheckIn>
            ) : null}
            
              
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