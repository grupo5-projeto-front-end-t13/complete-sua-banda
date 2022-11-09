import styled from "styled-components";

// resize:none

export const TextAreaDiv = styled.div`
  margin-top: 15px;
  width: 235px;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 240px;

  & > textarea {
    resize: none;
    overflow: hidden;
    padding: 6px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--color-brand);
    background-color: var(--color-grey-4);
    color: var(--color-grey-1);
    outline: none;
    font-size: var(--text-size-1);
    transition: 0.4s;

    @media (min-width: 768px) {
      padding: 2px;
    }
  }

  & > label {
    color: var(--color-brand);
    position: absolute;
    top: -14px;
    left: 13px;
    cursor: text;
    font-size: var(--text-size-1);
    transition: 0.4s;
  }

  & > svg {
    position: absolute;
    top: 6px;
    left: 15px;
    fill: var(--color-brand);
    font-size: 18px;
  }
`;
