import styled from "styled-components";

export const ContainerUlMusician = styled.ul`
  background-color: var(--color-grey-3);
  min-height: 100vh;
  height: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 5rem;

    width: 100vw;
    max-width: 912px;
    height: 100%;

    margin: 0 auto;
    padding: 5.5rem 0 5rem 0;

    @media (min-width: 768px) {
      justify-content: initial;
      padding: 6rem 0 1.5rem 0;
      gap: 2rem 5rem;
    }

    .noResults {
      height: 20%;
      display: flex;
      justify-content: center;

      img {
        width: 30%;
        height: 80%;
      }

      p {
        height: 25%;
        align-self: center;
        font-size: var(--title-size-2);
        color: var(--color-grey-4);
      }
    }
  }
`;
