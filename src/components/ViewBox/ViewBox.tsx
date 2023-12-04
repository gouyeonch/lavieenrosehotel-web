import { S } from "./style";

interface Props {
  value?: string;
  label?: string;
  width?: string | number;
}

const ViewBox: React.FC<Props> = ({ label, value, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea>{value}</S.Textarea>
    </S.Container>
  );
};

export default ViewBox;
