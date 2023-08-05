package br.com.api.produtos.modelo;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModelo {

    @Id
    @GeneratedValue
    private UUID id;
    private String username;
    private String email;
    private String password;

    @ManyToMany
    private List<RoleModelo> roles;


}

