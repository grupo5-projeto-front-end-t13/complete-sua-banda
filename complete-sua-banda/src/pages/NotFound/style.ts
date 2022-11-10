import styled from "styled-components";
import { keyframes } from "styled-components";

const Rotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background-color: var(--color-grey-4);

  & img {
    width: 100%;
    max-width: 400px;
  }

  & p {
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--color-grey-1);
    font-size: var(--title-size-2);
  }

  & p svg {
    font-size: 28px;
    animation: ${Rotation} 6s infinite linear;
  }
`;
