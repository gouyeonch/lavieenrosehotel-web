import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";

import PayMenubarUser from "./PayMenubarUser";
import CatBox from "./CenterBox";



const ResvRoomPay: React.FC = () => {

    return (
        <>
            <S.Container>
                <TopBar pageName="객실 결제"/>

                <S.MainBody>
                    
                    
                    <S.RightBody>
                        <CatBox></CatBox>
                    </S.RightBody>
                    <PayMenubarUser />
                    
                    
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default ResvRoomPay;