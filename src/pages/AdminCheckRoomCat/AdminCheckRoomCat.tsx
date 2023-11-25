import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import CatBox from "./CatBox";
import CatNotFound from "./CatNotFound";

type CatData = {
    name: string;
};

const AdminCheckRoomCat: React.FC = () => {
    const [CatData, setCatData] = useState<CatData[]>([
        // dummy 데이터
        // {
        //     paymentDate: "2023.09.05",
        //     CatDate: "2023.09.09 ~ 09.21",
        //     amen: "워터파크 - 종일권 -  대인2",
        //     payment: "250000원"
        // },
        // {
        //     paymentDate: "1999.09.05",
        //     CatDate: "1999.09.09 ~ 09.21",
        //     amen: "리프트패키지2 - 종일권 -  대인2",
        //     payment: "100000원"
        // },
    ]);
  
    return (
        <>
            <S.Container>
                <TopBar pageName="객실 관리"/>

                <S.MainBody>
                    <SidebarUser />

                    <S.RightBody>
                        <BodyTitle bodyName="객실 카테고리 확인"/>
                        
                        {CatData.length === 0 ? (
                                <CatNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.CatList> 
                                    {CatData.map((Cat, index) => (
                                        <CatBox key={index} CatData={Cat} />
                                    ))}
                                </S.CatList>
                            )}
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckRoomCat;