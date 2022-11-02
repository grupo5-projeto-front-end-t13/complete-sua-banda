import styled from "styled-components"

export const ModalPadrao = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .overlay {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
  }
  .content {
    background: #212529;
    width: 369px;
    height: 342px;
    padding: 0px 0;
    position: relative;
    
    @media (max-width: 400px) {
    width: 300px;
  }

  }
  .btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 12px;
  }
  
`;