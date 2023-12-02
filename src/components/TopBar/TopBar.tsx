import React, { useState } from "react";
import { S } from "./style";
import StatusBox from "./StatusBox";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  pageName: string;
  isAdmin: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ pageName, isAdmin }) => {
  const [barStatus, setbarStatus] = useState(1);
  const navigate = useNavigate();

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

      </S.Container>
    </>
  );
};

export default TopBar;