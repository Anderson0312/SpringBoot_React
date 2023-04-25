function Formulario({botao}){
    return (
        <form>
            <input type="text" placeholder="Nome" class="form-control"/>
            <input type="text" placeholder="Marca" class="form-control"/>

            {
                botao
                ?
                <input type="button" value="Cadastrar" class='btn btn-primary mt-3'/>
                :
                <div>
                    <input type="button" value="Alterar" class='btn btn-warning mt-3'/>
                    <input type="button" value="Remover" class='btn btn-danger mt-3'/>
                    <input type="button" value="Cancelar" class='btn btn-secondary mt-3'/>
                </div>
            }
   
        </form>
    )
}

export default Formulario;