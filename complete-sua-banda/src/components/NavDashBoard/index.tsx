import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import * as styled from "./style";
import logo from "../../assets/Logo-CSB.png";

export const NavDashBoard = () => {
  return (
    <>
      <styled.Nav>
        <styled.Container1>
          <styled.ImgProfile>
            <img src={logo} alt={"a"} />
          </styled.ImgProfile>
          <styled.Icons>
            <styled.Icon1 />
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

      <styled.NavFooter>
        <styled.Icon1 />
        <img src={logo} alt="Logo CSB" />
        <styled.Icon2 />
      </styled.NavFooter>
    </>
  );
};
