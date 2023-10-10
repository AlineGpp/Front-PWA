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
                <label htmlFor="txtSexo" className="form-label">
                  Sexo(F,M)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtSexo"
                  required
                  name="sex"
                  value={objeto.sex}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtEndereco" className="form-label">
                  Endereco
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtEndereco"
                  placeholder="Informe o seu endereco"
                  required
                  name="address"
                  value={objeto.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtCidade" className="form-label">
                    Cidade
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="txtCidade"
                  required
                  name="city"
                  value={objeto.city}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtComplemento" className="form-label">
                  Complemento
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtComplemento"
                  required
                  name="complement"
                  value={objeto.complement}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtTelefone" className="form-label">
                 Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtTelefone"
                  required
                  name="telephone"
                  value={objeto.telephone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="txtCelular" className="form-label">
                Celular
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtCelular"
                  required
                  name="celular"
                  value={objeto.celular}
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
                <label htmlFor="txtProfissao" className="form-label">
                 Profissão
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="txtProfissao"
                  required
                  name="profession"
                  value={objeto.profession}
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
                  type="text"
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
