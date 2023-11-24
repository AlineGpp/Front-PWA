import React from 'react';
import { useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { gravarAutenticacao,getToken } from '../../../security/Autentication';
import Carregando from '../../comuns/Carregando';
import Alerta from '../../comuns/Alerta';
//import  './signin.css';

function Login() {
  const [login, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado,setAutenticado] = useState(false);
  const [carregando,setCarregando] = useState(false);

  const acaoLogin = async e => {
    e.preventDefault ();
    try{
        const body = {
            login: login,
            password: password
          }
          setCarregando(true);
          await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`,{
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(body)
            }).then(response => response.json())
            .then(json => {
              if(json.auth === false ){
                setAlerta({status : "erro", message : json.message});
              }else{
                setAutenticado(true);
                gravarAutenticacao(json);
              }
            })
    }catch(err){
      setAlerta({status : "erro", message : err.message});
    }finally{
          setCarregando(false);
    }
  }

  useEffect(() => {
   try{
    const token = getToken();
    if(token !== null){
      setAutenticado(true);
    }
   }catch(err){
     setAlerta({status : "erro", message : err.message});
   }
  },[]);

  if(autenticado){
    return <Navigate to="/privado" />
  }

  return (
    <div>
            <Carregando carregando={carregando}>
                <div>
                    <body className="text-center">
                        <Alerta alerta={alerta} />
                        <main className="form-signin">
                            <form onSubmit={acaoLogin}>
                                <h1 className="h3 mb-3 fw-normal">Login de usuário</h1>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="login"
                                        value={login}
                                        name="login"
                                        onChange={e => setEmail(e.target.value)} />
                                    <label htmlFor="floatingInput">Login</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha"
                                        value={password}
                                        name="senha"
                                        onChange={e => setSenha(e.target.value)} />
                                    <label htmlFor="floatingPassword">Senha</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Efetuar login</button>
                            </form>
                        </main>
                    </body>
                </div>
            </Carregando>
        </div>
  )
}

export default Login;