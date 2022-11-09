import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iStyledLinkProps {
  type: string;
}

export const LinkTypes = styled(Link)<iStyledLinkProps>`
  ${(props) => {
    switch (props.type) {
      case "styledA":
        return css`
          min-width: 80px;
          padding: 8px;
          display: flex;
          justify-content: center;
          border: 1px solid var(--color-brand);
          border-radius: 4px;
          background-color: var(--color-grey-4);
          color: var(--color-brand);
          font-size: var(--text-size-1);
          font-weight: 400;
          box-shadow: 3px 3px 0px 0px var(--color-brand);
          white-space: nowrap;

          &:hover {
            background-color: var(--color-grey-3);
          }

          &:active {
            background-color: var(--color-grey-3);
            box-shadow: 3px 3px 0px 0px var(--color-grey-5) inset;
          }

          &:active > span {
            transform: translateX(3px) translateY(3px);
          }

          @media (min-width: 768px) {
            min-width: 120px;
          }
        `;
      case "styledB":
        return css`
          color: var(--color-grey-1);
          font-size: var(--text-size-2);
          font-weight: 400;

          &:hover {
            text-decoration: underline;
          }
        `;

      default:
        return false;
    }
  }}
`;
