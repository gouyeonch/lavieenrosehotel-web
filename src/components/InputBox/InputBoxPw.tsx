import { S } from "./style";

interface Props {
  value?: string;
  label?: string;
  onChange: (value: string) => void;
  width?: string | number;
}

const InputBoxPw: React.FC<Props> = ({ label, value, onChange, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.TextareaPw
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </S.Container>
  );
};

export default InputBoxPw;
