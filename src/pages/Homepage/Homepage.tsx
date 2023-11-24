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
            <S.ImgaeArea>홈페이지 그림영역</S.ImgaeArea>
        </S.Container>
    </>
  );
};

export default Homepage;