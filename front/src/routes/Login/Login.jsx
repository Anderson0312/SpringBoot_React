import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError('');
    
    try {

      const response = await axios.post('/login', {
        email,
        password,
      });
      /*
      const Autenticar = () => {
        fetch("http://localhost:8080/login/"+email, password,{
          method: 'get',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(res => res.json())
        .then(res_converterido => {
          
          //mensagem
          alert(res_converterido.mensagem);
        }

    )};
        */
      console.log(response.data);
      // Fazer redirecionamento para a página de home, caso o login seja bem-sucedido
      window.location.href = '/';
    } catch (err) {
      setError('Credenciais inválidas');
    }
    
  };

    return (
        <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
    };

export default Login;