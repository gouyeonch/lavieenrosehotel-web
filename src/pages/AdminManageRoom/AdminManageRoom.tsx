import React, { useState, useEffect } from "react";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import RoomNotFound from "./RoomNotFound";
import RoomBox from "./RoomBox";
import Add from "../../assets/buttons/AddRoomButton.png";

type RoomData = {
    id : number;
    floor_number : string;
};

const AdminManageRoom: React.FC = () => {
    const [resvData, setResvData] = useState<RoomData[]>();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/rooms?page=1&size=100`);

              setResvData(response.data.data.rooms);
              console.log(resvData);
            } catch (error) {
            }
          };

        fetchData();
      }, []);
  
    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="관리자"/>
                <S.MainBody>
                    <SidebarAdmin />

                    <S.RightBody>
                        <BodyTitle bodyName="개별 객실 관리"/>
                        {resvData?.length === 0 ? (
                                <RoomNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <>
                                <S.RoomList> 
                                    {resvData?.map((resv, index) => (
                                        <RoomBox key={index} ResvData={resv} />
                                    ))}
                                </S.RoomList>
                                <S.DivForButton>
                                    <S.StyledLink to="/adminAddRoom"><button style={{ border: 'none', outline: 'none', background: 'none', cursor: 'pointer' }}><img src={Add} /></button></S.StyledLink>
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