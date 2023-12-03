import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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
    
    const handleTypeChange = (newType: string) => {
        setCatData((prevCatData) => ({
            ...prevCatData,
            type: newType,
        }));
    };

    const handleSummaryChange = (newSummary: string) => {
        setCatData((prevCatData) => ({
            ...prevCatData,
            summary: newSummary,
        }));
    };

    const handleInformationChange = (newInformation: string) => {
        setCatData((prevCatData) => ({
            ...prevCatData,
            information: newInformation,
        }));
    };
    
    const handleAllDayPriceChange = (newAllDayPrice: string) => {
        setCatData((prevCatData) => ({
            ...prevCatData,
            all_day_price: Number(newAllDayPrice),
        }));
    };

    const handleSubmit = async () => {
        
        const amenInfo = {
          amenity_type: "SKI",
          name: catData?.type,
          summary: catData?.summary,
          information: catData?.information,
          all_day_price: catData?.all_day_price,
        };
    
        if (
            true
        ) {
            console.log(amenInfo);
          await apiClient
            .put(`/admin/amenities/${id}`, amenInfo, {
            })
            .then((response) => {
              console.log(response);
              navigate("/adminCheckAmenCat");
            })
            .catch((error) => {
              console.error("시설 수정 에러가 발생했습니다: ", error);
            });
        } else {
        }
      };

    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="부대/복리 시설 관리"/>

                <S.MainBody>
                    <AdminSidebarDetail adminSidebarName="액티비티 정보"/>
                    <S.RightBody>
                            <S.SubTitle>액티비티 수정</S.SubTitle>
                            <S.SubTitleDisc>액티비티 정보를 입력해주세요</S.SubTitleDisc>
                            <S.ColumnBox>
                                <S.RowBox>
                                    {catData &&
                                    <InputBoxCnt label={"액티비티 카테고리명"} value={catData.type} onChange={handleTypeChange} count={20} width={"300px"}/>

                                    }
                                    <InputBox label={"액티비티 요약설명"} value={catData?.summary} onChange={handleSummaryChange} width={"700px"}/>    
                                </S.RowBox>
                                
                                <S.RowBox>
                                    <InputBox4Info label={"액티비티 추가 정보"} value={catData?.information} onChange={handleInformationChange} width={"1050px"}/>
                                </S.RowBox>
                            </S.ColumnBox>

                            <S.SubTitle>서비스 요금 설정</S.SubTitle>
                            <S.ColumnBox>
                                <S.RowBox>
                                    <InputBoxUnit label={"가격"} value={catData?.all_day_price?.toString()} onChange={handleAllDayPriceChange} unit="원" width={"250px"}/>
                                </S.RowBox>
                            </S.ColumnBox>
                        
                            <S.ButtonBox onClick={handleSubmit}>
                                <Button buttonName="완료 및 저장하기" buttonColor="#BFDEFA"/>
                            </S.ButtonBox>
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminAmenCatUpdate;