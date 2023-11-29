import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import AdminSidebarDetail from "../../components/AdminSidebarDetail/AdminSiderbarDetail";
import InputBox from "../../components/InputBox/InputBox";
import InputBoxCnt from "../../components/InputBox/InputBoxCnt";
import InputBoxUnit from "../../components/InputBox/InputBoxUnit";

type CatData = {
    name: string;
};

const AdminAddRoomCat: React.FC = () => {
    const [introduction, setIntroduction] = useState<string>("");
    return (
        <>
            <S.Container>
                <TopBar pageName="객실 관리"/>

                <S.MainBody>
                    <AdminSidebarDetail adminSidebarName="객실 정보"/>
                    <S.RightBody>
                        <InputBoxCnt label={"객실 카테고리명"} value={introduction} onChange={setIntroduction} count={20} />
                        <InputBox label={"객실 카테고리명"} value={introduction} onChange={setIntroduction} />
                        <InputBoxUnit label={"객실 카테고리명"} value={introduction} onChange={setIntroduction} unit={"m"} />
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminAddRoomCat;