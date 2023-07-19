import {useEffect, useState, useForm} from 'react';
import FormularioCadastroUser from '../../components/formulario/FormularioCadastroUser';


const Cadastro = () => {

  const User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }


  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [Users, setUser] = useState([]);
  const [objUser, setObjUser] = useState(User);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/listarUser")
    .then(response => response.json())
    .then(response_convertido => setUser(response_convertido))
  }, []);


    //Cadastrar Usuario
    const cadastrar = () => {
      fetch("http://localhost:8080/cadastrarUser", {
        method: 'post',
        body: JSON.stringify(objUser),
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      })
      .then(res => res.json())
      .then(res_converterido => {
        
        if(res_converterido.mensagem !== undefined) {
          alert(res_converterido.mensagem)
        }else {
          setUser([...Users, res_converterido]);
          alert('Usuario cadastrado com sucesso!')
          limparFormulario();
        }
  
      })
    }

    //Remover Usuario
  const removerUsuario = () => {
    fetch("http://localhost:8080/removerUser/"+objUser.codigo,{
      method: 'delete',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(res => res.json())
    .then(res_converterido => {
      
      //mensagem
      alert(res_converterido.mensagem);

      //copia do vetor de Usuario
      let vetorTemp = [...Users];

      //indice
      let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objUser.codigo;
      });

      //remover Usuario do vetor temp
      vetorTemp.splice(indice, 1);

      //Atualiza vetor de Usuario
      setUser(vetorTemp);

      //limpar formulario
      limparFormulario();

    })
  } 

  //Obtendo os dados do formulário
  const aoDigitar = (e) => {
    setObjUser({...objUser, [e.target.name]: e.target.value});
  }

    // Limpar Formulario
    const limparFormulario =()=> {
      setObjUser(User);
      setBtnCadastrar(true);
    }

  return (
    <div>
      <h2 class="text-center">Cadastro</h2>
      
     <FormularioCadastroUser botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objUser} cancelar={limparFormulario}  />
    </div>
  );
};

export default Cadastro;
