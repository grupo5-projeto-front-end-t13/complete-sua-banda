import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import * as styled from "./style";
import { Profile } from "../../components/Profile";
import logo from "../../assets/Logo-CSB.png";
import { ReactNode, useEffect, useState } from "react";
import { iRegisterBand } from "../../services/RegisterBand";
import { iRegisterMusician } from "../../services/RegisterMusician";
import {
  iBandsInvites,
  iMemberInvites,
  useGlobalContext,
} from "../../context/GlobalContext";
import { FiBell } from "react-icons/fi";
import { VscBellDot } from "react-icons/vsc";

interface iNavDashBoard {
  children: ReactNode;
  image?: string;
  bands?: iRegisterBand[];
  musicians?: iRegisterMusician[];
  inviteBands?: iBandsInvites[];
  inviteMembers?: iMemberInvites[];
  filtredCards?: iRegisterBand[];
  filtredCardsM?: iRegisterMusician[];
}

export const NavDashBoard = ({
  children,
  image,
  bands,
  musicians,
  inviteBands,
  inviteMembers,
  filtredCards,
  filtredCardsM,
}: iNavDashBoard) => {
  const {
    user,
    setFilteredMusicians,
    setFilteredBands,
    openMenu,
    setOpenMenu,
    setOpenModalRemove,
    setOpenModalUpdateB,
    setOpenModalUpdateM,
    setOpenModalNotification
  } = useGlobalContext();
  const [bellAlert, setBellAlert] = useState(false);

  const searchOptions = (inputText: string) => {
    if (user?.type === "musico") {
      const searched = filtredCards?.filter((band) => {
        return (
          band.name.toLowerCase().trim().includes(inputText) ||
          band.genre?.toLowerCase().trim().includes(inputText)
        );
      });

      setFilteredBands(searched);
    } else {
      const searched = filtredCardsM?.filter(
        (musician) =>
          musician.name.toLowerCase().includes(inputText.toLowerCase()) ||
          musician.skill?.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilteredMusicians(searched);
    }
  };
  useEffect(() => {
    const alertBell = () => {
      if (inviteBands?.length || inviteMembers?.length) {
        setBellAlert(true);
      }
    };

    alertBell();
  }, []);

  return (
    <>
      <styled.Nav>
        <styled.Container1>
          <Profile
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            setOpenEditM={setOpenModalUpdateM}
            setOpenEditB={setOpenModalUpdateB}
            setOpenDelete={setOpenModalRemove}
          >
            <img src={image} alt={"Imagem perfil"} />
          </Profile>
          <styled.Icons>
            <styled.Icon1 />
            {bellAlert ? 
            <styled.Button onClick={() => setOpenModalNotification((prev) => (!prev))}>
              <VscBellDot  size={35}/>
            </styled.Button> 
            :  
            <styled.Button onClick={() => setOpenModalNotification((prev) => (!prev))}>
              <FiBell  size={35}/>
            </styled.Button>
            }
          </styled.Icons>
          <styled.InputSearch>
            <Input
              name="Pesquisa"
              type="text"
              icon={<CiSearch />}
              title="Pesquisar"
              register={() => {}}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                searchOptions(e.target.value);
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
        <styled.Icon1 />
        <img src={logo} alt="Logo CSB" />
        {
        bellAlert ? 
        <styled.Button onClick={() => setOpenModalNotification((prev) => (!prev))}>
          <VscBellDot  size={35}/>
        </styled.Button> 
        :  
        <styled.Button onClick={() => setOpenModalNotification((prev) => (!prev))}>
          <FiBell  size={35}/>
        </styled.Button>
        }
      </styled.NavFooter>
    </>
  );
};
