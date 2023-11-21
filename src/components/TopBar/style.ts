import styled from "styled-components";


const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 1900px;
    height: 50px;
    align-items: center;
    background-color: #FFFF00;
`;

const TopBarNameBox = styled.div`
    position: relative;
    left: 17px;
`;

const TopBarName = styled.div`
    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word;
`;

const StatusBox = styled.div`
  margin: 0 auto;
  width: 1900px;
  height: 50px;
  background-color: #FFFFFF;
`;

const LoginBtn = styled.div`
  margin: 0 auto;
  width: 1900px;
  height: 50px;
  background-color: #FFFFFF;
`;

export const S = {
    Container,
    TopBarNameBox,
    TopBarName,
    StatusBox
  };