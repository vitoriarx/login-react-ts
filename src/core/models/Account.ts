class Account {
  #id: string;
  #name: string;
  #username: string;
  #birthDate: string;

  constructor(id: string, name: string, username: string, birthDate: string) {
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#birthDate = birthDate;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get username() {
    return this.#username;
  }
  get birthDate() {
    return this.#birthDate;
  }
}

export { Account };
