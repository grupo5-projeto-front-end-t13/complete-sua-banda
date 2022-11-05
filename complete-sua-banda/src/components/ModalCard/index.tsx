import Logo from "../../assets/Logo-CSB.png";
import * as styled from "./style"

interface iModalProps{
  imagePerfil: string | undefined;
  name: string | undefined;
  email: string | undefined;
  bio: string | undefined;
  invite: ()=> void;
}

export const ModalCard = ({imagePerfil, name, email, bio, invite}: iModalProps) => { 
  return (
    <styled.Container>
        <styled.DivImg>
          <img src="https://wallpapercave.com/wp/wp3275272.jpg" alt="imagem Perfil" />
          <img src={Logo} alt="imagem Logo" />
        </styled.DivImg>
        <styled.DivInfo>
          <h2>Name: {name}</h2>
          <h2>Bio</h2>
          {bio? <p>{bio}</p> : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eaque quia quasi voluptas reprehenderit, cumque autem sed veritatis similique eligendi corporis enim doloribus accusantium nobis perferendis? Expedita quasi optio odio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non laudantium nostrum id deleniti perspiciatis impedit dolor minima sint incidunt magni fugiat, quae aliquam odit distinctio, ratione saepe! Inventore, incidunt expedita.</p>}
          <h2>Contato</h2>
          <p>{email}</p>
        </styled.DivInfo>
        <div className="divBtn">
          <button type='button' onClick={()=>invite()}>Convidar músico</button>
        </div>
    </styled.Container>  
  )
}
