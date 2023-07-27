package br.com.api.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.modelo.CreatUserRoleDTO;
import br.com.api.produtos.modelo.RespostaModelo;
import br.com.api.produtos.modelo.RoleModelo;
import br.com.api.produtos.modelo.UserModelo;
import br.com.api.produtos.service.CreatRoleUserService;
import br.com.api.produtos.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService us;

    @Autowired
    private CreatRoleUserService roleService;

    @Autowired 
    private CreatRoleUserService creatRoleUserService;
    

    @PostMapping("/cadastrarUser")
    public ResponseEntity<?> cadastrar(@RequestBody UserModelo pm) {
        return us.cadastrarAlterar(pm, "cadastrar");
    }

    @PutMapping("/alterarUser")
    public ResponseEntity<?> alterar(@RequestBody UserModelo pm) {
        return us.cadastrarAlterar(pm, "alterar");
    }

    @DeleteMapping("/removerUser/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo) {
        return us.remover(codigo);
    }

    @GetMapping("/listarUser")
    public Iterable<UserModelo> listar() {
        return us.listar();
    }

    @GetMapping("/Userfuncionando")
    public String rota(){
        return "API de Usuarios Funcionando";
    }

    @PostMapping("/role")
    public ResponseEntity<?> role(@RequestBody CreatUserRoleDTO creatUserRoleDTO ){
        return creatRoleUserService.executar(creatUserRoleDTO);
    }

    @GetMapping("/listarRole")
    public Iterable<RoleModelo> listarRole() {
        return roleService.listarRole();
    }
}
