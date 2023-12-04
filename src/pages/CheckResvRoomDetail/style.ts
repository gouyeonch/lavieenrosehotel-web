import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 1080px;
    background-color: #FFFFFF;
`;

const MainBody = styled.div`
    display: flex;
    margin-left: 300px;

    height: 1030px;
`;

const RightBody = styled.div`
    width: calc(100% - 300px);
    height: 1030px;
`;

const SubTitle = styled.div`
    margin-top: 100px;
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
    color: black;
    font-size: 25px;
    font-family: Inter;
    font-weight: 700;
    line-height: 37.50px;
    word-wrap: break-word;
    margin-left: 20px;
    margin-top: 10px;
 `

 const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-top: 20px;
  width: 24px;
  height: 24px;
`;

const CheckBoxAnswer = styled.div`
    margin-top: 15px;
    margin-left: -13px;

    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
 `

 const ButtonBox = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    height: 200px;
 `

 const Text = styled.div`
    margin-top: 15px;

    margin-right: auto;
    color: rgba(0, 0, 0, 0.44);
    font-size: 25px;
    font-family: Inter;
    font-weight: 500;
    line-height: 37.50px;
    word-wrap: break-word
`;

export const S = {
    Container,
    MainBody,
    RightBody,
    SubTitle,
    SubTitleDisc,
    RowBox,
    ColumnBox,
    CheckBoxLabel,
    Checkbox,
    CheckBoxAnswer,
    ButtonBox,
    Text,
  };