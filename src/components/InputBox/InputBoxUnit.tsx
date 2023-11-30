import { S } from "./style";

interface Props {
  value: string;
  label: string;
  unit: string;
  onChange: (value: string) => void;
}

const InputBoxUnit: React.FC<Props> = ({ label, value, unit, onChange }) => {
  return (
    <S.Container>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={20}
      />
      <S.Counter>{unit}</S.Counter>
    </S.Container>
  );
};

export default InputBoxUnit;
