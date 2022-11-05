import Logo from "../../assets/Logo-CSB.png";

interface iModalProps{
  imagePerfil: string | undefined;
  name: string | undefined;
}

export const ModalCard = ({imagePerfil, name}: iModalProps) => { 
  return (
    <div>
        <div>
          <h1>{name}</h1>
          <img src={imagePerfil} alt="imagem Perfil" />
          <img src={Logo} alt="imagem Logo" />
        </div>
        <div>

        </div>
    </div>  
  )
}
