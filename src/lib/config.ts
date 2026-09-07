import axios, { isAxiosError } from "axios";

export const serverApi: string = import.meta.env.VITE_API_URL as string;

export const api = axios.create({
  baseURL: serverApi,
  withCredentials: true,
});

// Backendning Order.service.ts createOrder mantig'iga mos: $100dan kam bo'lsa $5, aks holda bepul
export const calculateDelivery = (subtotal: number): number => (subtotal < 100 ? 5 : 0);

// Backend'ning "NON_FICTION"/"SCI_FI" kabi xom qiymatlarini "Non-Fiction"/"Sci-Fi" ko'rinishiga o'giradi
export function formatGenre(genre: string): string {
  return genre
    .split("_")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join("-");
}

// Backend Errors class {code, message} javobini o'qiydi; server umuman javob bermasa (tarmoq/server o'chgan) umumiy xabar qaytaradi
export function extractErrorMessage(err: unknown): string {
  if (isAxiosError(err) && err.response?.data && typeof err.response.data === "object" && "message" in err.response.data) {
    return String((err.response.data as { message: unknown }).message);
  }
  return "Could not reach the server. Please try again.";
}

export const Message = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fulfill all inputs!",
  error4: "Message is empty!",
  error5: "Only images with jpeg, jpg, png format allowed!",
};
