import styled from "styled-components";

export const Container = styled.div`
  background: var(--color-grey-4);
  color: var(--color-brand);
  border: 1px solid var(--color-brand);
  border-radius: 4px;
  padding: 8px 7px;
  width: 240px;
  height: 30px;
  display: flex;
  align-items: center;

  select {
    margin-left: 10px;
    border: none;
    color: var(--color-brand);
    font-weight: 400;
    font-size: var(--text-size-1);
    line-height: 15px;
    background-color: var(--color-grey-4);
    min-width: 200px
  }
`;
