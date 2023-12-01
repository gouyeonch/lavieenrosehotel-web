import { S } from "./style";

interface Props {
  value: string;
  label: string;
  count: number;
  onChange: (value: string) => void;
  width: string | number;
}

const InputBoxCnt: React.FC<Props> = ({ label, value, count, onChange, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={20}
      />
      <S.Counter>{value.length}/{count}</S.Counter>
    </S.Container>
  );
};

export default InputBoxCnt;
