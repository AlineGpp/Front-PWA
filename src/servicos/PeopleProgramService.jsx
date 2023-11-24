import {getToken} from '../security/Autentication';

export const getPessoaseProgramasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'application/json',
            "authorization" : getToken()
        }
    }); 

    const data = await response.json();
    return data;
}

export const cadastraPessoaseProgramasAPI = async (objeto,metodo) => {
    console.log(objeto);
    console.log(metodo);

    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program`,
    {
       method: metodo,
        headers:{
            "Content-Type" : 'application/json',
            "authorization" : getToken()
        }, 
        body :JSON.stringify(objeto)
    }); 
    console.log(JSON.stringify(objeto))
    const data = await response.json();
    console.log(data);
   return data;
}

export const getPeopleProgramCodigoAPI = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program/${codigo}`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'application/json',
            "authorization" : getToken()
        }
    }); 

    const data = await response.json();
    return data;
}


export const deletaPessoaEPrograma = async (codigo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program/${codigo}`,
    {
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            "authorization" : getToken()
        }
    });
    const data = await response.json();
    return data;
}