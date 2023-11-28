import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ResvBox from "./ResvBox";
import ResvNotFound from "./ResvNotFound";

type ResvData = {
    paymentDate : string;
    resvDate : string;
    room : string;
    payment : string;
    checkIn : boolean;
};

const AdminCheckResvRoom: React.FC = () => {
    const [resvData, setresvData] = useState<ResvData[]>([
        //dummy 데이터
        {
            paymentDate: "2023.09.05",
            resvDate: "2023.09.09 ~ 09.21",
            room: "패밀리 - 일반객실 - 정원전망 - 성인1 청소년2 아동1",
            payment: "250000원",
            checkIn : true
        },
        {
            paymentDate: "1999.09.05",
            resvDate: "1999.09.09 ~ 09.21",
            room: "패밀리 - 일반객실 - 정원전망 - 성인3 청소년2",
            payment: "100000원",
            checkIn: false
        },
    ]);
    
  
    return (
        <>
            <S.Container>
                <TopBar pageName="객실 관리"/>

                <S.MainBody>
                    <SidebarAdmin />

                    <S.RightBody>
                        <BodyTitle bodyName="객실예약 현황 확인"/>
                        
                        {resvData.length === 0 ? (
                                <ResvNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.ResvList> 
                                    {resvData.map((resv, index) => (
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