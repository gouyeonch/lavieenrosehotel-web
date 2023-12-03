import { S } from "./style";

interface Props {
  value?: string;
  label?: string;
  unit?: string;
  onChange: (value: string) => void;
  width?: string | number;
}

const InputBoxUnit: React.FC<Props> = ({ label, value, unit, onChange, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.UnitTextarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <S.Counter>{unit}</S.Counter>
    </S.Container>
  );
};

export default InputBoxUnit;
