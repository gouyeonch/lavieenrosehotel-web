import styled from "styled-components";
import CancelCatImg from  "../../assets/icons/CancelResv.svg"
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
	box-sizing: border-box;
	text-align: center;
    text-decoration: none;
`;

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

const ImgaeArea = styled.div`
    margin: 0 auto;
    width: 1920px;
    height: 938px;
    background-color: #FFFFFF;

    font-weight: 700;
    line-height: 900px;
    text-align: center;
`

const CatList = styled.div`
    margin-top: 8px;
    margin-left: 25px;
    display: flex;
    flex-direction: column; 
    gap: 15px;
`

const CatContainer = styled.div`
    
    width: calc(100% - 100px); 
    height: 35px; 
    padding: 16px; 
    background: white; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05); 
    border: 1px #EEEEEE solid; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
    display: flex;
`

const CatLeft = styled.div`
    width: 70%; 
    height: 35px; 
    background: white; 
    flex-direction: column; 
    justify-content: space-around; 
    align-items: flex-start; 
    gap: 16px; 
    display: inline-flex
`

const CatText = styled.div`
    text-align: center; 
    color: black; 
    font-size: 16px; 
    font-family: Noto Sans KR; 
    font-weight: 500; 
    word-wrap: break-word;
`

const CancelCat = styled.div`
    
    margin-top: -5px;
    margin-left: auto;
    margin-right: 10px;
    min-width: 90px; 
    height: 41px; 
    padding-left: 10px; 
    padding-right: 10px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
    border-radius: 10px; 
    overflow: hidden; 
    border: 1.50px #FF0000 solid; 
    justify-content: flex-start; 
    align-items: center; 
    gap: 9px; 
    display: inline-flex;
    cursor: pointer;
`

const CancelCatText = styled.div`
    color: #FF0000; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 500; 
    line-height: 37.50px; 
    word-wrap: break-word
`

const CancelCatIcon = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${CancelCatImg});
`;

const NotFoundContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`

const NotFoundText = styled.div`
    margin-top: 230px;
    margin-bottom: 20px;

    color: black;
    font-size: 35px;
    font-family: Noto Sans KR;
    font-weight: 500;
    word-wrap: break-word
`

const ButtonBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin-top: 40px;
`

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    CatList,
    CatContainer,
    CatLeft,
    CatText,
    CancelCat,
    CancelCatText,
    CancelCatIcon,
    NotFoundContainer,
    NotFoundText,
    ButtonBox,
    StyledLink,
  };