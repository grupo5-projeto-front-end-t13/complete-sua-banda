import { ReactNode } from "react";
import * as styled from "./style";

interface iButtonProps {
  type: string;
  disabled?: boolean;
  children: ReactNode;
  remove?: Function;
  id?: number;
  closeModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button = ({
  children,
  disabled,
  remove,
  id,
  closeModal,
}: iButtonProps) => {
  return (
    <>
      {remove && closeModal ? (
        <styled.Button
          disabled={disabled}
          onClick={() => {
            remove(id);
            closeModal(false);
          }}
        >
          <span>{children}</span>
        </styled.Button>
      ) : (
        <styled.Button disabled={disabled}>
          <span>{children}</span>
        </styled.Button>
      )}
    </>
  );
};
