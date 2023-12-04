import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";

type ResvData = {
  id: number,
  start_date: string,
  end_date: string,
  category_name: string,
  payment_date: string,
  total_price: number,
  status: string;
};


interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  return (
    <>
        <S.ResvContainer onClick={()=>navigate(`/adminCheckResvRoomDetail/${ResvData.id}`)}>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>예약일 : {ResvData.start_date}</S.ResvText>
            <S.ResvText>객실 : {ResvData.category_name}</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>

          <S.ButtonBox>
            {ResvData.status === "DEPOSIT_CONFIRMATION" ? (
              <S.CheckIn>
                <S.CheckInIcon />
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