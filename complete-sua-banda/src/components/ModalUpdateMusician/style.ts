import styled from "styled-components";

export const DivContainer = styled.div`
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
    max-width: 278px;

    @media (min-width: 768px) {
      margin-top: 0px;
      .divLink {
        display: none;
      }
    }

    h1 {
      font-weight: 700;
      font-size: var(--title-size-1);
      color: var(--color-brand);
      line-height: 29px;
    }

    p {
      font-weight: 400;
      font-size: var(--text-size-2);
      line-height: 12px;
      text-align: center;
      color: var(--color-brand);
    }

    button {
      color: var(--color-grey-1);
      background: var(--color-brand);
      border: none;
      border-radius: 4px;
      width: 230px;
      height: 30px;
      cursor: pointer;
    }
`