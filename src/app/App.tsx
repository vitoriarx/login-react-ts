import { useEffect, useState } from "react";
import "./styles.css";
import { AuthService } from "../services/auth";

function App() {
  const service = new AuthService();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //Utilizando efeitos colaterais
  useEffect(() => {
    document.title = email || "Teste";
  }, [email]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const account = service.login(email, password);
      console.log(account);
    } catch (error) {
      alert((error as Error).message);
    }
  }
  document.title = email;
  return (
    <div className="login-page">
      <div id="login-card">
        <h2>Entrar</h2>
        <span>Insira suas credenciais abaixo para entrar</span>
        <form onSubmit={submit}>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              id="email"
              name="email"
              onChange={(event) => {
                setEmail(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <br></br>
            <input
              id="senha"
              name="password"
              type="password"
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
