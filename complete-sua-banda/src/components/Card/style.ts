import styled from "styled-components";

export const Card = styled.li`
  height: 146px;
  width: 240px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: var(--color-grey-4);
  color: var(--color-grey-1);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: rgba(25, 24, 24, 0.7);
    transition: 0.5s;
  }

  & button {
    background: transparent;
    border: none;
  }

  & figure {
    margin: 0;
    height: 100%;
    width: 67px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  & .cardDescription {
    padding-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & h2 {
    font-size: var(--title-size-2);
  }

  & p,
  span {
    font-size: var(--text-size-1);
  }

  & span {
    color: var(--color-brand);
  }

  & .cardDescription p > span {
    color: var(--color-grey-1);
    text-decoration: underline;
  }

  & svg {
    color: white;
    width: 32px;
    height: 32px;
  }

  & img {
    width: 63px;
    height: 63px;

    border-radius: 50%;
  }
`;
