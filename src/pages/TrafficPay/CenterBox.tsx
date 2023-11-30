import React, { useState } from "react";
import { S } from "./style";
import styled from "styled-components";
import CheckBoxes from "./CheckBoxes";
import MyTreeSelectComponent from "./MyTreeSelectComponent";


const CenterBox: React.FC = () => {
  return (
    
    
    <S.Container>
    <S.TitleText>예약자 정보</S.TitleText>
    <S.Margin></S.Margin>
    <S.Margin></S.Margin>
    <S.GrayText>예약자 이름</S.GrayText>
    <textarea id="reservation" name="reservation" placeholder="교통이용 시 필요한 정보입니다."
          rows={3} cols={50}>
    </textarea>
    <S.Margin></S.Margin>

    <S.GrayText>휴대폰 번호</S.GrayText>
    <textarea id="PhoneNum" name="PhoneNum" placeholder="교통이용 시 필요한 정보입니다."
          rows={3} cols={50}>
    </textarea>
    <S.Margin>1</S.Margin>
    <S.Margin>1</S.Margin>
    <S.Margin>1</S.Margin>
    <S.Margin>1</S.Margin>
    <S.TitleText>결제수단 선택</S.TitleText>

    <MyTreeSelectComponent></MyTreeSelectComponent>
    <S.Margin>1</S.Margin>
    <S.Margin>1</S.Margin>
    <CheckBoxes></CheckBoxes>
    <S.Margin>1</S.Margin>
    <S.Margin>1</S.Margin>
    </S.Container>
  );
};

export default CenterBox;