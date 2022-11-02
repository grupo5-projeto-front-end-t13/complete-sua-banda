import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  position: relative;

  & > input {
    padding: 9px;
    width: 80%;
    border-radius: 4px;
    border: 1px solid var(--color-grey-1);
    background-color: var(--color-grey-4);
    outline: none;
    transition: 0.4s;
  }

  & > label {
    color: var(--color-brand);
    position: absolute;
    top: 9px;
    left: 9px;
    cursor: text;
    transition: 0.4s;
  }

  & > input:is(:valid, :focus) {
    color: var(--color-grey-1);
    border: 1px solid var(--color-brand);
    outline: none;
    transition: 0.4s;
  }

  & > input:valid ~ label,
  input:focus ~ label {
    padding: 0 4px;
    color: var(--color-brand);
    background-color: var(--color-grey-4);
    text-align: center;
    transform: translateX(-6px) translateY(-23px);
    transition: 0.4s;
  }
`;
