import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";

type ResvData = {
    paymentDate : string;
    resvDate : string;
    room : string;
    payment : string;
};

const CheckResvRoom: React.FC = () => {
    const [resvData, setresvData] = useState<ResvData[]>([
        // dummy 데이터
        {
            paymentDate: "2023.09.05",
            resvDate: "2023.09.09 ~ 09.21",
            room: "패밀리 - 일반객실 - 정원전망 - 성인1 청소년2 아동1",
            payment: "250000원"
        },
        {
            paymentDate: "1999.09.05",
            resvDate: "1999.09.09 ~ 09.21",
            room: "패밀리 - 일반객실 - 정원전망 - 성인3 청소년2",
            payment: "100000원"
        },
    ]);
  
    return (
        <>
            <S.Container>
                <TopBar pageName="마이페이지"/>

                <S.MainBody>
                    <SidebarUser />

                    <S.RightBody>
                        <BodyTitle bodyName="객실예약 현황 확인"/>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default CheckResvRoom;