import styled from "styled-components";

export const ContainerUl = styled.ul`
  background-color: #4c4948;
  overflow: auto;
  height: 100vh;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px 96px;

    max-width: 912px;
    height: 100%;

    margin: 40px auto;

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
