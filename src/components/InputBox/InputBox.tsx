import { S } from "./style";

interface Props {
  value: string;
  label: string;
  onChange: (value: string) => void;
  width: string | number;
}

const InputBox: React.FC<Props> = ({ label, value, onChange, width }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={20}
      />
    </S.Container>
  );
};

export default InputBox;
