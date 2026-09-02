import axios from "axios";

export const serverApi: string = import.meta.env.VITE_API_URL as string;

export const api = axios.create({
  baseURL: serverApi,
  withCredentials: true,
});

export const Message = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fulfill all inputs!",
  error4: "Message is empty!",
  error5: "Only images with jpeg, jpg, png format allowed!",
};
