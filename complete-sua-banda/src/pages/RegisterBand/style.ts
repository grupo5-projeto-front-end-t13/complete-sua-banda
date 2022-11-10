import styled from "styled-components";
import Band from "../../assets/Band.jpg";

export const DivContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background-image: linear-gradient(black, black), url(${Band});
  background-size: cover;
  background-blend-mode: saturation;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  .divForm {
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
`;
