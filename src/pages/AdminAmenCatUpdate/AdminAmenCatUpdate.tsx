import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../api/Axios";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import InputBox4Info from "../../components/InputBox/InputBox4Info";
import Button from "../../components/Button/Button";

type CatData = {
    type?: string;
    summary?: string;
    information?: string;
    all_day_price?: number;
};

const AdminAmenCatUpdate: React.FC = () => {
    const [catData, setCatData] = useState<CatData>();
    const { id } = useParams();

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/amenities/${id}`);

              console.log(response.data.data);

              setCatData(response.data.data);
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
                            // 예약이 있으면 예약 리스트 랜더링
                            <S.SubTitle>액티비티 수정</S.SubTitle>
                            <S.SubTitleDisc>액티비티 정보를 입력해주세요</S.SubTitleDisc>
                            <S.ColumnBox>
                                <S.RowBox>
                                    {catData &&
                                    <InputBoxCnt label={"액티비티 카테고리명"} value={catData.type} onChange={setCatData} count={20} width={"300px"}/>

                                    }
                                    <InputBox label={"액티비티 요약설명"} value={catData?.summary} onChange={setCatData} width={"700px"}/>    
                                </S.RowBox>
                                
                                <S.RowBox>
                                    <InputBox4Info label={"액티비티 추가 정보"} value={catData?.information} onChange={setCatData} width={"1050px"}/>
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
                                    <InputBoxUnit label={"가격"} value={catData?.all_day_price} onChange={setCatData} unit="원" width={"250px"}/>
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

export default AdminAmenCatUpdate;