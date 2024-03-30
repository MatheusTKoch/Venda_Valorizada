import './App.css'
import Barra from './Barra.jsx'

function App() {

  return (
    <>
      <Barra></Barra>
      <div className="card">
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="user"></input>
          <p></p>
          <label htmlFor="user">Senha: </label>
          <input type="password" id="user"></input>
        </div>
        <p></p>
        <div>
          <button>
            Login
          </button>
          <button>
            Criar Conta
          </button>
        </div>
      </div>
    </>
  )
}

export default App
