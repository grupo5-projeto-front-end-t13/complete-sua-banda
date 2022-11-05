import * as styled from "./style";

interface iModalRemoveProps {
  image?: string;
  name?: string;
  id?: number;
  remove: Function;
}

export const ModalRemove = ({ image, name, id, remove}: iModalRemoveProps) => {
  return (
    <styled.Container>
      <img src="https://wallpapercave.com/wp/wp3275272.jpg" alt="imagem perfil" />
      <h2>{name}</h2>
      <p>Deseja realmente excluir sua conta</p>
      <button type="button" onClick={()=>remove(id)}>
        Confirmar
      </button>
    </styled.Container>
  );
};
