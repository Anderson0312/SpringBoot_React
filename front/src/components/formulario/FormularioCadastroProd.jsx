function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return (
        <form>
            <input type="text" value={obj.nome} onChange={eventoTeclado} name='nome' placeholder="Nome"  class="form-control"/>
            <input type="text" value={obj.marca} onChange={eventoTeclado} name='marca' placeholder="Marca" class="form-control"/>

            {
                botao
                ?
                <input type="button" value="Cadastrar" onClick={cadastrar} class='btn btn-primary mt-3'/>
                :
                <div>
                    <input type="button" value="Alterar" onClick={alterar} class='btn btn-warning mt-3'/>
                    <input type="button" value="Remover" onClick={remover} class='btn btn-danger mt-3'/>
                    <input type="button" value="Cancelar" onClick={cancelar} class='btn btn-secondary mt-3'/>
                </div>
            }
   
        </form>
    )
}

export default Formulario;