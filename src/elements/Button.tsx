import React from "react";
import styled, { StyledComponent } from "styled-components";
import Icon from "./Icon";
import Typography from "./Typography";

interface ButtonProps {
  variant?: "fill" | "transparent";
  margin?: string;
  fontWeight?: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

const Container: StyledComponent<
  "button",
  any,
  ButtonProps
> = styled.button<any>`
  min-width: 100px;
  width: fit-content;
  height: 35px;
  border: solid 2px #fff;
  background-color: ${(props) =>
    props.variant === "fill" ? "#fff" : "transparent"};
  color: ${(props) => (props.variant === "fill" ? "#242424" : "#fff")};
  border-radius: 25px;
  padding: 9px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  transition: all 0.2s ease;
  :hover {
    background-color: ${(props) =>
      props.variant === "fill" ? "#fff" : "#ffffff70"};
    color: ${(props) => (props.variant === "fill" ? "#242424" : "#fff")};
  }
  .btn-icon {
    margin-left: 10px;
  }
`;

export default function Button(props: ButtonProps) {
  return (
    <Container {...props}>
      <Typography
        as="h6"
        fontSize="16px"
        fontWeight={props.fontWeight ? props.fontWeight : "normal"}
      >
        {props.children}
      </Typography>
      {props.icon && (
        <div className="btn-icon">
          <Icon icon={props.icon} />
        </div>
      )}
    </Container>
  );
}
