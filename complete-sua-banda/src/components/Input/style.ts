import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  position: relative;

  & > input {
    padding: 7px 0 6px 30px;
    width: 80%;
    border-radius: 4px;
    border: 1px solid var(--color-brand);
    background-color: var(--color-grey-4);
    outline: none;
    transition: 0.4s;
  }

  & > label {
    color: var(--color-brand);
    position: absolute;
    top: 10px;
    left: 28px;
    cursor: text;
    font-size: 12px;
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
    background-color: transparent;
    text-align: center;
    transform: translateX(-6px) translateY(-26px);
    transition: 0.4s;
  }

  & > svg {
    position: absolute;
    top: 6px;
    left: 5px;
    fill: var(--color-brand);
    font-size: 18px;
  }
`;
