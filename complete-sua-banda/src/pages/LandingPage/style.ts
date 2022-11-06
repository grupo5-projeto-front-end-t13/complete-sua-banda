import styled from "styled-components";
import { keyframes } from "styled-components";
import img from "../../assets/background.jpg";

export const HeaderLandingPage = styled.header`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: var(--color-grey-4);
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid var(--color-brand);
`;

export const DivLogo1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  img {
    width: 80px;
  }

  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    h1 {
      display: inline;
      color: var(--color-brand);
      font-size: var(--title-size-2);
      font-weight: 600;
    }
  }
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: auto;
  gap: 0.8rem;

  @media (min-width: 768px) {
    gap: 1.2rem;
  }
`;

export const Bcg = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  top: 80px;
  filter: blur(2px) grayscale(80%);

  @media (min-width: 1136px) {
    background-size: 100% 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  z-index: 99;
  background-color: var(--color-grey-4);
  position: absolute;
  left: 50%;
  top: 22rem;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 875px;
  height: 281px;
  padding: 25px 10px;
  border-radius: 8px;
  box-shadow: 5px 4px 0px var(--color-brand);

  @media (min-width: 768px) {
    padding: 25px;
    min-width: 420px;
    max-width: 875px;
  }
`;

export const DivLogo2 = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;

    img {
      width: 225px;
    }
  }
`;

export const DivText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 266px;
  gap: 1.5rem;
  line-height: 18px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 10px;

  h2 {
    color: var(--color-brand);
    font-size: var(--title-size-2);
    font-weight: 600;
  }

  p {
    color: var(--color-grey-1);
    font-size: var(--text-size-1);
    font-weight: 500;
  }

  span {
    color: var(--color-grey-1);
    font-size: var(--text-size-2);
    font-weight: 500;
  }

  @media (min-width: 768px) {
    max-width: 400px;
    border: 1px solid var(--color-brand);
    padding: 0px 10px;
    margin-right: 30px;
    height: 226px;
  }
`;

const scrollDownAtention = keyframes`
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(10px);
  }
`;

export const ScrollDown1 = styled.div`
  position: absolute;
  top: 35rem;
  left: 50%;
  font-size: 26px;
  margin: 0 auto;
  color: var(--color-brand);
  animation: ${scrollDownAtention} 1s infinite;

  @media (min-width: 768px) {
    font-size: 30px;
    top: 38rem;
  }
`;

export const ScrollDown2 = styled.div`
  position: absolute;
  top: 65rem;
  left: 50%;
  font-size: 26px;
  margin: 0 auto;
  color: var(--color-brand);
  animation: ${scrollDownAtention} 1s infinite;

  @media (min-width: 768px) {
    font-size: 30px;
    top: 68rem;
  }
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  z-index: 99;
  background-color: var(--color-grey-4);
  position: absolute;
  left: 50%;
  top: 51rem;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 875px;
  padding: 25px 20px;
  border-radius: 6px;
  box-shadow: 4px 4px 0px var(--color-brand);

  img {
    display: none;
  }

  @media (min-width: 768px) {
    top: 51rem;
    flex-direction: row;
    gap: unset;

    img {
      display: inline-block;
      width: 225px;
    }
  }
`;

export const DivList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h3 {
    text-align: center;
    color: var(--color-brand);
    font-size: var(--title-size-2);
    font-weight: 600;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 248px;
  gap: 1rem;

  li {
    display: flex;
    gap: 12px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-brand);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    color: var(--color-grey-1);
  }

  p {
    color: var(--color-grey-1);
    font-size: var(--text-size-1);
    font-weight: 500;
    align-self: center;
    width: 80%;
    line-height: 16px;
  }

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 65%;
    gap: 10px;

    p {
      height: 48px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 99;
  background-color: var(--color-grey-4);
  position: absolute;
  left: 50%;
  top: 85rem;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 25px 20px;
  gap: 2rem;
  border-top: 1px solid var(--color-brand);

  h3 {
    text-align: center;
    color: var(--color-brand);
    font-size: var(--title-size-2);
    font-weight: 600;
  }

  img {
    width: 180px;
  }

  @media (min-width: 768px) {
    top: 85rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const DivDevs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    width: 516px;
  }
`;

export const UlFooter = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  li {
    display: flex;
    gap: 12px;
    width: 250px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span {
    color: var(--color-grey-1);
    font-size: var(--text-size-1);
    align-self: center;
  }

  a {
    color: var(--color-brand);
    font-size: var(--text-size-2);
    align-self: center;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 300px;
  }
`;
