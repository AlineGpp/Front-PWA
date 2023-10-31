import { useState, useEffect } from "react";
import ProgramContext from "./ProgramContext";
import {
  cadastraProgramAPI,
  deleteProgramsPorCodigoAPI,
  getProgramasAPI,
  getProgramsPorCodigoAPI,
} from "../../../servicos/ProgramServico";
import Tabela from "./Tabela";
import Form from "./Form";

function Program() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({
    id:0,
    description: "",
    address: ""
  });

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({
      id: 0,
      description: "",
      address: ""
    });
  };

  const editarObjeto = async (id) => {
    setEditar(true);
    setAlerta({ status: "", message: "" });
    setObjeto(await getProgramsPorCodigoAPI(id));
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraProgramAPI(objeto, metodo);
      console.log("Objeto " + JSON.stringify(objeto))
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(retornoAPI.objeto);
    console.log(JSON.stringify(retornoAPI.objeto))
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      console.log(err);
    }

    recuperaProgramas();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaProgramas = async () => {
    setListaObjetos(await getProgramasAPI());
  };

  const remover = async (id) => {
    if (window.confirm("Deseja remover este objeto? ")) {
      let retornoAPI = await deleteProgramsPorCodigoAPI(id);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      recuperaProgramas();
    }
  };

  useEffect(() => {
    recuperaProgramas();
  }, []);

  return (
    <ProgramContext.Provider
      value={{
        alerta,
        listaObjetos,
        remover,
        objeto,
        editar,
        acaoCadastrar,
        handleChange,
        novoObjeto,
        editarObjeto,
      }}
    >
      <Tabela />
      <Form />
    </ProgramContext.Provider>
  );
}

export default Program;
