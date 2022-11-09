import { iBandsInvites } from "../context/GlobalContext";
import { api } from "./ApiRequest";

export interface iRegisterMusician {
  id?: number;
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
  searched?: string[] | undefined;
  bands_invites?: iBandsInvites[];
  
}

export interface iDataMusician {
  user: iRegisterMusician;
}

export const RegisterMusician = async (
  dataMusician: iRegisterMusician
): Promise<iDataMusician> => {
  const { data } = await api.post<iDataMusician>("/users", dataMusician);

  return data;
};
