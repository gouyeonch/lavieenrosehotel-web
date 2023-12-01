import styled from "styled-components";
import DetailIconImg from "../../assets/icons/Pencil.svg"

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const MainBody = styled.div`
    display: flex;

    height: 1030px;
`;

const RightBody = styled.div`
    width: calc(100% - 300px);
    height: 1030px;
`;

const SubTitle = styled.div`
    margin-top: 50px;
    margin-bottom: 5px;

    color: black;
    font-size: 30px;
    font-family: Inter;
    font-weight: 700;
    line-height: 45px;
    word-wrap: break-word
`

const SubTitleDisc = styled.div`
    margin-bottom: 4px;

    color: #866D37;
    font-size: 25px;
    font-family: Inter;
    font-weight: 100;
    line-height: 37.50px;
    word-wrap: break-word
`

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const CheckBoxLabel = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-size: 25px;
    font-family: Inter;
    font-weight: 500;
    line-height: 37.50px;
    word-wrap: break-word
 `

export const S = {
    Container,
    MainBody,
    RightBody,
    SubTitle,
    SubTitleDisc,
    RowBox,
    ColumnBox,
    CheckBoxLabel,
  };