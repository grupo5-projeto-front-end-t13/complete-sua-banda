import { ReactNode } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import * as styled from "./style";
import {AiOutlineCloseCircle} from 'react-icons/ai'

interface iModalProps {
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalRemove: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalUpdateM: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  children,
  setOpenModal,
  setOpenModalRemove,
  setOpenModalUpdateM
}: iModalProps) => {
  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
    setOpenModalRemove(false);
    setOpenModalUpdateM(false);

  });

  const closeModal = () => {
    setOpenModal(false);
    setOpenModalRemove(false);
    setOpenModalUpdateM(false);

  };

  return (
    <styled.ModalDefault>
      <div className="overlay">
        <div className="content" ref={modalRef}>
          <button className="btn" onClick={closeModal}><AiOutlineCloseCircle size={20}/></button> 
          {children}
        </div>
      </div>
    </styled.ModalDefault>
  );
};
