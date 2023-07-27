package br.com.api.produtos.repositorio;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.UserModelo;

@Repository
public interface UserRepository extends CrudRepository<UserModelo, Long>{
    UserModelo findByEmail(String email);
    Optional<UserModelo> findById(UUID codigo);
}


