import {useEffect, useState} from 'react';
import './App.css';
import Formulario from './components/formulario/Formulario';
import Tabela from './components/tabela/Tabela';

function App() {

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(response => response.json())
    .then(response_convertido => setProdutos(response_convertido))
  }, []);

  //Retorno
  return (
    <div>
      {/* <p>{JSON.stringify(produtos)}</p> */}
      <Formulario botao={btnCadastrar}/>
      <Tabela vetor={produtos}/>
    </div>
  );
}

export default App;
