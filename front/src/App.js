import {useEffect, useState} from 'react';
import './App.css';
import Formulario from './components/formulario/Formulario';
import Tabela from './components/tabela/Tabela';

function App() {

  //Objeto Produto
  const produto = {
    codigo : 0,
    nome : '',
    marca: ''
  }

  // UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(response => response.json())
    .then(response_convertido => setProdutos(response_convertido))
  }, []);

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({...objProduto, [e.target.name]: e.target.value});
  }

  //Cadastrar Produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then(res_converterido => {
      
      if(res_converterido.mensagem !== undefined) {
        alert(res_converterido.mensagem)
      }else {
        setProdutos([...produtos, res_converterido]);
        alert('Produto cadastrado com sucesso!')
        limparFormulario();
      }

    })
  }

  // Limpar Formulario
  const limparFormulario =()=> {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto =(indice)=> {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  //Remover Produto
  const removerProduto = () => {
    fetch("http://localhost:8080/remover/"+objProduto.codigo,{
      method: 'delete',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then(res_converterido => {
      
      //mensagem
      alert(res_converterido.mensagem);

      //copia do vetor de produto
      let vetorTemp = [...produtos];

      //indice
      let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.codigo;
      });

      //remover produto do vetor temp
      vetorTemp.splice(indice, 1);

      //Atualiza vetor de produtos
      setProdutos(vetorTemp);

      //limpar formulario
      limparFormulario();

    })
  }

    //Alterar Produto
    const alterarProduto = () => {
      fetch("http://localhost:8080/alterar", {
        method: 'put',
        body: JSON.stringify(objProduto),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      })
      .then(res => res.json())
      .then(res_converterido => {
        
        if(res_converterido.mensagem !== undefined) {
          alert(res_converterido.mensagem)
        }else {
          
          //mensagem
          alert('Produto alterado com sucesso!')

          //copia do vetor de produto
          let vetorTemp = [...produtos];

          //indice
          let indice = vetorTemp.findIndex((p)=>{
            return p.codigo === objProduto.codigo;
          });

          //alterar produto do vetor temp
          vetorTemp[indice] = objProduto;

          //Atualiza vetor de produtos
          setProdutos(vetorTemp);

          //limpar fomulario
          limparFormulario();
        }
  
      })
    }


  //Retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={removerProduto} alterar={alterarProduto}/>
      <Tabela vetor={produtos} selecionar={selecionarProduto}/>
    </div>
  );
}

export default App;
