import Logo from "../../assets/Logo-CSB.png";
import * as styled from "./style";
import { AiOutlineFileText } from "react-icons/ai";

interface iModalProps {
  imageProfile: string | undefined;
  name: string | undefined;
  email: string | undefined;
  bio: string | undefined;
  invite: () => void;
  type: "musico" | "banda" | undefined;
}

export const ModalCard = ({
  imageProfile,
  name,
  email,
  bio,
  type,
  invite,
}: iModalProps) => {
  return (
    <styled.Container>
      <styled.DivImg>
        <img src={imageProfile} alt="Imagem Perfil" />
      </styled.DivImg>
      <styled.DivInfo>
        <h2>{name}</h2>
        <h3>Bio</h3>
        {bio ? (
          <p>{bio}</p>
        ) : (
          <p>
            <AiOutlineFileText />
            Ainda não possui bio!
          </p>
        )}
        <h3>Contato</h3>
        <p>{email}</p>
      </styled.DivInfo>
      <div className="divBtn">
        <button type="button" onClick={() => invite()}>
          {type === "musico" ? "Convidar músico" : "Partipar da Banda"}
        </button>
      </div>
      <img className="logo" src={Logo} alt="Imagem Logo" />
    </styled.Container>
  );
};
