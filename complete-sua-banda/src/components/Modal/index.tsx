import { ReactNode } from "react"
import { useOutsideClick } from "../../hooks/useOutsideClick"
import * as styled from "./style"


interface iModalProps{
    children: ReactNode
    setOpenModal : React.Dispatch<React.SetStateAction<boolean>>
}

export const Modal = ({children, setOpenModal}: iModalProps) => {

    const modalRef = useOutsideClick(()=>{
        setOpenModal(false)
    })

    const closeModal = () => {
        setOpenModal(false)
    }

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
  )
}
