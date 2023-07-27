package br.com.api.produtos.modelo;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "roles")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleModelo {
    
    @Id
    @GeneratedValue
    private UUID id;
    private String name;

    public RoleModelo(UUID id) {
        this.id = id;
    }
}
