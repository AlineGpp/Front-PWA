import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './components/telas/Menu';
import Home from './components/telas/Home';
import Program from './components/telas/program/Program';
import People from './components/telas/people/People';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
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
