import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./style";
import { TiUserDelete } from "react-icons/ti";
import { BiLogOut } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";

interface iProfileProps {
  children: React.ReactNode;
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  setOpenEditB: Dispatch<SetStateAction<boolean>>;
  setOpenEditM: Dispatch<SetStateAction<boolean>>;
  setOpenDelete: Dispatch<SetStateAction<boolean>>;
}

export const Profile = ({
  children,
  openMenu,
  setOpenMenu,
  setOpenEditB,
  setOpenEditM,
  setOpenDelete,
}: iProfileProps) => {
  const navigate = useNavigate();

  const home = () => {
    localStorage.removeItem("@id_CSB");
    localStorage.removeItem("@token_CSB");
    navigate("/");
  };

  const verifyWindow = () => {
    window.location.pathname === "/dashboardMusician"
      ? setOpenEditM(true)
      : setOpenEditB(true);
    setOpenMenu(!openMenu);
  };

  return (
    <styled.Menu>
      <styled.Photo onClick={() => setOpenMenu(!openMenu)}>
        {children}
      </styled.Photo>
      {openMenu && (
        <styled.Content>
          <styled.Group1>
            <button onClick={verifyWindow}>
              <AiFillEdit /> Editar informações
            </button>
            <button
              onClick={() => {
                home();
                setOpenMenu(!openMenu);
              }}
            >
              <BiLogOut />
              Logout
            </button>
          </styled.Group1>
          <styled.Division />
          <styled.Group2>
            <button
              onClick={() => {
                setOpenDelete(true);
                setOpenMenu(!openMenu);
              }}
            >
              <TiUserDelete />
              Deletar usuário
            </button>
          </styled.Group2>
        </styled.Content>
      )}
    </styled.Menu>
  );
};
