import { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iRegisterBand, RegisterBand } from "../services/RegisterBand";

interface iBandContext {
  submitRegisterBand: ({ name, email, password }: iRegisterBand) => void;
  buttonLoading: boolean;
  setButtonLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iBandContextProps {
  children: ReactNode;
}

export const BandContext = createContext<iBandContext>({} as iBandContext);

export const BandProvider = ({ children }: iBandContextProps) => {
  const [buttonLoading, setButtonLoading] = useState(false);
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
      requirement: "",
      type: "banda",
    };

    try {
      setButtonLoading(true);
      await RegisterBand(dataBand);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast.error("Cadastro não realizado");
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <BandContext.Provider
      value={{ submitRegisterBand, buttonLoading, setButtonLoading }}
    >
      {children}
    </BandContext.Provider>
  );
};

export const useBandContext = (): iBandContext => {
  const context = useContext(BandContext);

  return context;
};
