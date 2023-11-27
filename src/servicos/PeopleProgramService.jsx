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

export const cadastraPessoaseProgramasAPI = async (objeto) => {
    console.log(objeto);

    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program`,
    {
       method: "POST",
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

export const getPeopleProgramCodigoAPI = async (idPeo,idPro) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program/${idPeo}/${idPro}`,
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


export const deletaPessoaEPrograma = async (idPeo,idPro) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people_program/${idPeo}/${idPro}`,
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