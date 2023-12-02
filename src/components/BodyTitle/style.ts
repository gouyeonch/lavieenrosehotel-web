import styled from "styled-components";

const Container = styled.div`
    display: flex;
    
    height: 76px;
    border-bottom: 1.5px solid rgba(198, 188, 188, 0.44);
    padding-left: 30px;
    display: flex;
    align-items: center;
`;

const TextBox = styled.div`
    color: black;
    font-size: 40px;
    font-family: Inter;
    font-weight: 700;
    line-height: 60px;
    word-wrap: break-word
`

export const S = {
    Container,
    TextBox,
};