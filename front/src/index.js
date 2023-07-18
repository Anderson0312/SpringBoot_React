import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//configuração do router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Importação das paginas do router
import Home from './routes/Home/Home';
import Cadastro from './routes/Cadastro/Cadastro';
import Login from './routes/Login/Login';
import ErroPage from './routes/ErrorPage';
import Profile from './routes/Profile/Profile';
import ProfileDetails from './routes/Profile/ProfileDetails';
import CadastrodeProdutos from './routes/CadastroProdutos/CadastrodeProdutos';

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  //Pagina de erro
  errorElement: <ErroPage />,
  children : [
    {
      path: "/",
            element: <Home />
    },
    {
      path: "/cadastro",
            element: <Cadastro />
    },
    {
      path: "/login",
        element: <Login />
    },
    {
      path: "/profile",
            element: <Profile />
    },
    // nested routes - identificador unico
    {
      path: "/profile/:id",
            element: <ProfileDetails />
    },
    {
      path: "/cadastroProducts",
        element: <CadastrodeProdutos />
    }
  ],
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
