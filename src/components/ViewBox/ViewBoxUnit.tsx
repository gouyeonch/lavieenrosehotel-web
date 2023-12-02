import { S } from "./style";

interface Props {
  value: string;
  label: string;
  unit: string;
  width: string | number;
}

const ViewBoxUnit: React.FC<Props> = ({ label, value, unit, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.UnitTextarea
        value={value}
      />
      <S.Counter>{unit}</S.Counter>
    </S.Container>
  );
};

export default ViewBoxUnit;
