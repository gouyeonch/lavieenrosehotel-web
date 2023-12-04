import React from "react";
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import Delete from "../../assets/icons/delete.png";
import Modify from "../../assets/icons/modify.png"
import apiClient from "../../api/Axios";

type RoomData = {
  id : number;
  floor_number : string;
};
interface ResvProps {
  ResvData: RoomData;
}

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  const navigate = useNavigate();

  const deleteAdminRoom = async () => {
    if (window.confirm('객실을 삭제하시겠습니까?')) {
      try {
        await apiClient.delete(`/admin/rooms/${ResvData.id}`);
        alert('삭제되었습니다.');
      } catch (error) {
        console.error('삭제 중 오류 발생:', error);
      }
      navigate(`/adminManageRoom`);
    } else {
      alert('객실 삭제를 철회했습니다.');
      navigate(`/adminManageRoom`);
    }
  };

  return (
    <>
      <S.RoomContainer>
        <S.RoomLeft>
          <S.RoomText> 객실 호수 {ResvData.floor_number} 호 </S.RoomText>
        </S.RoomLeft>
        <a style={{ width: '80px', margin: '0 40% 0 0' }}/>
        <button style={{ border: 'none', outline: 'none', background: 'none' }} onClick={() => navigate(`/adminModifyRoom/${ResvData.id}`)}><img src={Modify} /></button>
        <button style={{ border: 'none', outline: 'none', background: 'none' }} onClick={deleteAdminRoom}><img src={Delete} /></button>
      </S.RoomContainer>

    </>
    
  );
};

export default ResvBox;