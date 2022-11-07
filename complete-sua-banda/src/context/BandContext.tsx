import { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iRegisterBand, RegisterBand } from "../services/RegisterBand";

interface iBandContext {
  submitRegisterBand: ({ name, email, password }: iRegisterBand) => void;
}

interface iBandContextProps {
  children: ReactNode;
}

export const BandContext = createContext<iBandContext>({} as iBandContext);

export const BandProvider = ({ children }: iBandContextProps) => {
  const navigate = useNavigate();

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
      const data = await RegisterBand(dataBand);
      console.log(data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Cadastro não realizado");
      console.error(error);
    }
  };

  return (
    <BandContext.Provider value={{ submitRegisterBand }}>
      {children}
    </BandContext.Provider>
  );
};

export const useBandContext = (): iBandContext => {
  const context = useContext(BandContext);

  return context;
};
