import React, { useState } from "react";
import { S } from "./style";
import apiClient from "../../api/AxiosMarti";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import InputBox4Info from "../../components/InputBox/InputBox4Info";
import Button from "../../components/Button/Button";

const AdminAmenCatAdd: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [discShort, setDiscShort] = useState<string>("");
    const [discLarg, setDiscLarg] = useState<string>("");
    const [cost, setCost] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        
        const jsonPart = JSON.stringify({
          amenity_type: name,
          name: "SKI",
          summary: discShort,
          information: discLarg,
          all_day_price: cost,
        });

        const formData = new FormData();
        formData.append(
            "message",
            new Blob([jsonPart], { type: "application/json" })
        );
    
        if (
          name !== "" &&
          discShort !== "" &&
          discLarg !== "" &&
          cost !== ""
        ) {
          console.log(jsonPart);
          console.log(formData);
          await apiClient
            .post("/admin/amenities", formData, {
            })
            .then((response) => {
              console.log(response);
              navigate("/adminCheckAmenCat");
            })
            .catch((error) => {
              console.error("시설추가 에러가 발생했습니다: ", error);
              if (error instanceof AxiosError) {
                if (error?.response?.data.code) {
                  console.log(error.response);
                }
              }
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

                        <S.SubTitle>액티비티 추가</S.SubTitle>
                        <S.SubTitleDisc>액티비티 정보를 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>
                            <S.RowBox>
                                <InputBoxCnt label={"액티비티 카테고리명"} value={name} onChange={setName} count={20} width={"300px"}/>
                                <InputBox label={"액티비티 요약설명"} value={discShort} onChange={setDiscShort} width={"700px"}/>    
                            </S.RowBox>
                            
                            <S.RowBox>
                                <InputBox4Info label={"액티비티 추가 정보"} value={discLarg} onChange={setDiscLarg} width={"1050px"}/>
                            </S.RowBox>
                        </S.ColumnBox>

                        <S.SubTitle>서비스 요금 설정</S.SubTitle>
                        <S.ColumnBox>
                            <S.RowBox>
                                <InputBoxUnit label={"가격"} value={cost} onChange={setCost} unit="원" width={"250px"}/>
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

export default AdminAmenCatAdd;