package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.repositorio.UserRepository;
import br.com.api.produtos.security.UserPrincipal;

@Service
public class CustomUserDetailsService implements UserDetailsService{
    
    @Autowired
    private UserRepository uRepository;

    @Autowired
    private RespostaModelo respostaMod;

    @Override 
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        UserModelo userExist = uRepository.findByUsernameFetchRoles(username);
        
        if (userExist != null) {
            respostaMod.setMensagem( "Usuario não encontrado!");
        }
        System.out.println("------------------linha 30----------------------------"+userExist);
        return UserPrincipal.create(userExist);
    
    }
}
