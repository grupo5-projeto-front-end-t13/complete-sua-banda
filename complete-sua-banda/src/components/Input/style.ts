import styled from "styled-components";

export const InputDiv = styled.div`
  width: 240px;
  max-width: 240px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2px;

  & > input {
    padding: 7px 0 6px 30px;
    width: 85%;
    border-radius: 4px;
    border: 1px solid var(--color-brand);
    background-color: var(--color-grey-4);
    color: var(--color-grey-1);
    outline: none;
    font-size: var(--text-size-1);
  }

  & > input::placeholder {
    color: var(--color-grey-3);
  }

  & > label {
    padding-left: 14px;
    align-self: flex-start;
    color: var(--color-brand);
    font-size: var(--text-size-1);
  }

  & > svg {
    position: absolute;
    bottom: 5px;
    left: 8px;
    fill: var(--color-brand);
    font-size: 18px;
  }
`;
