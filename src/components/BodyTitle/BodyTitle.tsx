import React, { useState } from "react";
import { S } from "./style";

interface BodyTitleProps {
    bodyName: string;
  }

const BodyTitle: React.FC<BodyTitleProps> = ({ bodyName }) => {
  return (
    <>
        <S.Container>
            <S.TextBox>{bodyName}</S.TextBox>
        </S.Container>
    </>
  );
};

export default BodyTitle;