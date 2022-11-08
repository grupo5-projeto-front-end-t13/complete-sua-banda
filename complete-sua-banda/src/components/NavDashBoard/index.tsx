import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import * as styled from "./style";
import logo from "../../assets/Logo-CSB.png";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iRegisterBand } from "../../services/RegisterBand";
import { iRegisterMusician } from "../../services/RegisterMusician";
import { iBandsInvites, iMemberInvites, useGlobalContext } from "../../context/GlobalContext";
import { FiBell } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";

interface iNavDashBoard {
  children: ReactNode;
  image?: string;
  bands?: iRegisterBand[];
  musicians?: iRegisterMusician[];
  inviteBands?: iBandsInvites[];
  inviteMembers?: iMemberInvites[];
}

export const NavDashBoard = ({
  children,
  image,
  bands,
  musicians,
  inviteBands,
  inviteMembers
}: iNavDashBoard) => {
  const { user, setFilteredMusicians, setFilteredBands } = useGlobalContext();
  const [searchInput, setSearchInput] = useState("");
  const [bellAlert, setBellAlert] = useState(false)

  const navigate = useNavigate();
  const home = () => {
    localStorage.clear();
    navigate("/");
  };

  const searchOptions = () => {
    if (user?.type === "musico") {
      const searched = bands?.filter(
        (band) =>
          band.name.toLowerCase().includes(searchInput) ||
          band.genre?.toLowerCase().includes(searchInput)
      );

      setFilteredBands(searched);
    } else {
      const searched = musicians?.filter(
        (musician) =>
          musician.name.toLowerCase().includes(searchInput) ||
          musician.skill.toLowerCase().includes(searchInput)
      );
      setFilteredMusicians(searched);
    }
  };

  useEffect(()=>{
    const alertBell = () =>{
      if(inviteBands?.length || inviteMembers?.length){
        setBellAlert(true)
      }
    }

    alertBell()
  }, [])
  
  return (
    <>
      <styled.Nav>
        <styled.Container1>
          <styled.ImgProfile>
            <img src={image} alt={"Imagem perfil"} />
          </styled.ImgProfile>
          <styled.Icons>
            <styled.Icon1 onClick={home} />
            {bellAlert ? 
          <VscBellDot size={35} /> : <FiBell size={35}/>}
          </styled.Icons>
          <styled.InputSearch>
            <Input
              name="Pesquisa"
              type="text"
              icon={<CiSearch />}
              title="Pesquisar"
              register={() => {}}
              value={searchInput}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInput(e.target.value);
                searchOptions();
              }}
            />
          </styled.InputSearch>
        </styled.Container1>
        <styled.ImgLogo>
          <img src={logo} alt="Logo CSB" />
        </styled.ImgLogo>
      </styled.Nav>
      {children}
      <styled.NavFooter>
        <styled.Icon1 onClick={home} />
        <img src={logo} alt="Logo CSB" />
        {bellAlert ? 
          <VscBellDot size={35} /> : <FiBell size={35}/>
        }
      </styled.NavFooter>
    </>
  );
;
}
