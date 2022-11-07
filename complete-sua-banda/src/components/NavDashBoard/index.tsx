import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import * as styled from "./style";
import logo from "../../assets/Logo-CSB.png";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";


interface iNavDashBoard{
  children: ReactNode;
  image?: string;
}



export const NavDashBoard = ({children, image}:iNavDashBoard) => {
  
  const navigate = useNavigate()
  const home = () =>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <styled.Nav>
        <styled.Container1>
          <styled.ImgProfile>
            <img src={image} alt={"Imagem perfil"} />
          </styled.ImgProfile>
          <styled.Icons>
            <styled.Icon1 onClick={home}/>
            <styled.Icon2 />
          </styled.Icons>
          <styled.InputSearch>
            <Input
              name="Pesquisa"
              type="text"
              icon={<CiSearch />}
              title="Pesquisar"
              register={() => {}}
            />
          </styled.InputSearch>
        </styled.Container1>
        <styled.ImgLogo>
          <img src={logo} alt="Logo CSB" />
        </styled.ImgLogo>
      </styled.Nav>
      {children}
      <styled.NavFooter>
        <styled.Icon1 onClick={home}/>
        <img src={logo} alt="Logo CSB" />
        <styled.Icon2 />
      </styled.NavFooter>
    </>
  );
};
