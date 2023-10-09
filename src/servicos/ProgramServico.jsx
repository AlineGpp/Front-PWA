export const getProgramasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/program`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'applicattion/json'
        }
    }); 

    const data = await response.json();
    return data;
}

export const getProgramsPorCodigoAPI = async id => {

    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/program/${id}`,
    {
        method: "GET", 
        headers:{
            "Content-Type" : 'applicattion/json'
        }
    }); 
    
    const data = await response.json();
    return data;
}

export const deleteProgramsPorCodigoAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/program/${id}`,
    {
        method: "DELETE", 
        headers:{
            "Content-Type" : 'applicattion/json'
        }
    }); 
    
    const data = await response.json();
    return data;
}

export const cadastraProgramAPI = async (objeto,metodo) => {
    console.log(objeto);
    console.log(metodo);
    
    const response = await fetch( `${process.env.REACT_APP_ENDERECO_API}/program`,
    {
        method: metodo,
        headers:{
            "Content-Type" : 'applicattion/json'
        },
        body :JSON.stringify(objeto)
    }); 
    console.log("Obejto JSon " + JSON.stringify(objeto))
       
    const data = await response.json();
    console.log(data)
    return data;
}