import styled from "styled-components";
import ReportIconImg from "../../assets/icons/Report.svg"
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

`;

const MarkedContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  background-color: #F1E3C440;

`;

const ReportIcon = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-image: url(${ReportIconImg});
`;

const Text = styled.div`
  color: black;
  font-size: 25px;
  font-family: Inter;
  font-weight: 500;
  line-height: 37.50px;
  word-wrap: break-word
`;

export const S = {
  Container,
  MarkedContainer,
  ReportIcon,
  Text,
};