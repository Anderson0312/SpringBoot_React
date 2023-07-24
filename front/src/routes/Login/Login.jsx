import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError('');
    
    try {

      /*
      const response = await axios.post('/login', {
        email,
        password,
      });
        */
      
      const response = () => {
        fetch("http://localhost:8080/login/"+email,{
          method: 'post',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        })
        .then(res => res.json())
        .then(res_converterido => {
          
          
          console.log(res_converterido.mensagem)
          if(res_converterido.mensagem !== undefined) {
            alert(res_converterido.mensagem)
          }else {
            window.location.href = '/';
            alert('Usuario logado com sucesso!')
          }
        }

    )};
      console.log(response.data);
      // Fazer redirecionamento para a página de home, caso o login seja bem-sucedido
      
    } catch (err) {
      setError('Credenciais inválidas');
    }
    
  };

    return (
        <div>
        <h2 class="text-center">Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
    );
    };

export default Login;