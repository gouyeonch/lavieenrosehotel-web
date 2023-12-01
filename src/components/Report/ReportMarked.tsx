import { S } from "./style";

// Props 인터페이스에 children 추가
interface Props {
  children?: React.ReactNode;
}

const ReportMarked: React.FC<Props> = ({ children }) => {
  return (
    <>
      <S.MarkedContainer>
          <S.ReportIcon />
          <S.Text>{children}</S.Text>
      </S.MarkedContainer>
    </>
  );
};

export default ReportMarked;
