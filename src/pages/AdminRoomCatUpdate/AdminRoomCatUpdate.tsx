import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { S } from "./style";
import apiClient from "../../api/Axios";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import ViewBox from "../../components/ViewBox/ViewBox";
import Report from "../../components/Report/Report";
import ReportMarked from "../../components/Report/ReportMarked";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";

type CatData = {
    name?: string;
    room_type?: string;
    view_type?: string;
    summary?: string;
    standard_capacity?: number;
    max_capacity?: number;
    default_price?: number;
    peek_price?: number;
    addition_price?: number;
};

const AdminRoomCatUpdate: React.FC = () => {
    const [accompanied, setAccompanied] = useState<boolean>(true);
    const [CatData, setCatData] = useState<CatData>();
    const { id } = useParams();
    const navigate = useNavigate();


    const handleAccompaniedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccompanied(e.target.checked);
    };

    const handleNameChange = (newName: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            name: newName
        }));
    };
    
    const handleRoomTypeChange = (newRoomType: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            room_type: newRoomType
        }));
    };
    
    const handleViewTypeChange = (newViewType: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            view_type: newViewType
        }));
    };
    
    const handleSummaryChange = (newSummary: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            summary: newSummary
        }));
    };
    
    const handleStandardCapacityChange = (newStandardCapacity: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            standard_capacity: Number(newStandardCapacity)
        }));
    };
    
    const handleMaxCapacityChange = (newMaxCapacity: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            max_capacity: Number(newMaxCapacity)
        }));
    };
    
    const handleDefaultPriceChange = (newDefaultPrice: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            default_price: Number(newDefaultPrice)
        }));
    };
    
    const handlePeekPriceChange = (newPeekPrice: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            peek_price: Number(newPeekPrice)
        }));
    };
    
    const handleAdditionPriceChange = (newAdditionPrice: string) => {
        setCatData(prevCatData => ({
            ...prevCatData,
            addition_price: Number(newAdditionPrice)
        }));
    };
    

    useEffect(() => {
        // 데이터를 불러옵니다.
        const fetchData = async () => {
            try {
              const response = await apiClient.get(`/admin/categories/${id}`);

              console.log(response.data.data);

              setCatData(response.data.data);
            } catch (error) {
            }
          };

        fetchData();
      }, []);

    const handleSubmit = async () => {
        
        const roomInfo = {
            name: CatData?.name,
            room_type: CatData?.room_type,
            view_type: CatData?.view_type,
            summary: CatData?.summary,
            standard_capacity: CatData?.standard_capacity,
            max_capacity: CatData?.max_capacity,
            default_price: CatData?.default_price,
            peek_price: CatData?.peek_price,
            addition_price: CatData?.addition_price,
            status: "VISIBLE"
        };
    
        if (
            true
        ) {
            console.log(roomInfo);
          await apiClient
            .put(`/admin/categories/${id}`, roomInfo, {
            })
            .then((response) => {
              console.log(response);
              navigate("/adminCheckRoomCat");
            })
            .catch((error) => {
              console.error("객실 수정 에러가 발생했습니다: ", error);
            });
        } else {
        }
      };

    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="객실 관리"/>

                <S.MainBody>
                    <AdminSidebarDetail adminSidebarName="객실 정보"/>
                    <S.RightBody>

                        <S.SubTitle>객실 카테고리 수정/확인</S.SubTitle>
                        <S.SubTitleDisc>객실 카테고리 정보를 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>
                            <S.RowBox>
                                <InputBoxCnt label={"객실 카테고리명"} value={CatData?.name} onChange={handleNameChange} count={20} width={"500px"}/>
                                <InputBox label={"객실 유형"} value={CatData?.room_type} onChange={handleRoomTypeChange} width={"318px"}/>    
                            </S.RowBox>
                            
                            <S.RowBox>
                                <InputBox label={"객실 전망"} value={CatData?.view_type} onChange={handleViewTypeChange} width={"500px"}/>
                            </S.RowBox>

                            <S.RowBox>
                                <ViewBox label={"노출객실명"} value={CatData?.name + " " + CatData?.room_type + " " + CatData?.view_type} width={"810px"}/>
                                <InputBox label={"객실 요약 설명"} value={CatData?.summary} onChange={handleSummaryChange} width={"420px"}/> 
                            </S.RowBox>

                            <Report>고객페이지에 노출되는 객실이름입니다. (객실명 + 객실유형 + 객실전망)</Report>
                        </S.ColumnBox>

                        <S.SubTitle>투숙 인원</S.SubTitle>
                        <S.ColumnBox>
                            <ReportMarked>허용 투숙 인원을 설정하면 사용 조건에서 추가인원에 대한 추가요금을 설정할 수 있습니다.</ReportMarked>

                            <S.RowBox>
                                <InputBoxUnit label={"기준 인원"} value={CatData?.standard_capacity?.toString()} onChange={handleStandardCapacityChange} unit="명" width={"300px"}/>
                                <InputBoxUnit label={"최대 인원"} value={CatData?.max_capacity?.toString()} onChange={handleMaxCapacityChange} unit="명" width={"300px"}/>    
                            </S.RowBox>

                            <S.RowBox>
                                <S.CheckBoxLabel>6세 이하 어린이 무료 동반 입실 가능</S.CheckBoxLabel>
                                <S.Checkbox
                                    checked={accompanied}
                                    onChange={handleAccompaniedChange}
                                />   
                                <S.CheckBoxAnswer>예</S.CheckBoxAnswer>
                            </S.RowBox>

                        </S.ColumnBox>
                            <S.SubTitle>객실 카테고리 이미지 업로드</S.SubTitle>
                            <S.SubTitleDisc>이미지 상세설정을 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>

                        </S.ColumnBox>

                        <S.SubTitle>상세설정</S.SubTitle>
                        <S.ColumnBox>
                            <InputBoxUnit label={"기본 요금"} value={CatData?.default_price?.toString()} onChange={handleDefaultPriceChange} unit="원" width={"500px"}/>
                            <InputBoxUnit label={"성인 추가 인원 요금"} value={CatData?.addition_price?.toString()} onChange={handlePeekPriceChange} unit="원" width={"500px"}/> 
                            <InputBoxUnit label={"성수기 요금"} value={CatData?.peek_price?.toString()} onChange={handleAdditionPriceChange} unit="원" width={"500px"}/>    
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

export default AdminRoomCatUpdate;