import React, { useState } from "react";
import { S } from "./style";
import StatusBox from "./StatusBox";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  pageName: string;
  barStatus?: number;
  isAdmin: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ pageName, isAdmin, barStatus=1 }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        {barStatus === 2 ?
          <S.TopBarNameBox>
            <S.TopBarName>{pageName}</S.TopBarName>
          </S.TopBarNameBox>
          :
          (isAdmin ?
            <S.TopBarNameBox onClick={()=>navigate("/adminCheckRoomCat")}>
              <S.TopBarName>{pageName}</S.TopBarName>
            </S.TopBarNameBox>
          :
            <S.TopBarNameBox onClick={()=>navigate("/homepage")}>
              <S.TopBarName>{pageName}</S.TopBarName>
            </S.TopBarNameBox>
          )
        }
        
        {/*초기 페이지(로그인안함)*/}
        {barStatus === 0 && <S.LoginBtn/>}
        {/*로그인 사용자 정보*/}
        {barStatus === 1 && 
          (isAdmin ?
            <S.StatusBox onClick={()=>navigate("/adminCheckRoomCat")}>
              <StatusBox />
            </S.StatusBox>
          :
            <S.StatusBox onClick={()=>navigate("/checkResvRoom")}>
              <StatusBox />
            </S.StatusBox>
          )
        }
        {/*회원가입 페이지는 아무것도 없음*/}

      </S.Container>
    </>
  );
};

export default TopBar;