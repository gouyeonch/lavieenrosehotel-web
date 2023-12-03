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
    amenity_type: string;
};

const AdminCheckAmenCat: React.FC = () => {
    const [CatData, setCatData] = useState<CatData[]>();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/amenities?page=1&size=10`);

              setCatData(response.data.data.amenities);
              console.log(CatData);
            } catch (error) {
            }
          };

        fetchData();
      }, []);
  
    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="부대/복리 시설 관리"/>

                <S.MainBody>
                    <SidebarAdmin />

                    <S.RightBody>
                        <BodyTitle bodyName="부대/복리 시설 카테고리 확인"/>
                        
                        {CatData === undefined ? (
                                <CatNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.CatList> 
                                    {CatData.map((Cat, index) => (
                                        <CatBox key={index} CatData={Cat} />
                                    ))}
                                </S.CatList>
                            )}
                            <S.AddButtonBox>
                                <S.StyledLink to="/adminAmenCatAdd">
                                    <Button buttonName="부대/복리 시설 카테고리 추가"/>
                                </S.StyledLink>
                            </S.AddButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckAmenCat;