import { S } from "./style";

interface Props {
  value?: string | number;
  label?: string;
  width?: string | number;
}

const ViewBox4Info: React.FC<Props> = ({ label="", value="",  width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.TextareaLarg
        value={value}
      />
    </S.Container>
  );
};

export default ViewBox4Info;
