import * as styled from "./style";

interface iModalRemoveProps {
  image?: string;
  name?: string;
  id?: number;
  remove: Function;
}

export const ModalRemove = ({ image, name, id, remove }: iModalRemoveProps) => {
  return (
    <styled.Container>
      <img src={image} alt="Imagem perfil" />
      <h2>{name}</h2>
      <p>
        Deseja <strong>realmente</strong> excluir sua conta?
      </p>
      <button type="button" onClick={() => remove(id)}>
        Confirmar
      </button>
    </styled.Container>
  );
};
