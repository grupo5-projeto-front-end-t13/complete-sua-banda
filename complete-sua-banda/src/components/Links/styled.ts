import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iStyledLinkProps {
  type: string;
}

export const DivTeste = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 10%;
`;

export const StyledLink = styled(Link)<iStyledLinkProps>`
  ${(props) => {
    switch (props.type) {
      case "button":
        return css`
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          color: var(--color-brand);
          font-size: var(--text-size-1);
          font-weight: 400;
          border: 1px solid var(--color-brand);
          border-radius: 10px;
          padding: 8px 13px;
          min-width: 80px;
          white-space: nowrap;

          &:hover {
            background-color: var(--color-brand);
            color: var(--color-grey-1);
            transition: 800ms;
          }

          @media (min-width: 768px) {
            min-width: 120px;
          }
        `;
      case "string":
        return css`
          color: var(--color-grey-1);
          font-size: var(--text-size-2);
          font-weight: 400;
          width: 90px;

          &:hover {
            text-decoration: underline;
          }
        `;
      default:
        return false;
    }
  }}
`;
