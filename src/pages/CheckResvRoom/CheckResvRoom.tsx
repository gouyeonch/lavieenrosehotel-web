import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";

const CheckResvRoom: React.FC = () => {
  return (
    <>
        <S.Container>
            <TopBar pageName="마이페이지"/>
            <SidebarUser />
        </S.Container>
    </>
  );
};

export default CheckResvRoom;