import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import CatBox from "./CatBox";
import CatNotFound from "./CatNotFound";
import Button from "../../components/Button/Button";

type CatData = {
    name: string;
};

const AdminCheckRoomCat: React.FC = () => {
    const [CatData, setCatData] = useState<CatData[]>([
        // dummy 데이터
        {
            name: "스위트 - 스파객실 - 바다전망"
        },
        {
            name: "스위트 킹 - 일반객실 - 정원전망"
        },
    ]);
  
    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="객실 관리"/>

                <S.MainBody>
                    <SidebarAdmin />

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
                        <S.ButtonBox>
                            <S.StyledLink to="/adminRoomCatAdd"><Button buttonName="객실 카테고리 추가"/></S.StyledLink>
                        </S.ButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckRoomCat;