import styled from "styled-components";

export const LoadingComponent = styled.div`
  padding: 2rem;
  color: var(--grey-0);
  clip-path: inset(0 3ch 0 0);
  animation: showLoading 3s infinite;

  @keyframes showLoading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
