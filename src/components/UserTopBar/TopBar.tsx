import React, { useState } from "react";
import { S } from "./style";
import StatusBox from "./StatusBox";

interface TopBarProps {
  pageName: string;
}

const TopBar: React.FC<TopBarProps> = ({ pageName }) => {
  const [barStatus, setbarStatus] = useState(1);
  return (
    <>
      <S.Container>
        <S.TopBarNameBox>
          <S.TopBarName>{pageName}</S.TopBarName>
        </S.TopBarNameBox>

        {/*초기 페이지(로그인안함)*/}
        {barStatus === 0 && <S.LoginBtn/>}
        {/*로그인 사용자 정보*/}
        {barStatus === 1 && 
          <S.StatusBox>
            <StatusBox/>
          </S.StatusBox>
        }

      </S.Container>
    </>
  );
};

export default TopBar;