import styled from "styled-components";

export const Menu = styled.div`
  position: relative;

  & button {
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: transparent;
    color: var(--color-grey-1);
    cursor: pointer;
  }
`;

export const Photo = styled.button`
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  & > img {
    height: 54px;
    width: 54px;
    border-radius: 50%;
    border: 1px solid var(--color-brand);
  }
`;

export const Content = styled.div`
  padding: 10px;
  height: 130px;
  width: 250px;
  position: absolute;
  top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  background-color: var(--color-grey-4);

  @media (min-width: 768px) {
    right: 0;
    top: 80px;
  }
`;

export const Group1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Division = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--color-grey-3);
`;

export const Group2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
