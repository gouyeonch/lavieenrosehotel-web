import { S } from "./style";

interface Props {
  value: string;
  label: string;
  unit: string;
  onChange: (value: string) => void;
  width: string | number;
}

const ViewBoxUnit: React.FC<Props> = ({ label, value, unit, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
      />
      <S.Counter>{unit}</S.Counter>
    </S.Container>
  );
};

export default ViewBoxUnit;
