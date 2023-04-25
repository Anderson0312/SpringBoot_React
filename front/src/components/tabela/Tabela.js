function Tabela({vetor}){
    return (
        <table className="table mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <th>{indice+1}</th>
                            <th>{obj.nome}</th>
                            <th>{obj.marca}</th>
                            <th><button className="btn btn-success">Selecionar</button></th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;