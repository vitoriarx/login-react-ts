import { AuthMock } from "../../src/infra/mock/auth";

class AuthService {
  #adapter: AuthMock;

  constructor() {
    this.#adapter = new AuthMock();
  }

  login(email: string, password: string) {
    return this.#adapter.login(email, password);
  }
}

export { AuthService };
