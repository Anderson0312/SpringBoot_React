function FormularioCadastroUser({botao, eventoTeclado, cadastrar, obj, cancelar }){
    return (
        <form>
            <div>
                <label>Nome</label>
                <input type="text" name="name" onChange={eventoTeclado} value={obj.name}  class="form-control"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={eventoTeclado} value={obj.email}  class="form-control"/>

            </div>
            <div>
                <label>Senha</label>
                <input type="password" name="password" onChange={eventoTeclado} value={obj.password}  class="form-control"/>
            </div>
            <div>
                <label>Confirmar Senha</label>
                <input type="password" name="confirmarSenha" onChange={eventoTeclado} value={obj.confirmarSenha}  class="form-control"/>
            </div>   
            {
                botao
                ?
                <input type="button" value="Cadastrar" onClick={cadastrar} class='btn btn-primary mt-3'/>
                :
                <div>
                    <input type="button" value="Cancelar" onClick={cancelar} class='btn btn-secondary mt-3'/>
                </div>
            }
                
        </form>
    )
}

export default FormularioCadastroUser;