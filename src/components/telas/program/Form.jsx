import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ProgramContext from "./ProgramContext";

function Form() {
  const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ProgramContext);

  return (
    <div
      className="modal fade"
      id="modalEdicao"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Cadastro de Sistemas
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form id="formulario" onSubmit={acaoCadastrar}>
            <div className="modal-body">
              <Alerta alerta={alerta}></Alerta>

              <div className="mb-3">
                <label htmlFor="txtId" className="form-label">
                  Codigo
                </label>
               
                <input
                  type="number"
                  className="form-control"
                  id="txtId"
                  name="id"
                  readOnly
                  value={objeto.id}
                  onChange={handleChange}
                />
                
              </div>

              <div className="mb-3">
                <label htmlFor="txtNome" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtDescricao"
                  placeholder="Informe o nome"
                  required
                  name="description"
                  value={objeto.description}
                  onChange={handleChange}
                />
              </div>


              <div className="mb-3">
                <label htmlFor="txtAddress" className="form-label">
                Endereco do Sistema
                </label>
                <input
                  type="link"
                  className="form-control"
                  id="txtEndereco"
                  placeholder="Informe o endereco do sistema"
                  required
                  name="address"
                  value={objeto.address}
                  onChange={handleChange}
                />
              </div>


            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="submit" className="btn btn-primary">
                Salvar
                <i className="bi bi-save"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
