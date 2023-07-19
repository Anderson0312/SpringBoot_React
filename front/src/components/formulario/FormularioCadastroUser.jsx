function FormularioCadastroUser({ eventoTeclado, cadastrar, obj, cancelar, error }){
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
                <input type="password" name="password" onChange={eventoTeclado}  value={obj.password}  class="form-control"/>
            </div>
            <div>
                <label>Confirmar Senha</label>
                <input type="password" name="confirmPassword" onChange={eventoTeclado} value={obj.confirmPassword}  class="form-control"/>
            </div>   
            
            {error && <div>{error}</div>}

                <div>
                <input type="button" value="Cadastrar" onClick={cadastrar} class='btn btn-primary mt-3'/>
                
                
                    <input type="button" value="Cancelar" onClick={cancelar} class='btn btn-secondary mt-3'/>
                </div>
            
                
        </form>
    )
}

export default FormularioCadastroUser;