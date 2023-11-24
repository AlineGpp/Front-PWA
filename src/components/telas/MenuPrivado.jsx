import { NavLink, Outlet, useSubmit } from 'react-router-dom';
import { getUsuario,logout } from '../../security/Autentication';

const MenuPrivado = () => {

    const usuario = getUsuario();


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" aria-current="page" exact to="/">eSystem</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>

                            {usuario &&  <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manutenções
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" exact to="people">Pessoas</NavLink></li> 
                                    <li><NavLink className="dropdown-item" exact to="program">Programas</NavLink></li>                                                                                                           
                                    <li><NavLink className="dropdown-item" exact to="peopleprogram">Programas e Pessoas</NavLink></li>   
                                </ul>
                            </li>}

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   {usuario ? "Usuário: " + usuario.user_name : "Usuário"}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {usuario ? <NavLink className="dropdown-item"  onClick={()=>{
                                        logout();}}
                                    exact to="/">Logout</NavLink> : <NavLink className="dropdown-item" exact to="/login">Login</NavLink>}
                                                                                                                                      
                                </ul>
                            </li>

            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};

export default MenuPrivado;