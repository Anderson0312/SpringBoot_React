package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.repositorio.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRe;

    @Autowired
    private RespostaModelo respostaMod;

    //Metodo para listar todos os usuarios
    public Iterable<UserModelo> listar(){
        return userRe.findAll();
    }

    //metodo para cadastrar usuarios ou alterar
    public ResponseEntity<?> cadastrarAlterar(UserModelo um, String acao){

        UserModelo existe = userRe.findByEmail(um.getEmail());

            if(existe != null){
                respostaMod.setMensagem("O Email ja foi cadastrado com outro usuario");
                return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.BAD_REQUEST);
            } else if(um.getName().equals("")){
                respostaMod.setMensagem("O NOME de usuario é obrigatório!");
                return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.BAD_REQUEST);
            } else if(um.getEmail().equals("")){
                respostaMod.setMensagem("O email é obrigatório!");
                return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.BAD_REQUEST);
            } else if(um.getPassword().equals("")){
                respostaMod.setMensagem("A Senha é obrigatório!");
                return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.BAD_REQUEST);
            } else {
                if (acao.equals("cadastrar")){
                    return new ResponseEntity<UserModelo>(userRe.save(um), HttpStatus.CREATED);
                } else {
                    return new ResponseEntity<UserModelo>(userRe.save(um), HttpStatus.OK);
                }
            }
    }

    //Metodo para deletar usuarios
    public ResponseEntity<RespostaModelo> remover(long codigo){
        userRe.deleteById(codigo);

        respostaMod.setMensagem("Usuario Deletado com Sucesso");

        return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.OK);
    }

   
}
