import { BsHouseDoor } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import styled from "styled-components";

export const Nav = styled.nav`
  /* z-index: 101; */
  background-color: var(--color-grey-4);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  /* position: fixed; */

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const Container1 = styled.div`
  display: flex;
  width: 100%;
  max-width: 610px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ImgProfile = styled.div`
  width: 72px;
  img {
    cursor: pointer;
    width: 50px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    img {
      width: 60px;
    }
  }
`;

export const Icons = styled.div`
  display: none;
  color: var(--color-brand);
  font-size: 40px;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const InputSearch = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ImgLogo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    width: 50%;
    img {
      width: 70px;
    }
  }
`;

export const NavFooter = styled.nav`
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  bottom: 0px;
  position: fixed;
  background-color: var(--color-grey-4);
  color: var(--color-brand);

  img {
    width: 100px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Icon1 = styled(BsHouseDoor)`
  color: var(--color-brand);
  font-size: 35px;
  cursor: pointer;
`;

export const Icon2 = styled(FiBell)`
  color: var(--color-brand);
  font-size: 35px;
  cursor: pointer;
`;

export const Button = styled.button`
  background: transparent;
  color: var(--color-brand);
  border: none;
  
 
`