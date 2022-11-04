import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 240px;

  & > input {  
    padding: 7px 0 6px 30px;
    width: 80%;
    border-radius: 4px;
    border: 1px solid var(--color-brand);
    background-color: var(--color-grey-4);
    outline: none;
    font-size: var(--text-size-1);
    transition: 0.4s;
  }

  & > label {
    color: var(--color-brand);
    position: absolute;
    top: 10px;
    left: 48px;
    cursor: text;
    font-size: var(--text-size-1);
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
    color: var(--color-brand);
    font-size: var(--text-size-2);
    transform: translateX(-22px) translateY(-22px);
    transition: 0.4s;
  }

  & > svg {
    position: absolute;
    top: 6px;
    left: 15px;
    fill: var(--color-brand);
    font-size: 18px;
  }
`;
