import { useState, useEffect } from "react";
import PeopleProgramContext from "./PeopleProgramContext";
import { getPessoasAPI } from "../../../servicos/PeopleServico";
import { getProgramasAPI } from "../../../servicos/ProgramServico";
import {
  deletaPessoaEPrograma,
  cadastraPessoaseProgramasAPI,
  getPessoaseProgramasAPI,
} from "../../../servicos/PeopleProgramService";
import Tabela from "./Tabela";
import Form from "./Form";
import Carregando from "../../comuns/Carregando";
import WithAuth from "../../../security/WithAuth";
import { useNavigate } from "react-router-dom";

function PeopleProgram() {
  let navigate = useNavigate();
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaPessoas, setListaPessoas] = useState([]);
  const [listaProgramas, setListaProgramas] = useState([]);
  //const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({ people: 0, program: 0 });
  const [carregando, setCarregando] = useState(false);

  const novoObjeto = () => {
    //setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({
      people: 0,
      program: 0
    });
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(objeto));
    try {
      let retornoAPI = await cadastraPessoaseProgramasAPI(objeto);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(retornoAPI.objeto);
      // if (!editar) {
      //   setEditar(true);
      // }
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
   recuperaPessoasEProgramas();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaPessoasEProgramas = async () => {
    try {
      setCarregando(true);
      setListaObjetos(await getPessoaseProgramasAPI());
      setCarregando(false);
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const recuperaPessoas = async () => {
    setListaPessoas(await getPessoasAPI());
  };

  const recuperaProgramas = async () => {
    setListaProgramas(await getProgramasAPI());
  };

  const remover = async (idPeo, idPro) => {
    try {
      if (window.confirm("Deseja remover este objeto?")) {
        let retornoAPI = await deletaPessoaEPrograma(idPeo, idPro);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaPessoas();
        recuperaProgramas();
      }
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    recuperaPessoasEProgramas();
    recuperaPessoas();
    recuperaProgramas();
  }, []);

  return (
    <PeopleProgramContext.Provider
      value={{
        alerta,
        listaObjetos,
        remover,
        objeto,
        acaoCadastrar,
        handleChange,
        novoObjeto,
        listaPessoas,
        listaProgramas,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Form />
    </PeopleProgramContext.Provider>
  );
}

export default WithAuth(PeopleProgram);
