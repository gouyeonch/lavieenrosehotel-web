import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/icons/delete.png";
import Modify from "../../assets/icons/modify.png"

type RoomData = {
  id : number;
  floor_number : string;
};
interface ResvProps {
  ResvData: RoomData;
}

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();
  return (
    <>
      <S.RoomContainer>
        <S.RoomLeft>
          <S.RoomText> 객실 호수 {ResvData.floor_number} 호 </S.RoomText>
        </S.RoomLeft>
        <a style={{ width: '80px', margin: '0 40% 0 0' }}/>
        <button style={{ border: 'none', outline: 'none', background: 'none' }} onClick={() => navigate(`/adminModifyRoom/${ResvData.id}`)}><img src={Modify} /></button>
        <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={Delete} /></button>
      </S.RoomContainer>

    </>
    
  );
};

export default ResvBox;