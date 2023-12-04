import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";

import PayMenubarUser from "./PayMenubarUser";
import CenterBox from "./CenterBox";



const ResvRoomPay: React.FC = () => {

    return (
        <>
            <S.Container>
                <TopBar isAdmin={false} pageName="객실 결제"/>
                <S.MainBody>
                    <S.SidebarArea></S.SidebarArea>
                        <S.RightBody>
                            <CenterBox></CenterBox>
                        </S.RightBody>
                        <PayMenubarUser />
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default ResvRoomPay;