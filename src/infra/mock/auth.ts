import { Account } from "../../core/models/Account";

class AuthMock {
  login(email: string, password: string) {
    if (email !== "admin@test.com") {
      throw Error("Usuário não encontrado!");
    } else if (password !== "admin") {
      throw Error("Senha incorreta!");
    }
    return new Account("1", "Administrador", "admin", "2002-06-16");
  }
}

export { AuthMock };
