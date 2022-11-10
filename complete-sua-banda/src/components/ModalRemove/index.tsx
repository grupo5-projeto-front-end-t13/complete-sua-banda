import * as styled from "./style";
import { Button } from "../Button";

interface iModalRemoveProps {
  image?: string;
  name?: string;
  id?: number;
  remove: Function;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemove = ({
  image,
  name,
  id,
  remove,
  setModal,
}: iModalRemoveProps) => {
  return (
    <styled.Container>
      <img src={image} alt="Imagem perfil" />
      <h2>{name}</h2>
      <p>
        Deseja <strong>realmente</strong> excluir sua conta?
      </p>
      <Button type="button" remove={remove} id={id} closeModal={setModal}>
        Confirmar
      </Button>
    </styled.Container>
  );
};
