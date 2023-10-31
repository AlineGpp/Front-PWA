import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import PeopleContext from "./PeopleContext";

function Form() {
  const { objeto, handleChange, acaoCadastrar, alerta } =
    useContext(PeopleContext);

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
              Cadastro de Pessoas
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
                  readOnly
                  name="id"
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
                  name="name"
                  value={objeto.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtEmail" className="form-label">
                 Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="txtEmail"
                  required
                  name="e_mail"
                  value={objeto.e_mail}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtLogin" className="form-label">
                 Login
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtLogin"
                  required
                  name="login"
                  value={objeto.login}
                  onChange={handleChange}
                />
              </div>


              <div className="mb-3">
                <label htmlFor="txtSenha" className="form-label">
                Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="txtSenha"
                  required
                  name="password"
                  value={objeto.password}
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
