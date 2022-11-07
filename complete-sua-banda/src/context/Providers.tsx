import { ReactNode } from "react";
import { BandProvider } from "./BandContext";
import { GlobalProvider } from "./GlobalContext";
import { MusicianProvider } from "./MusicianContext";

interface iProvidersChildren {
  children: ReactNode;
}

export const Providers = ({ children }: iProvidersChildren) => {
  return (
    <GlobalProvider>
      <BandProvider>
        <MusicianProvider>{children}</MusicianProvider>
      </BandProvider>
    </GlobalProvider>
  );
};
