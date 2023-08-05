package br.com.api.produtos.security;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import br.com.api.produtos.modelo.UserModelo;

@Service
public class UserPrincipal implements UserDetails{

    private String username;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
     

    public UserPrincipal(UserModelo user){
        this.username = user.getUsername();
        this.password = user.getPassword();

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        //Role_ADMIN , ROLE _USER ADMIN , USER ...
        authorities = user.getRoles().stream().map(role ->{
            return new  SimpleGrantedAuthority("ROLE_".concat(role.getName()));
        }).collect(Collectors.toList());

        this.authorities = authorities;
    }

    public static UserPrincipal create(UserModelo user){
        return new UserPrincipal(user);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
       return authorities;
    }
    @Override
    public String getPassword() {
        return password;
    }
    @Override
    public String getUsername() {
        return username;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}
