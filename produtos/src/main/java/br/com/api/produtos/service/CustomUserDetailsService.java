package br.com.api.produtos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.repositorio.UserRepository;
import br.com.api.produtos.security.UserPrincipal;

public class CustomUserDetailsService implements UserDetailsService{
    
    @Autowired
    private UserRepository uRepository;

    @Autowired
    private RespostaModelo respostaMod;

    @Override 
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        
        UserModelo userExist = uRepository.findByEmail(email);
        
        if (userExist != null) {
            respostaMod.setMensagem( "Usuario não encontrado!");
        }
        
        return UserPrincipal.create(userExist);
    
    }
}
