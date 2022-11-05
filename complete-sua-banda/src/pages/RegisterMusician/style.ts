import styled from "styled-components";
import Musician from "../../assets/Musician.jpg";

export const DivMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0)),
    url(${Musician});
  background-size: cover;
  background-blend-mode: saturation;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .divLogo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 768px) {
      height: 100%;
    }
  }

  .divLink {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    display: none;
    @media (min-width: 768px) {
      display: inline-flex;
      width: 300px;
      height: 300px;
    }
  }

  .divFormMusic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      padding-top: 0;
      height: 100%;
    }
  }

  h1 {
    color: var(--color-brand);
    font-size: var(--title-size-1);
    font-weight: 700;
    margin-bottom: 38px;
  }
  p {
    color: var(--color-brand);
    font-size: var(--text-size-2);
  }
  button {
    color: var(--color-grey-1);
    background: var(--color-brand);
    border: none;
    border-radius: 4px;
    width: 240px;
    height: 30px;
  }
`;
