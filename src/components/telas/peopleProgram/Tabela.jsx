import { useContext } from "react";
import PeopleProgramContext from "./PeopleProgramContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {

    const {alerta, listaObjetos, remover,novoObjeto, editarObjeto } = useContext(PeopleProgramContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Pessoas e Programs </h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => novoObjeto()}>
                Novo <i className="bi bi-file-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h1>Nenhum produto encontrado</h1>}
            {listaObjetos.length > 0 &&
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">Id Programa</th>
                                <th scope="col">Programa</th>
                                <th scope="col">Id Pessoa</th>
                                <th scope="col">Pessoa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <td align="center">
                                        <button className="btn btn-info"
                                            title="Editar"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modalEdicao"
                                            onClick={() =>
                                                editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger"
                                            title="Remover"
                                            onClick={() => remover(objeto.id)}>
                                            <i className="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{objeto.program_id}</th>
                                    <th scope="row">{objeto.program_name}</th>
                                    <td>{objeto.people_id}</td>
                                    <td>{objeto.people_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            }
        </div>
    )
}

export default Tabela;