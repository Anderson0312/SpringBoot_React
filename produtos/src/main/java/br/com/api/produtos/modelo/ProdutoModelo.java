package br.com.api.produtos.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Setter;
import lombok.Getter;

@Entity
@Table(name="produtos")
@Getter
@Setter

public class ProdutoModelo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)

    private Long codigo;
    private String name;
    private String marca;

}