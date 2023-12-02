import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import ViewBox from "../../components/ViewBox/ViewBox";
import Report from "../../components/Report/Report";
import ReportMarked from "../../components/Report/ReportMarked";
import Button from "../../components/Button/Button";

const AdminRoomCatUpdate: React.FC = () => {
    const [name, setName] = useState<string>("스위트");
    const [type, setType] = useState<string>("스파객실");
    const [view, setView] = useState<string>("바다전망");
    const [floor, setFloor] = useState<string>("4");
    const [discription, setDiscription] = useState<string>("카테고리 더미데이터 입니다");
    const [peoStandard, setPeoStandard] = useState<string>("2");
    const [peoMax, setPeoMax] = useState<string>("4");
    const [accompanied, setAccompanied] = useState<boolean>(true);
    const [payBasic, setPayBasic] = useState<string>("10000");
    const [payAdd, setPayAdd] = useState<string>("20000");
    const [payHot, setPayHot] = useState<string>("30000");

    const handleAccompaniedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccompanied(e.target.checked);
    };

    return (
        <>
            <S.Container>
                <TopBar isAdmin={true} pageName="객실 관리"/>

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
                                <ViewBox label={"노출객실명"} value={name + " " + type + " " + view} width={"810px"}/>
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
                            <InputBoxUnit label={"기본 요금"} value={payBasic} onChange={setPayBasic} unit="원" width={"500px"}/>
                            <InputBoxUnit label={"성인 추가 인원 요금"} value={payAdd} onChange={setPayAdd} unit="원" width={"500px"}/> 
                            <InputBoxUnit label={"성수기 요금"} value={payHot} onChange={setPayHot} unit="원" width={"500px"}/>    
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

export default AdminRoomCatUpdate;