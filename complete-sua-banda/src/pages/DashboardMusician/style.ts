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
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30%;
        height: 131px;
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

export const DivNotifications = styled.div`
  width: 316px ;
  min-height: 80px;
  max-height: 500px;
  
  background-color: var(--color-grey-4);

  display: flex;
  flex-direction: column;

  overflow: auto;

  position: fixed;
  top: 97px;
  right: 72px;

  @media(width < 768px){
    bottom: 74px;
    right: 2px;
    top: unset;
  }
`
export const CardNotifications = styled.li`
    min-height: 80px;

    display: flex;
    gap: 16px;

    box-sizing: border-box;

    color: white;

    border-bottom: 1px solid var(--color-brand-opacity);
    

    figure{
      margin: 0;
      display: flex;
      align-items: center;
      padding-left: 16px;
    }

    figure > img{
      width: 53px;
      height: 53px;
      border-radius: 50%;
    }

    div{
      display: flex;
      align-content: center;
      justify-content: space-between;
      width: 100%;
    }

    div > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button{
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
    }

    svg{
      height: 30px;
      width: 30px;
      padding-right: 15px;
    }

    section{
      margin: 0;
      padding: 23px;
      display: flex;
    }
`
