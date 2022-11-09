import styled from "styled-components";

export const ModalDefault = styled.div`
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
    display: flex;
    justify-content: center;
    padding: 0px 0;
    position: relative;
  }
  .btn {
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: var(--color-brand);
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: 1;

    /* @media (min-width: 768px) {
      display:none;
    } */
  }
`;
