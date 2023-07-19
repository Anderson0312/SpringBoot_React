package br.com.api.produtos.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.UserModelo;

@Repository
public interface LoginRepository extends JpaRepository<UserModelo, Long> {
    UserModelo findByEmail(String email);
}

