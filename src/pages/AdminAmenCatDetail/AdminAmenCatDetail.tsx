import React, { useState, useEffect } from "react";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import InputBox4Info from "../../components/InputBox/InputBox4Info";
import ViewBox from "../../components/ViewBox/ViewBox";
import Button from "../../components/Button/Button";

type CatData = {
    name: string;
    discShort: string;
    discLarg: string;
    cost: string;
};

const AdminAmenCatDetail: React.FC = () => {
    const [catData, setCatData] = useState<CatData>();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/amenities?page=1&size=10`);
              console.log(response.data);
              setCatData(response.data);
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
                    <AdminSidebarDetail adminSidebarName="액티비티 정보"/>
                    <S.RightBody>

                        <S.SubTitle>액티비티 상세정보</S.SubTitle>
                        <S.SubTitleDisc>액티비티 정보를 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>
                            <S.RowBox>
                                <ViewBox label={"액티비티 카테고리명"} value={""} width={"300px"}/>
                                <ViewBox label={"액티비티 요약설명"} value={""} width={"700px"}/>    
                            </S.RowBox>
                            
                            <S.RowBox>
                                <ViewBox label={"액티비티 추가 정보"} value={""} width={"1050px"}/>
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.SubTitle>액티비티 이미지 업로드</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.SubTitle>서비스 요금 설정</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                                <ViewBox label={"가격"} value={""} width={"250px"}/>
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.ButtonBox>
                            <Button buttonName="완료 및 저장하기" buttonColor="#BFDEFA"/>
                        </S.ButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminAmenCatDetail;