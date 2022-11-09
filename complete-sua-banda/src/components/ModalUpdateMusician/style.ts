import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 278px;
  max-height: 350px;
  border-radius: 4px;
  background: var(--color-grey-5);
  overflow-y: scroll;
  padding: 20px;
  width: 280px;
  max-width: 600px;

  @media (min-width: 600px) {
    width: 380px;
  }

  @media (min-width: 768px) {
    margin-top: 0px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-brand);
      border-radius: 4px;
    }

    .divLink {
      display: none;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  h1 {
    font-weight: 700;
    font-size: var(--title-size-2);
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
    width: 236px;
    height: 30px;
    cursor: pointer;
    padding: 20px;
  }
`;
