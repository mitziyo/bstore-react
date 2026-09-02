import { createContext, useContext } from "react";
import useBasket from "./useBasket";

interface GlobalInterface {
  basket: ReturnType<typeof useBasket>;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(undefined);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals must be used within a ContextProvider");
  return context;
};
