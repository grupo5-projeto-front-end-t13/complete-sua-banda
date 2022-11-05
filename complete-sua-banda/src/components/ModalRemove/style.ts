import styled from "styled-components";

export const Container = styled.div`
  background-color: #4c4948;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 36px;
  gap: 20px;

  img {
    width: 56px;
    height: 57px;
    border-radius: 50%;
  }

  h2{
    font-weight: 700;
    font-size: var(--title-size-2);
    line-height: 24px;
    text-align: center;
    color: var(--color-grey-1);
  }
  p {
    font-weight: 500;
    font-size: var(--text-size-1);
    line-height: 24px;
    text-align: center;
    color: var(--color-grey-1);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 8px;
    background: var(--color-brand);
    box-shadow: 3px 3px 0px 0px var(--color-brand-opacity);
    width: 240px;
    height: 30px;
    font-size: var(--text-size-1);
    cursor: pointer;

    &:active {
      background: var(--color-brand-active);
      box-shadow: 3px 3px 0px 0px var(--color-grey-4) inset;
    }
  }
`;
