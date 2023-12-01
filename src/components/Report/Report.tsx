import { S } from "./style";

// Props 인터페이스에 children 추가
interface Props {
  children?: React.ReactNode;
}

const Report: React.FC<Props> = ({ children }) => {
  return (
    <>
      <S.Container>
        <S.ReportIcon />
        <S.Text>{children}</S.Text>
      </S.Container>
    </>
  );
};

export default Report;
