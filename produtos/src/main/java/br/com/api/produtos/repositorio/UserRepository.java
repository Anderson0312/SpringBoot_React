package br.com.api.produtos.repositorio;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.UserModelo;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<UserModelo, Long>{
    UserModelo findByUsername(String username);
    Optional<UserModelo> findById(UUID codigo);

    @Query("SELECT u FROM usuarios u JOIN FETCH u.roles where u.username = :username")
    UserModelo findByUsernameFetchRoles(@Param("username")String username);
}


