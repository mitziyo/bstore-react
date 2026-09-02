import type { ReactNode } from "react";
import { GlobalContext } from "../hooks/useGlobals";
import useBasket from "../hooks/useBasket";

export function ContextProvider({ children }: { children: ReactNode }) {
  const basket = useBasket();

  return <GlobalContext.Provider value={{ basket }}>{children}</GlobalContext.Provider>;
}
