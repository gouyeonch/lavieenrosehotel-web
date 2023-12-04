import React, { useState, useEffect } from "react";
import { S } from "./style";
import apiClient from "../../api/Axios";
import { useNavigate } from "react-router-dom";

type ResvData = {
    id: number;
    start_date: string,
    end_date: string,
    category_name: string,
    payment_date: string,
    total_price: number,
    adult_cnt : number;
    teenager_cnt : number;
    child_cnt : number;
    checkIn : boolean;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  const deleteAdminRoomResv = async () => {
    if (window.confirm('예약을 취소 하시겠습니까?')) {
        await apiClient.delete(`/admin/reservation-rooms/${ResvData.id}`).then((res) => {
            alert('예약 취소되었습니다.');
            navigate(`/adminCheckResvRoom`);
        })
    } else {
      alert('예약 취소를 철회했습니다.');
      navigate(`/adminCheckResvRoom`);
    }
  };

  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.start_date} ~ {ResvData.end_date}</S.ResvText>
            <S.ResvText>객실 : {ResvData.category_name} - 성인: {ResvData.adult_cnt}, 아동: {ResvData.teenager_cnt}, 유아: {ResvData.child_cnt}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>

          <S.ButtonBox>
            {ResvData.checkIn === true ? (
              <S.CheckIn>
                <S.CheckInIcon />
                <S.CheckInText>체크인</S.CheckInText>
              </S.CheckIn>
            ) : null}
            
              
            <S.CancelResv>
              <S.CancelResvIcon />
              <S.CancelResvText onClick={deleteAdminRoomResv}>예약취소</S.CancelResvText>
            </S.CancelResv>
          </S.ButtonBox>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;