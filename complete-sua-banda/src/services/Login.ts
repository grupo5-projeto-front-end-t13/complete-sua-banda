import { iUser } from "../context/GlobalContext";
import { api } from "./ApiRequest";

export interface iLogin {
  email: string;
  password: string;
}

export interface iDataLogin {
  user: iUser;
  accessToken: string;
}

export const Login = async (userLogin: iLogin): Promise<iDataLogin> => {
  const { data } = await api.post<iDataLogin>("/login", userLogin);

  return data;
};
