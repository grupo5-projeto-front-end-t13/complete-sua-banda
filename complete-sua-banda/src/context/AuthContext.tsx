/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosError } from "axios";
import React, { ReactNode, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/ApiRequest";
import { toast } from "react-toastify";

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  loading: boolean;
  clearStorage: () => void;
  submitRegisterMusicians({
    name,
    email,
    password,
    skill,
  }: iRegisterMusician): void;
  submitRegisterBand({ name, email, password }: iRegisterBand): void;
  submitLogin({ email, password }: iLogin): void;
}

interface iAuthContextProps {
  children: ReactNode;
}

interface iBandsInvites {
  bio: string;
  state: string;
  social_media: string;
  genre: string;
  image: string;
  name: string;
  userId: number;
  id: number;
}

interface iMemberInvites {
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

interface iUser {
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
  bands_invites?: iBandsInvites[];
  member_invites?: iMemberInvites[];
}

export interface iRegisterMusician {
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
interface iDataMusician {
  user: iRegisterMusician;
}

export interface iRegisterBand {
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

interface iDataBand {
  user: iRegisterBand;
}

interface iLogin {
  email: string;
  password: string;
}

interface iDataLogin {
  user: iUser;
  accessToken: string;
}

export interface iApiError {
  status: string;
  message?: string;
}

export const AuthContext = createContext<iUserContext>({} as iUserContext);

export const AuthProvider = ({ children }: iAuthContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const id = localStorage.getItem("@id_CSB");
      const token = localStorage.getItem("@token_CSB");
      if (id && token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get<iUser>(`/users/${id}`);
          setUser(data);
        } catch (error) {
          const requestError = error as AxiosError<iApiError>;
          console.error(requestError.response?.data.message);
          clearStorage();
        } finally {
          setLoading(false);
        }
      }
    }
    loadUser();
  }, []);

  const clearStorage = () => {
    localStorage.clear();
    setUser(null);
  };

  const submitRegisterMusicians = async ({
    name,
    email,
    password,
    skill,
  }: iRegisterMusician) => {
    const dataMusician = {
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
      const { data } = await api.post<iDataMusician>("/users", dataMusician);
      console.log(data.user);
      // navigate("/login")
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
    }
  };

  const submitRegisterBand = async ({
    name,
    email,
    password,
  }: iRegisterBand) => {
    const dataBand = {
      name,
      email,
      password,
      state: "",
      bio: "",
      social_media: "",
      image: "",
      genre: "",
      requirement: [],
      type: "banda",
    };

    try {
      const { data } = await api.post<iDataBand>("/users", dataBand);
      toast.success("Cadastro realizado com sucesso!");

      navigate("/login");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.error(requestError.response?.data.message);
      toast.error("Cadastro não realizado");
    }
  };

  const submitLogin = async ({ email, password }: iLogin) => {
    const userLogin = { email, password };

    try {
      const { data } = await api.post<iDataLogin>("/login", userLogin);

      setUser(data.user);

      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`;

      localStorage.setItem("@token_CSB", data.accessToken);
      localStorage.setItem("@id_CSB", data.user.id);
      console.log(data);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
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
        submitRegisterMusicians,
        submitRegisterBand,
        submitLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
