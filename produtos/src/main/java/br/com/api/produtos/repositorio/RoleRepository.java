package br.com.api.produtos.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.produtos.modelo.RoleModelo;

@Repository
public interface RoleRepository extends CrudRepository<RoleModelo, Long>{
}