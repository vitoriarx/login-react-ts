import { PropsWithChildren, useState } from "react";
import { AuthCTX } from ".";
import { Account } from "../../core/models/Account";
import { AuthService } from "../../services/auth";

function AuthProvider({ children }: PropsWithChildren) {
  const service = new AuthService();
  const [account, setAccount] = useState<Account>();

  function login(email: string, password: string) {
    try {
      const data = service.login(email, password);
      setAccount(data);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <AuthCTX.Provider value={{ account, login }}>{children}</AuthCTX.Provider>
  );
}

export { AuthProvider };
