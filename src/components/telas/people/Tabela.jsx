import { useContext } from "react";
import PeopleContext from "./PeopleContext";
import Alerta from "../../comuns/Alerta";
import pessoas from '../../../image/pessoas.jpeg';

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(PeopleContext);

  return (
    <div style={{ padding: "20px" ,
    backgroundImage: `url(${pessoas})`,
    backgroundSize: 'cover',  // Isso faz com que a imagem cubra todo o elemento
    backgroundRepeat: 'no-repeat', // Evita repetição da imagem
    backgroundPosition: 'center', // Alinha a imagem ao centro
    width: '100vw', // Define a largura para ocupar 100% da largura da viewport
    height: '90vh' // Define a altura para ocupar 100% da altura da viewport
    
    }}>
      <h1 style={{color:"white"}}>Pessoas</h1>
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
      {listaObjetos.length === null && <h1 style={{color:"white"}}>Nenhuma pessoa encontrada</h1>}
      {listaObjetos.length != null && listaObjetos.length  > 0 && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ textAlign: "center" }}>
                  Ações
                </th>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
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
                      onClick={() => editarObjeto(obejto.id)}
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
                  <td>{obejto.e_mail}</td>
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
