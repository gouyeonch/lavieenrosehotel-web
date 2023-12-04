import React, { useState } from "react";
import { S } from "./style";
import CheckBoxes from "./CheckBoxes";
import MyTreeSelectComponent from "./MyTreeSelectComponent";

const CenterBox: React.FC = () => {
  return (
    <S.Container>
      <S.TitleText>예약자 정보</S.TitleText>
      <S.GrayText>예약자 이름</S.GrayText>
      <S.Input id="reservation" name="reservation" placeholder="체크인 시 필요한 정보입니다." required />
      <S.Margin />
      <S.GrayText>휴대폰 번호</S.GrayText>
      <S.Input id="PhoneNum" name="PhoneNum" placeholder="체크인 시 필요한 정보입니다." required />
      <S.Margin>1</S.Margin>
      <S.TitleText>결제수단 선택</S.TitleText>
      <MyTreeSelectComponent />
      <CheckBoxes />
    </S.Container>
  );
};

export default CenterBox;