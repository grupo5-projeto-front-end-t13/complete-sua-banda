import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iRegisterMusician,
  RegisterMusician,
} from "../services/RegisterMusician";

interface iMusicianContext {
  submitMusician: ({ name, email, password, skill }: iRegisterMusician) => void;
}

interface iMusicianContextProps {
  children: ReactNode;
}

export const MusicianContext = createContext<iMusicianContext>(
  {} as iMusicianContext
);

export const MusicianProvider = ({ children }: iMusicianContextProps) => {
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
      await RegisterMusician(dataMusician);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Cadastro não realizado");
    }
  };

  return (
    <MusicianContext.Provider value={{ submitMusician }}>
      {children}
    </MusicianContext.Provider>
  );
};

export const useMusicianContext = (): iMusicianContext => {
  const context = useContext(MusicianContext);

  return context;
};
