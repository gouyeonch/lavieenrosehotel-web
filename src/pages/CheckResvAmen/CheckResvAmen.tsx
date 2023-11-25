import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import ResvBox from "./ResvBox";

type ResvData = {
    paymentDate : string;
    resvDate : string;
    amen : string;
    payment : string;
};

const CheckResvRoom: React.FC = () => {
    const [resvData, setresvData] = useState<ResvData[]>([
        // dummy 데이터
        {
            paymentDate: "2023.09.05",
            resvDate: "2023.09.09 ~ 09.21",
            amen: "워터파크 - 종일권 -  대인2",
            payment: "250000원"
        },
        {
            paymentDate: "1999.09.05",
            resvDate: "1999.09.09 ~ 09.21",
            amen: "리프트패키지2 - 종일권 -  대인2",
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
                        <BodyTitle bodyName="부대/복리 시설예약 현황확인"/>
                        
                        <S.ResvList>
                            {resvData.map((resv, index) => (
                                <ResvBox key={index} ResvData={resv} />
                            ))}
                        </S.ResvList>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default CheckResvRoom;