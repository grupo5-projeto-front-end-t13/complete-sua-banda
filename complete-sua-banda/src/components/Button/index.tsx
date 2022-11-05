import { ReactNode } from "react";
import * as styled from "./style";

interface iButtonProps {
  type: string;
  children: ReactNode;
}

export const Button = ({ children, ...rest }: iButtonProps) => {
  return (
    <styled.Button>
      <span>{children}</span>
    </styled.Button>
  );
};
