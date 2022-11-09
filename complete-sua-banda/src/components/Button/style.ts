import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);
  border-radius: 4px;
  background-color: var(--color-brand);
  box-shadow: 3px 3px 0px 0px var(--color-brand-opacity);
  width: 240px;
  height: 30px;
  font-size: var(--text-size-1);
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand-active);
  }

  &:is(:active, :disabled) {
    background-color: var(--color-brand-active);
    box-shadow: 3px 3px 0px 0px var(--color-grey-5) inset;
  }

  &:is(:active, :disabled) > span {
    transform: translateX(3px) translateY(3px);
  }
`;
