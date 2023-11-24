import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";

const Homepage: React.FC = () => {
  return (
    <>
        <S.Container>
            <TopBar pageName="홈페이지"/>
        </S.Container>
    </>
  );
};

export default Homepage;