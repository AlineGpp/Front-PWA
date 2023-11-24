import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './components/telas/Home';
import Program from './components/telas/program/Program';
import People from './components/telas/people/People';
import PeopleProgram from './components/telas/peopleProgram/PeopleProgram';
import MenuPrivado from './components/telas/MenuPrivado';
import MenuPublico from './components/telas/MenuPublico';
import Login from './components/telas/login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPublico />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"login",
        element:<Login/>
      }, 
      {
        path:"people",
        element:<People/>
      }

    ]
  },
  {
    path: "/privado",
    element: <MenuPrivado/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"program",
        element:<Program/>
      }, 
      {
        path:"people",
        element:<People/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"peopleprogram",
        element:<PeopleProgram/>
      }

    ]
  }
])

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
}


export default App;
