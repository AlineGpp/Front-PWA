import { useContext } from "react";
import PeopleContext from "./PeopleContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(PeopleContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pessoas</h1>
      <Alerta alerta={alerta}></Alerta>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalEdicao"
        onClick={() => novoObjeto()}
      >
        {" "}
        Novo
        <i className="bi bi-file-plus"></i>
      </button>
      {listaObjetos.length === 0 && <h1>Nenhuma pessoa enccontrada</h1>}
      {listaObjetos.length > 0 && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  Ações
                </th>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Endereço</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {listaObjetos.map((obejto) => (
                <tr key={obejto.id}>
                  <td align="center">
                    <button
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#modalEdicao"
                      onClick={() => editarObjeto()}
                      title="Editar"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>

                    <button
                      className="btn btn-danger"
                      title="Remover"
                      onClick={() => remover(obejto.id)}
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                  <th scope="row">{obejto.id}</th>
                  <td>{obejto.name}</td>
                  <td>{obejto.address}</td>
                  <td>{obejto.e_mail}</td>
                  <td>{obejto.telephone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Tabela;
