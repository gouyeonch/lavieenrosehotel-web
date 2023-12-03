import React, { useState, useEffect } from "react";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarAdmin from "../../components/Sidebar/SidebarAdmin";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import CatBox from "./CatBox";
import CatNotFound from "./CatNotFound";
import Button from "../../components/Button/Button";

type CatData = {
    id: number
    name: string;
};

const AdminCheckRoomCat: React.FC = () => {
    const [CatData, setCatData] = useState<CatData[]>();
    

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/categories?page=1&size=20`);

              console.log(response.data.data.categories);

              setCatData(response.data.data.categories);
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
                        <BodyTitle bodyName="객실 카테고리 확인"/>
                        
                        {CatData?.length === 0 ? (
                                <CatNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.CatList> 
                                    {CatData?.map((Cat, index) => (
                                        <CatBox key={index} CatData={Cat} />
                                    ))}
                                </S.CatList>
                            )}
                        <S.AddButtonBox>
                            <S.StyledLink to="/adminRoomCatAdd"><Button buttonName="객실 카테고리 추가"/></S.StyledLink>
                        </S.AddButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckRoomCat;