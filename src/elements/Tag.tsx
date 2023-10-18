import styled from "styled-components";
import Typography from "./Typography";
const Container = styled.div`
  min-width: 100px;
  width: fit-content;
  height: 30px;
  background-color: #242424;
  box-shadow: 0 3px 10px #00000016;
  padding: 8px 16px;
  margin: 10px 7.5px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TagProps = {
  children: any;
};
export default function Tag(props: TagProps) {
  return (
    <Container>
      <Typography
        width="max-content"
        as="h6"
        fontSize="14px"
        fontWeight="bolder"
      >
        {props.children}
      </Typography>
    </Container>
  );
}
