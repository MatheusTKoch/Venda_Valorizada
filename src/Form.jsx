import './App.css'
import { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
      });
    
    const handleChange = e => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
  
    const handleRegister = async e => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/users/register', {
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
  
    const handleLogin = async e => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/dashboard';
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    return (
        <>
        <hgroup>
        <h1>Venda Valorizada</h1>
        <h2>O aplicativo para facilitar seus cálculos!</h2>
        </hgroup>
        <p>Como utilizar: após login, cadastre o produto, seus custos e ao final adicione a margem de lucro!</p>
        <div className="card">
        <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}></input>
          <p></p>
          <label htmlFor="senha">Senha: </label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange}></input>
        </div>
        <p></p>
        <div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <button type="submit" onClick={handleRegister}>
            Criar Conta
          </button>
        </div>
        </form>
      </div>
        </>
    )
}

export default App