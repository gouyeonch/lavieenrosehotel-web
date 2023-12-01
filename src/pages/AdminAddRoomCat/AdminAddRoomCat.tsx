import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import ViewBox from "../../components/ViewBox/InputBox";
import Report from "../../components/Report/Report";
import ReportMarked from "../../components/Report/ReportMarked";

type CatData = {
    name: string;
};

const AdminAddRoomCat: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [view, setView] = useState<string>("");
    const [floor, setFloor] = useState<string>("");
    const [discription, setDiscription] = useState<string>("");
    const [peoStandard, setPeoStandard] = useState<string>("");
    const [peoMax, setPeoMax] = useState<string>("");

    return (
        <>
            <S.Container>
                <TopBar pageName="객실 관리"/>

                <S.MainBody>
                    <AdminSidebarDetail adminSidebarName="객실 정보"/>
                    <S.RightBody>

                        <S.SubTitle>객실 카테고리 정보</S.SubTitle>
                        <S.SubTitleDisc>객실 카테고리 정보를 입력해주세요</S.SubTitleDisc>
                        <S.ColumnBox>
                            <S.RowBox>
                                <InputBoxCnt label={"객실 카테고리명"} value={name} onChange={setName} count={20} width={"500px"}/>
                                <InputBox label={"객실 유형"} value={type} onChange={setType} width={"318px"}/>    
                            </S.RowBox>
                            
                            <S.RowBox>
                                <InputBox label={"객실 전망"} value={view} onChange={setView} width={"500px"}/>
                                <InputBoxUnit label={"층"} value={floor} onChange={setFloor} unit={"층"} width={"318px"}/> 
                            </S.RowBox>

                            <S.RowBox>
                                <ViewBox label={"노출객실명"} value={name + " " + type + " " + view} onChange={setView} width={"810px"}/>
                                <InputBox label={"객실 요약 설명"} value={discription} onChange={setDiscription} width={"420px"}/> 
                            </S.RowBox>

                            <Report>고객페이지에 노출되는 객실이름입니다. (객실명 + 객실유형 + 객실전망)</Report>
                        </S.ColumnBox>

                        <S.SubTitle>투숙 인원</S.SubTitle>
                        <S.ColumnBox>
                            <ReportMarked>허용 투숙 인원을 설정하면 사용 조건에서 추가인원에 대한 추가요금을 설정할 수 있습니다.</ReportMarked>

                            <S.RowBox>
                                <InputBoxUnit label={"기준 인원"} value={peoStandard} onChange={setPeoStandard} unit="명" width={"300px"}/>
                                <InputBoxUnit label={"최대 인원"} value={peoMax} onChange={setPeoMax} unit="명" width={"300px"}/>    
                            </S.RowBox>
                        </S.ColumnBox>

                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminAddRoomCat;