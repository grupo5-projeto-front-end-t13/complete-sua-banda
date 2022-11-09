import styled from "styled-components";

export const ContainerUlMusician = styled.ul`
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

export const DivNotifications = styled.div`
  width: 320px ;
  min-height: 80px;
  max-height: 500px;
  
  background-color: var(--color-grey-4);

  display: flex;
  flex-direction: column;

  overflow: auto;

  position: absolute;
  top: 97px;
  right: 72px;

  @media(width < 768px){
    bottom: 106px;
    right: 26px;
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
