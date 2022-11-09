import styled from "styled-components";

// resize:none

export const TextAreaDiv = styled.div`
  width: 240px;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 240px;

  & > textarea {
    resize: none;
    overflow: hidden;
    padding: 6px;
    min-width: 80%;
    border-radius: 4px;
    border: 1px solid var(--color-brand);
    background-color: var(--color-grey-4);
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
    top: 7px;
    left: 12px;
    cursor: text;
    font-size: var(--text-size-1);
    transition: 0.4s;
  }

  & > textarea:is(:valid, :focus) {
    color: var(--color-grey-1);
    border: 1px solid var(--color-brand);
    outline: none;
    transition: 0.4s;
  }

  & > textarea:valid ~ label,
  textarea:focus ~ label {
    color: var(--color-brand);
    font-size: var(--text-size-2);
    transform: translateX(15px) translateY(-20px);
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
