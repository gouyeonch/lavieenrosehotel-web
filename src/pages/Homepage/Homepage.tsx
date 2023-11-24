import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";

const Homepage: React.FC = () => {
  return (
    <>
        <S.Container>
            <TopBar pageName="홈페이지"/>
            <UserTopBar />
        </S.Container>
    </>
  );
};

export default Homepage;