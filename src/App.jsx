import './App.css'
import Barra from './Barra.jsx'
import { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5173/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Barra></Barra>
      <div className="card">
        <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" value={formData.email} onChange={handleChange}></input>
          <p></p>
          <label htmlFor="password">Senha: </label>
          <input type="password" id="password" value={formData.password} onChange={handleChange}></input>
        </div>
        <p></p>
        <div>
          <button>
            Login
          </button>
          <button type="submit">
            Criar Conta
          </button>
        </div>
        </form>
      </div>
    </>
  )
}

export default App
