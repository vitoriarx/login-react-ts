import "./styles.css"

function App() {

  return (
    <div className="login-page">
      <div id="login-card">
        <h2>Entrar</h2>
        <span>Insira suas credenciais abaixo para entrar</span>
        <form>
          <div>
            <label htmlFor="email">Email</label><br></br>
            <input id="email" name="email" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label><br></br>
            <input id="senha" name="senha" />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default App
