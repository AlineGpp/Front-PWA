export const getPessoasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'application/json'
        }
    }); 

    const data = await response.json();
    return data;
}

export const getPessoaPorCodigoAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people/${id}`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'application/json'
        }
    }); 
    
    const data = await response.json();
    return data;
}

export const deletePessoaPorCodigoAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people/${id}`,
    {
        method: "DELETE", 
        headers:{
            "Content-Type" : 'application/json'
        }
    }); 
    
    const data = await response.json();
    return data;
}

export const cadastraPessoaAPI = async (objeto,metodo) => {
    console.log(objeto);
    console.log(metodo);

    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/people`,
    {
        method: metodo, 
        headers:{
            "Content-Type" : 'application/json'
        },
        body : JSON.stringify(objeto)
    }); 
    
    const data = await response.json();
    console.log(data);
    return data;
}