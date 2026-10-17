import { createContext } from "react";
import type { FC, ReactNode } from "react";
import { io } from "socket.io-client";
import type { Socket } from "socket.io-client";
import { serverApi } from "../../lib/config";

const socket = io(serverApi, {
  withCredentials: true,
});
export const SocketContext = createContext<Socket>(socket);

interface SocketProviderProps {
  children: ReactNode;
}
export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
