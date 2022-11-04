/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosError } from "axios";
import React, { ReactNode, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/ApiRequest";

interface iUserContextProps {
  user: iUserProps | null;
  setUser: React.Dispatch<React.SetStateAction<iUserProps | null>>;
  loading: boolean;
  clearStorage: () => void;
  submitCadastroMusicos({
    name,
    email,
    password,
    skill,
  }: iCadastroMusicoProps): void;
  submitCadastroBanda({ name, email, password }: iCadastroBandaProps): void;
  submitLogin({ email, password }: iLoginProps): void;
}

interface iAuthContextProps {
  children: ReactNode;
}

interface iBandsInvitesProps {
  bio: string;
  state: string;
  social_media: string;
  genre: string;
  image: string;
  name: string;
  userId: number;
  id: number;
}

interface iMemberInvitesProps {
  id: number;
  userId: number;
  email: string;
  bio: string;
  estate: string;
  social_media: string;
  image: string;
  name: string;
  username: string;
  skill: string;
  skill_level: string;
}

interface iUserProps {
  id: string;
  email: string;
  password: string;
  bio: string;
  state: string;
  social_media: string;
  image: string;
  type: string;
  name: string;
  username?: string;
  skill?: string;
  skill_level?: string;
  genre?: string;
  requirement?: string[];
  bands_invites?: iBandsInvitesProps[];
  member_invites?: iMemberInvitesProps[];
}

export interface iCadastroMusicoProps {
  email: string;
  password: string;
  bio?: string;
  state?: string;
  social_media?: string;
  image?: string;
  type?: string;
  name: string;
  username?: string;
  skill: string;
  skill_level?: string;
}
interface iDataMusicoProps {
  user: iCadastroMusicoProps;
}

export interface iCadastroBandaProps {
  email: string;
  password: string;
  bio?: string;
  state?: string;
  social_media?: string;
  genre?: string;
  image?: string;
  type?: string;
  name: string;
  requirement?: string[];
}

interface iDataBandaProps {
  user: iCadastroBandaProps;
}

interface iLoginProps {
  email: string;
  password: string;
}

interface iDataLoginProps {
  user: iUserProps;
  token: string;
}

export interface iApiErrorProps {
  status: string;
  message?: string;
}

export const AuthContext = createContext<iUserContextProps>(
  {} as iUserContextProps
);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const id = localStorage.getItem("@id_CSB");
      const token = localStorage.getItem("@token_CSB");
      if (id && token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get<iUserProps>(`/users/${id}`);
          setUser(data);
          // if(data.type === 'musico'){
          //     navigate('/musico')
          // }else{
          //     navigate('/banda')
          // }
        } catch (error) {
          const requestError = error as AxiosError<iApiErrorProps>;
          console.error(requestError.response?.data.message);
          clearStorage();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    setUser(null);
  };

  const submitCadastroMusicos = async ({
    name,
    email,
    password,
    skill,
  }: iCadastroMusicoProps) => {
    const dataMusico = {
      name,
      email,
      password,
      skill,
      state: "",
      bio: "",
      social_media: "",
      image: "",
      username: "",
      skill_level: "",
      type: "musico",
    };

    try {
      const { data } = await api.post<iDataMusicoProps>("/user", dataMusico);
      console.log(data.user);
      // navigate("/")
    } catch (error) {
      const requestError = error as AxiosError<iApiErrorProps>;
      console.error(requestError.response?.data.message);
    }
  };

  const submitCadastroBanda = async ({
    name,
    email,
    password,
  }: iCadastroBandaProps) => {
    const dataBanda = {
      name,
      email,
      password,
      state: "",
      bio: "",
      social_media: "",
      image: "",
      genre: "",
      requirement: [""],
      type: "banda",
    };

    try {
      const { data } = await api.post<iDataBandaProps>("/user", dataBanda);
      console.log(data.user);
    } catch (error) {
      const requestError = error as AxiosError<iApiErrorProps>;
      console.error(requestError.response?.data.message);
    }
  };

  const submitLogin = async ({ email, password }: iLoginProps) => {
    const userLogin = { email, password };

    try {
      const { data } = await api.post<iDataLoginProps>("/login", userLogin);

      setUser(data.user);

      api.defaults.headers.common.authorization = `Bearer ${data.token}`;

      localStorage.setItem("@token_CSB", data.token);
      localStorage.setItem("@id_CSB", data.user.id);
    } catch (error) {
      const requestError = error as AxiosError<iApiErrorProps>;
      console.error(requestError.response?.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        clearStorage,
        submitCadastroMusicos,
        submitCadastroBanda,
        submitLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
