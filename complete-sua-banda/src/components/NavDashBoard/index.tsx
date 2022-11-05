import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import * as styled from "./style";
import img from "../../assets/matheus.jpg";
import logo from "../../assets/Logo-CSB.png";

export const NavDashBoard = () => {
  return (
    <>
      <styled.Nav>
        <styled.Container1>
          <styled.ImgPerfil>
            <img src={img} alt="Perfil" />
          </styled.ImgPerfil>
          <styled.Icons>
            <styled.Icone1 />
            <styled.Icone2 />
          </styled.Icons>
          <styled.InputPesquisa>
            <Input
              name="Pesquisa"
              type="text"
              icon={<CiSearch />}
              title="Pesquisar"
              register={() => {}}
            />
          </styled.InputPesquisa>
        </styled.Container1>
        <styled.ImgLogo>
          <img src={logo} alt="logo" />
        </styled.ImgLogo>
      </styled.Nav>

      <styled.NavFooter>
        <styled.Icone1 />
        <img src={logo} alt="Imagem logo" />
        <styled.Icone2 />
      </styled.NavFooter>
    </>
  );
};
