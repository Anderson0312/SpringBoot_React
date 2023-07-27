package br.com.api.produtos.modelo;

import java.util.List;
import java.util.UUID;

import lombok.Data;

@Data
public class CreatUserRoleDTO {

    private UUID idUser;
    private List<UUID>idsRoles;
}
