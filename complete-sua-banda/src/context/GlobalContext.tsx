import React, {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/ApiRequest";
import { toast } from "react-toastify";
import { iLogin, Login } from "../services/Login";
import { iRegisterMusician } from "../services/RegisterMusician";
import { iRegisterBand } from "../services/RegisterBand";

interface iGlobalContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  buttonLoading: boolean;
  setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>;
  clearStorage: () => void;
  submitLogin({ email, password }: iLogin): void;
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModalRemove: boolean;
  setOpenModalRemove: React.Dispatch<React.SetStateAction<boolean>>;
  openModalUpdateM: boolean;
  setOpenModalUpdateM: React.Dispatch<React.SetStateAction<boolean>>;
  filteredMusicians: iRegisterMusician[] | undefined;
  setFilteredMusicians: React.Dispatch<
    React.SetStateAction<iRegisterMusician[] | undefined>
  >;
  filteredBands: iRegisterBand[] | undefined;
  setFilteredBands: React.Dispatch<
    React.SetStateAction<iRegisterBand[] | undefined>
  >;
  openModalUpdateB: boolean;
  setOpenModalUpdateB: React.Dispatch<React.SetStateAction<boolean>>;
  cardsBandsFiltred: iRegisterBand[] | undefined;
  setCardsBandsFiltred: React.Dispatch<
    React.SetStateAction<iRegisterBand[] | undefined>
  >;
  openModalNotification: boolean;
  setOpenModalNotification: React.Dispatch<React.SetStateAction<boolean>>;
  updateNotification: boolean;
  setUpdateNotification: React.Dispatch<React.SetStateAction<boolean>>;

}

export interface iApiError {
  status: string;
  message?: string;
}

interface iGlobalContextProps {
  children: ReactNode;
}

export interface iBandsInvites {
  bio?: string;
  state?: string;
  social_media?: string;
  genre?: string;
  image?: string;
  name?: string;
  userId?: number;
  id?: number;
  email?: string;
}

export interface iMemberInvites {
  id?: number;
  userId?: number;
  email?: string;
  bio?: string;
  estate?: string;
  social_media?: string;
  image?: string;
  name?: string;
  username?: string;
  skill?: string;
  skill_level?: string;
}

export interface iUser {
  id: any;
  email: string;
  password: string;
  bio: string;
  state: string;
  social_media: string;
  image: string;
  type: "musico" | "banda";
  name: string;
  username?: string;
  skill?: string;
  skill_level?: string;
  genre?: string;
  requirement?: string;
  bands_invites?: iBandsInvites[];
  members_invites?: iMemberInvites[];
}

export const GlobalContext = createContext<iGlobalContext>(
  {} as iGlobalContext
);

export const GlobalProvider = ({ children }: iGlobalContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [openModalUpdateM, setOpenModalUpdateM] = useState(false);
  const [openModalNotification, setOpenModalNotification] = useState(false);
  const [updateNotification, setUpdateNotification] = useState(false);
  const [filteredMusicians, setFilteredMusicians] = useState<
    iRegisterMusician[] | undefined
  >([]);
  const [filteredBands, setFilteredBands] = useState<
    iRegisterBand[] | undefined
  >([]);
  const [cardsBandsFiltred, setCardsBandsFiltred] = useState<
    iRegisterBand[] | undefined
  >([]);
  const [openModalUpdateB, setOpenModalUpdateB] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const id = localStorage.getItem("@id_CSB");
      const token = localStorage.getItem("@token_CSB");
      if (id && token) {
        try {
          setLoading(true);
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get<iUser>(`/users/${id}`);
          setUser(data);
          if (data.type === "musico") {
            const { data } = await api.get<iUser>(
              `/users/${id}?_embed=bands_invites`
            );
            setUser(data);
            navigate("/dashboardMusician", { replace: true });
          } else {
            const { data } = await api.get<iUser>(
              `/users/${id}?_embed=members_invites`
            );
            setUser(data);
            navigate("/dashboardBand", { replace: true });
          }
          toastOfUpdateProfile(data);
        } catch (error) {
          console.error(error);
          clearStorage();
        } finally {
          setLoading(false);
        }
      }
    }
    loadUser();
  }, [navigate,updateNotification]);

  const toastOfUpdateProfile = (data: iUser) => {
    if (
      data.bio === "" ||
      data.image === "" ||
      data.skill_level === "" ||
      data.social_media === "" ||
      data.state === "" ||
      data.username === ""
    ) {
      toast.error("Complete o seu cadastro", {
        toastId: "custom-id-yes",
      });
    }
  };

  const clearStorage = () => {
    localStorage.removeItem("@id_CSB");
    localStorage.removeItem("@token_CSB");
    setUser(null);
  };

  const submitLogin = async ({ email, password }: iLogin) => {
    const userLogin = { email, password };
    try {
      setButtonLoading(true);
      const data = await Login(userLogin);

      setUser(data.user);

      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;

      localStorage.setItem("@token_CSB", data.accessToken);
      localStorage.setItem("@id_CSB", data.user.id);

      if (data.user.type === "musico") {
        navigate("/dashboardMusician", { replace: true });
        toastOfUpdateProfile(data.user);
      } else {
        navigate("/dashboardBand", { replace: true });
        toastOfUpdateProfile(data.user);
      }
    } catch (error) {
      toast.error("Usuário inválido! Faça seu cadastro.");
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        loading,
        buttonLoading,
        setButtonLoading,
        clearStorage,
        submitLogin,
        openMenu,
        setOpenMenu,
        openModal,
        setOpenModal,
        openModalRemove,
        setOpenModalRemove,
        setOpenModalUpdateM,
        openModalUpdateM,
        setOpenModalUpdateB,
        openModalUpdateB,
        filteredMusicians,
        setFilteredMusicians,
        filteredBands,
        setFilteredBands,
        cardsBandsFiltred,
        setCardsBandsFiltred,
        setOpenModalNotification,
  	    openModalNotification,
        updateNotification,
        setUpdateNotification

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): iGlobalContext => {
  const context = useContext(GlobalContext);

  return context;
};
