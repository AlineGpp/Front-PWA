import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import PeopleProgramContext from "./PeopleProgramContext";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    listaPessoas,
    listaProgramas,
  } = useContext(PeopleProgramContext);

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

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
              Pessoas e Programas
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form
            id="formulario"
            onSubmit={acaoCadastrar}
            className="needs-validation"
            noValidate
          >
            <div className="modal-body">
              <Alerta alerta={alerta} />

              <div className="mb-3">
                <label htmlFor="txtCodigo" className="form-label">
                  Código {objeto.id}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="txtCodigo"
                  readOnly
                  name="codigo"
                  value={objeto.id}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                                <label htmlFor="selectPessoa"
                                    className="form-label">Pessoa</label>
                                <select className="form-select"
                                    id="selectPessoa"
                                    required name="people_id"
                                    value={objeto.people_id}
                                    onChange={handleChange} >
                                    <option disabled={true} value="">
                                        Selecione a pessoa
                                    </option>
                                   
                                    {
                                        listaPessoas.map((cat) => (
                                            <option key={cat.id}
                                                value={cat.id} >
                                                    
                                                {cat.name}
                                            </option>
                                       ))
                                    }
                                  
                                   
                                </select>
                                <div className="valid-feedback">
                                   Pesso  OK
                                </div>
                                <div className="invalid-feedback">
                                    Selecione a Pessoa
                                </div>
                            </div>
              
              <div className="mb-3">
                <label htmlFor="selectPrograma" className="form-label">
                  Programa
                </label>
                <select
                  className="form-select"
                  id="selectPrograma"
                  required
                  name="program_id"
                  value={objeto.program_id}
                  onChange={handleChange}
                >
                  <option disabled={true} value="">
                    Selecione o programa
                  </option>
                  {listaProgramas.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.description}
                    </option>
                  ))}
                </select>
                <div className="valid-feedback">Programa OK</div>
                <div className="invalid-feedback">Selecione o Programa</div>
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
                Salvar <i className="bi bi-save"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
