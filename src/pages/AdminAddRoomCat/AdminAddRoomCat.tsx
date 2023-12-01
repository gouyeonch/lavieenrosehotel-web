import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";
import ViewBox from "../../components/ViewBox/InputBox";

type CatData = {
    name: string;
};

const AdminAddRoomCat: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [view, setView] = useState<string>("");
    const [floor, setFloor] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
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
                        <S.RowBox>
                            <InputBoxCnt label={"객실 카테고리명"} value={name} onChange={setName} count={20} width={"500px"}/>
                            <InputBox label={"객실 유형"} value={type} onChange={setType} width={"318px"}/>    
                        </S.RowBox>
                        
                        <S.RowBox>
                            <InputBox label={"객실 전망"} value={view} onChange={setView} width={"500px"}/>
                            <InputBox label={"층"} value={floor} onChange={setFloor} width={"318px"}/> 
                        </S.RowBox>

                        <S.RowBox>
                            <ViewBox label={"노출객실명"} value={name + " " + type + " " + view} onChange={setView} width={"810px"}/>
                            <InputBox label={"객실 요약 설명"} value={discription} onChange={setDiscription} width={"420px"}/> 
                        </S.RowBox>
                           
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminAddRoomCat;