import React, { useState, useEffect } from "react";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ResvBox from "./ResvBox";
import ResvNotFound from "./ResvNotFound";

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

const AdminCheckResvRoom: React.FC = () => {
    const [resvData, setResvData] = useState<ResvData[]>();
    
    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/reservation-rooms?page=1&size=10`);

              setResvData(response.data.data.reservations);
              console.log(response.data.data.reservations);
            } catch (error) {
            }
          };

        fetchData();
      }, []);
  
    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="객실 관리"/>

                <S.MainBody>
                    <SidebarAdmin />

                    <S.RightBody>
                        <BodyTitle bodyName="객실예약 현황 확인"/>
                        
                        {resvData?.length === 0 ? (
                                <ResvNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.ResvList> 
                                    {resvData?.map((resv, index) => (
                                        <ResvBox key={index} ResvData={resv} />
                                    ))}
                                </S.ResvList>
                            )}
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckResvRoom;