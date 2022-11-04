import { ReactNode } from "react";
import * as styled from "./style";

interface iButtonProps {
  type: string;
  children: ReactNode;
}

export const Button = ({ type, children }: iButtonProps) => {
  return (
    <styled.Button>
      <span>{children}</span>
    </styled.Button>
  );
};
