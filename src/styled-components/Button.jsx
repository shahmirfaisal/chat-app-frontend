import styled, { css } from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  background-color: #179cef;
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;

  ${(props) =>
    props.block
      ? css`
          width: 100%;
        `
      : null}

  :hover {
    background-color: #179cef;
  }
`;
