import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iRegisterMusician,
  RegisterMusician,
} from "../services/RegisterMusician";

interface iMusicianContext {
  submitMusician: ({ name, email, password, skill }: iRegisterMusician) => void;
  buttonLoading: boolean;
  setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iMusicianContextProps {
  children: ReactNode;
}

export const MusicianContext = createContext<iMusicianContext>(
  {} as iMusicianContext
);

export const MusicianProvider = ({ children }: iMusicianContextProps) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

  const submitMusician = async ({
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
      setButtonLoading(true);
      await RegisterMusician(dataMusician);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Cadastro não realizado");
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <MusicianContext.Provider
      value={{ submitMusician, buttonLoading, setButtonLoading }}
    >
      {children}
    </MusicianContext.Provider>
  );
};

export const useMusicianContext = (): iMusicianContext => {
  const context = useContext(MusicianContext);

  return context;
};
