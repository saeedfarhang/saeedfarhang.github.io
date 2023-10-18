import styled from "styled-components";
import Typography from "./Typography";

const Container =
  styled.div <
  any >
  `
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10vw;
  .under-line {
    width: 30px;
    height: 4px;
    background-color: #fff;
  }
`;
type SectionTitleProps = {
  children: any,
};
export default function SectionTitle(props: SectionTitleProps) {
  return (
    <Container {...props}>
      <Typography fontSize="24px" fontWeight="bolder">
        {props.children}
      </Typography>
      <div className="under-line"></div>
    </Container>
  );
}
