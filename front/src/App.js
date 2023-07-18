import {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

// reaproveitamento  de estruturas
import {Outlet} from "react-router-dom"; 

function App() {

  //Retorno
  return (
    <div>
      <NavBar/>
      <Outlet/>
      
    </div>
  );
}

export default App;
