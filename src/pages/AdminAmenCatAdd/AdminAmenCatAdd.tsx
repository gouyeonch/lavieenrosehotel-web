import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import InputBox4Info from "../../components/InputBox/InputBox4Info";
import ViewBox from "../../components/ViewBox/ViewBox";
import Report from "../../components/Report/Report";
import Button from "../../components/Button/Button";

const AdminAmenCatAdd: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [view, setView] = useState<string>("");
    const [floor, setFloor] = useState<string>("");
    const [discription, setDiscription] = useState<string>("");

    const handleAccompaniedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccompanied(e.target.checked);
    };

    return (
        <>
            <S.Container>
                <TopBar pageName="부대/복리 시설 관리"/>

                <S.MainBody>
                    <AdminSidebarDetail adminSidebarName="액티비티 정보"/>
                    <S.RightBody>

                        <S.SubTitle>액티비티 추가</S.SubTitle>
                        <S.SubTitleDisc>액티비티 정보를 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>
                            <S.RowBox>
                                <InputBoxCnt label={"액티비티 카테고리명"} value={name} onChange={setName} count={20} width={"250px"}/>
                                <InputBox label={"액티비티 요약설명"} value={type} onChange={setType} width={"700px"}/>    
                            </S.RowBox>
                            
                            <S.RowBox>
                                <InputBox4Info label={"액티비티 추가 정보"} value={view} onChange={setView} width={"1050px"}/>
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

export default AdminAmenCatAdd;