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
    status : string;

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
            window.location.reload();
        })
    } else {
      alert('예약 취소를 철회했습니다.');
      navigate(`/adminCheckResvRoom`);
    }
  };

  const handleCheckIn = async () => {
    const resvInfo = {
      status: "CHECK_IN"
    };

    if (
        true
    ) {
      await apiClient
        .patch(`/admin/reservation-rooms/${ResvData.id}`, resvInfo, {
        })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.error("객실 수정 에러가 발생했습니다: ", error);
        });
    } else {
    }
  };

  const handleCheckOut = async () => {
    const resvInfo = {
      status: "CHECK_OUT"
    };

    if (
        true
    ) {
      await apiClient
        .patch(`/admin/reservation-rooms/${ResvData.id}`, resvInfo, {
        })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.error("객실 수정 에러가 발생했습니다: ", error);
        });
    } else {
    }
  };

  return (
    <>
        <S.ResvContainer >
          <S.ResvLeft onClick={()=>navigate(`/adminCheckResvRoomDetail/${ResvData.id}`)}>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.start_date} ~ {ResvData.end_date}</S.ResvText>
            <S.ResvText>객실 : {ResvData.category_name} - 성인: {ResvData.adult_cnt}, 아동: {ResvData.teenager_cnt}, 유아: {ResvData.child_cnt}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>

          <S.ButtonBox>
            {ResvData.status === "DEPOSIT_CONFIRMATION" ? (
              <S.CheckIn onClick={handleCheckIn}>
                <S.CheckInIcon />
                <S.CheckInText>체크인</S.CheckInText>
              </S.CheckIn>
            ) : (
                ResvData.status !== "CHECK_OUT" &&
                (<S.CheckIn onClick={handleCheckOut}>
                  <S.CheckInIcon />
                  <S.CheckInText>체크아웃</S.CheckInText>
                </S.CheckIn>)
            )}
            
              
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