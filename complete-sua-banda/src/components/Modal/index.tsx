import { ReactNode } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import * as styled from "./style";

interface iModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalRemove: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  children,
  setOpenModal,
  setOpenModalRemove,
}: iModalProps) => {
  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
    setOpenModalRemove(false);
  });

  const closeModal = () => {
    setOpenModal(false);
    setOpenModalRemove(false);
  };

  return (
    <styled.ModalDefault>
      <div className="overlay">
        <div className="content" ref={modalRef}>
          <button className="btn" onClick={closeModal}>
            X
          </button>
          {children}
        </div>
      </div>
    </styled.ModalDefault>
  );
};
