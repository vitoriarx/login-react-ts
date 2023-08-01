import { createContext } from "react";
import { Account } from "../../core/models/Account";

interface Props {
  account?: Account;
  login(email: string, password: string): void;
}

export const AuthCTX = createContext({} as Props);
