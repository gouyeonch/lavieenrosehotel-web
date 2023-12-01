import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import RoomNotFound from "./RoomNotFound";
import RoomBox from "./RoomBox";
import Add from "../../assets/buttons/AddRoomButton.png";

type RoomData = {
    roomNumber : string;
};

const AdminManageRoom: React.FC = () => {
    const [resvData, setresvData] = useState<RoomData[]>([
        
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"},
        {roomNumber:"103"}

    ]);
  
    return (
        <>
            <S.Container>
                <TopBar pageName="관리자"/>
                <S.MainBody>
                    <SidebarAdmin />

                    <S.RightBody>
                        <BodyTitle bodyName="개별 객실 관리"/>
                        <hr color="#C6BCBC"/>
                        {resvData.length === 0 ? (
                                <RoomNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <>
                                <S.RoomList> 
                                    {resvData.map((resv, index) => (
                                        <RoomBox key={index} ResvData={resv} />
                                    ))}
                                </S.RoomList>
                                <S.DivForButton>
                                    <button style={{ border: 'none', outline: 'none', background: 'none' }}><img src={Add} /></button>
                                </S.DivForButton>
                              </>
                            )}
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminManageRoom;