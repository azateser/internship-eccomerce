import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const [token] = useLocalStorage("token", null);

  return { token: token };
};
