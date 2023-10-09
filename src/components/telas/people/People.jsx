import { useState, useEffect } from "react";
import PeopleContext from "./PeopleContext";
import {
  cadastraPessoaAPI,
  deletePessoaPorCodigoAPI,
  getPessoaPorCodigoAPI,
  getPessoasAPI
} from "../../../servicos/PeopleServico";
import Tabela from "./Tabela";
import Form from "./Form";

function People() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({
    id: 0,
    name: "",
    sex: "",
    adress: "",
    complement: "",
    district: "",
    zip_code: "",
    telephone: "",
    celular: "",
    e_mail: "",
    profession: "",
    login: "",
    password: "",
    city: ""
  });

  const novoObjeto = async (id) => {
    {
      id === undefined ? (id = 1) : (id = id);
    }
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto(await getPessoaPorCodigoAPI(id));
  };

  const editarObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({
        id: 0,
        name: "",
        sex: "",
        adress: "",
        complement: "",
        district: "",
        zip_code: "",
        telephone: "",
        celular: "",
        e_mail: "",
        profession: "",
        login: "",
        password: "",
        city: ""
    });
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";

    try {
      let retornoAPI = await cadastraPessoaAPI(objeto, metodo);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(retornoAPI.objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      console.log(err);
    }

    recuperaPessoas();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaPessoas = async () => {
    setListaObjetos(await getPessoasAPI());
  };

  const remover = async (id) => {
    if (window.confirm("Deseja remover este objeto? ")) {
      let retornoAPI = await deletePessoaPorCodigoAPI(id);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
    }
  };

  useEffect(() => {
    recuperaPessoas();
  }, []);

  return (
    <PeopleContext.Provider
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
    </PeopleContext.Provider>
  );
}

export default People;
