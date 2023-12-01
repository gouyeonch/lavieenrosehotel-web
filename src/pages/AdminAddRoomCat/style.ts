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

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`

const ColumnBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const S = {
    Container,
    MainBody,
    RightBody,
    RowBox,
    ColumnBox,
  };