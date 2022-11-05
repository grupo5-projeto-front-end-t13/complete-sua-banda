import styled from "styled-components";

export const Container = styled.div`
  background: #4c4948;
  border-radius: 4px;
  padding: 16px 19px;
  width: 80%;
  max-width: 600px;

  .divBtn {
    margin-top: 35px;
    display: flex;
    justify-content: center;

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
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 63px;
    height: 63px;

    border-radius: 50%;
  }
`;

export const DivInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #fff5f1;
  }
  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #fff5f1;
  }
`;
