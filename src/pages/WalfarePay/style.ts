import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
`;

const SidebarArea = styled.div`
    height: auto;
    background-color: white;
    width: 300px;
`;

const MainBody = styled.div`
    margin-left: 200px;
    display: flex;
    height: auto;
`;

const RightBody = styled.div`
    width: calc(100% - 300px);
    height: 1030px;
`;

const Input = styled.input`
    display: flex;
    width: 300px;
    height: 50px;
    padding: 2px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--kakao-logo, #000);
    background: rgba(255, 255, 255, 0.44);
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

const redText = styled.div`
    color: #FF0707; 
    font-size: 30px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 45px; 
    word-wrap: break-word;
`

const CenterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`

const TitleText = styled.div`
    color: var(--kakao-logo, #000);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 45px */
    letter-spacing: -0.66px;
    margin-top: 30px;
    margin-bottom: 30px;
`
const GrayText = styled.div`
    color: rgba(0, 0, 0, 0.44);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 200;
    line-height: 150%; /* 45px */
    letter-spacing: -0.66px;
    margin-bottom: 10px;
`

const Margin = styled.div`
    color: white;
    margin: 40px;
`

const SelectLayout = styled.div`
    display: flex;
    width: 250px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    border-radius: 10px;
    border: 1px solid var(--kakao-logo, #000);
    background: rgba(255, 255, 255, 0.44);
`;

const CheckBoxArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const PayMenubarArea = styled.div`
    width: 400px;
    height: auto;
    flex-shrink: 0;
    margin-top: 20px;
    margin-right: 200px;
`;

const PayMenubarWrapper = styled.div`
    display: flex;
    width: 400px;
    height: 90px;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
`;

const PayMenubarTitle = styled.div`
    color: rgba(0, 0, 0, 0.44); 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 200; 
    line-height: 37.50px; 
    word-wrap: break-word;
`;


const PayMenubarContents = styled.div`
    color: black; 
    font-size: 25px; 
    font-family: Inter; 
    font-weight: 700; 
    line-height: 37.50px; 
    word-wrap: break-word
`;

const PriceArea = styled.div`
    display: flex;
    width: 400px;
    height: 90px;
    padding: 8px 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    margin-top: 70px;
    margin-bottom: 100px;
`;

export const S = {
    Container,
    MainBody,
    RightBody,
    ImgaeArea,
    GrayText,
    redText,
    CenterContainer,
    TitleText,
    Margin,
    SidebarArea,
    Input,
    SelectLayout,
    CheckBoxArea,
    PriceArea,
    PayMenubarContents,
    PayMenubarTitle,
    PayMenubarWrapper,
    PayMenubarArea,
  };