package br.com.api.produtos.service;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.CreatUserRoleDTO;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.RoleModelo;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.repositorio.RoleRepository;
import br.com.api.produtos.repositorio.UserRepository;

@Service
public class CreatRoleUserService {
    
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    private RespostaModelo respostaMod;

        //Metodo para listar todos os usuarios
        public Iterable<RoleModelo> listarRole(){
            return roleRepository.findAll();
        }
    

    public ResponseEntity<?> executar(CreatUserRoleDTO creatUserRoleDTO){

        Optional<UserModelo> userExists = userRepository.findById(creatUserRoleDTO.getIdUser());

        List<RoleModelo> roles = new ArrayList<>();

        if (userExists.isEmpty())
            {
                respostaMod.setMensagem("User does not exist");
                return new ResponseEntity<RespostaModelo>(respostaMod, HttpStatus.BAD_REQUEST);
            }    
        
            roles = creatUserRoleDTO.getIdsRoles().stream().map(role ->{
                return new RoleModelo(role);
            }).collect(Collectors.toList()); //percorre a lista de array e mapeia os id que vem de uma string dps cria um objeto de roles

            UserModelo user = userExists.get();
            user.setRoles(roles);

            return new ResponseEntity<UserModelo>(userRepository.save(user), HttpStatus.CREATED);
    }
}
