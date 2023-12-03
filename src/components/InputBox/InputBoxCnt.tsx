import { S } from "./style";

interface Props {
  value?: string;
  label?: string;
  count?: number;
  onChange: (value: string) => void;
  width?: string | number;
}

const InputBoxCnt: React.FC<Props> = ({ label, value, count, onChange, width }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <S.Counter>{value?.length}/{count}</S.Counter>
    </S.Container>
  );
};

export default InputBoxCnt;
