import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const ImageArea = styled.div<{ backgroundImage: string }>`
    margin: 0 auto;
    width: 100%;
    height: 938px;
    background-color: #FFFFFF;

    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;

    line-height: 900px;
`

export const S = {
    Container,
    ImageArea,
  };