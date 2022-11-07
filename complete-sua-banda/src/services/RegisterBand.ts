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
  type?: string;
  name: string;
  requirement?: string[];
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
