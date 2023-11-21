import React, { useState } from "react";
import { S } from "./style";

interface TopBarProps {
  pageName: string;
}

const TopBar: React.FC<TopBarProps> = ({ pageName }) => {
  const [barStatus, setbarStatus] = useState(0);
  return (
    <>
      <S.Container>
        <S.TopBarNameBox>
          <S.TopBarName>{pageName}</S.TopBarName>
        </S.TopBarNameBox>


      </S.Container>
    </>
  );
};

export default TopBar;