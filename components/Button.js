import React from "react";
import styled from "styled-components"

export default function Button(props) {
  const { children } = props;
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  margin-top: 2em;
  border: none;
  background: var(--primary);
  color: white;
  font-family: inherit;
  font-size: 1.2em;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: background 150ms ease;
  transition: transform 150ms ease-in;

  &:hover {
    background: var(--primary-hover);
    transform: translateY(-1px);
  }
`;
