import React, { useState, useEffect } from "react";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ResvBox from "./ResvBox";
import ResvNotFound from "./ResvNotFound";

type ResvData = {
    payment_date : string;
    start_date : string;
    end_date : string;
    start_end_location : string;
    total_price : string;
    id : number;
};

const CheckResvRoom: React.FC = () => {
    const [resvData, setResvData] = useState<ResvData[]>();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/reservation-transportations?page=1&size=10`);

              setResvData(response.data.data.reservations);
              console.log(resvData);
            } catch (error) {
            }
          };

        fetchData();
      }, []);
  
    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="마이페이지"/>

                <S.MainBody>
                    <SidebarUser />

                    <S.RightBody>
                        <BodyTitle bodyName="교통편 예약확인"/>
                        
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

export default CheckResvRoom;