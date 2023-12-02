import React from "react";
import { S } from "./style";
import Delete from "../../assets/icons/delete.png";
import Modify from "../../assets/icons/modify.png"

type ResvData = {
  roomNumber: string;
};

interface ResvProps {
  ResvData: ResvData;
}

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  return (
    <>
      <S.RoomContainer>
        <S.RoomLeft>
          <S.RoomText> 객실 호수 {ResvData.roomNumber} 호 </S.RoomText>
        </S.RoomLeft>
        <a style={{ width: '80px', margin: '0 40% 0 0' }}/>
        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={Modify} /></button>
        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={Delete} /></button>
      </S.RoomContainer>

    </>
    
  );
};

export default ResvBox;