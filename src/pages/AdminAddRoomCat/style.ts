import styled from "styled-components";
import CancelCatImg from  "../../assets/icons/CancelResv.svg"
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

export const S = {
    Container,
    MainBody,
    RightBody,
  };