package br.com.api.produtos.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.repositorio.LoginRepository;

@Service
public class AuthService {
    @Autowired
    private LoginRepository loginRepository;
    
    public boolean authenticate(String email, String password) {
        UserModelo user = loginRepository.findByEmail(email);
        
        if (user != null && user.getPassword().equals(password)) {
            return true;
        }
        
        return false;
    }
}
