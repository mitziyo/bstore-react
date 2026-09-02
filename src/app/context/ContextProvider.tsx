import { useState } from "react";
import type { ReactNode } from "react";
import Cookies from "universal-cookie";
import { GlobalContext } from "../hooks/useGlobals";
import useBasket from "../hooks/useBasket";
import type { Member } from "../../lib/types/member";

const cookies = new Cookies();

export function ContextProvider({ children }: { children: ReactNode }) {
  if (!cookies.get("accessToken")) {
    localStorage.removeItem("memberData");
  }

  const [authMember, setAuthMember] = useState<Member | null>(() => {
    const memberData = localStorage.getItem("memberData");
    return memberData ? JSON.parse(memberData) : null;
  });
  const basket = useBasket();

  return <GlobalContext.Provider value={{ authMember, setAuthMember, basket }}>{children}</GlobalContext.Provider>;
}
