import { iMemberInvites } from "../context/GlobalContext";
import { api } from "./ApiRequest";

export interface iRegisterBand {
  id?: number | undefined;
  email: string;
  password: string;
  bio?: string;
  state?: string;
  social_media?: string;
  genre?: string;
  image?: string;
  type?: any;
  name: string;
  requirement?: string;
  members_invites?: iMemberInvites[];
  skill?: string;
  searched?: string[] | undefined;
}

export interface iDataBand {
  user: iRegisterBand;
}

export async function RegisterBand(
  dataBand: iRegisterBand
): Promise<iDataBand> {
  const { data } = await api.post<iDataBand>("/users", dataBand);

  return data;
}
