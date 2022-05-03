import React from 'react'
//import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { FilteringTable1_1 } from './components/FilteringTable1_1';
import {SortingTable} from './components/sortingTable';
import {BrowserRouter as Router,Routes,Route, Navigate, Link} from 'react-router-dom'


//import{Hello} from './components/hello2'
function App1(){
    return(
        <div className='App'>
            
            <h1 className = 'button1 btn-primary'  > {global.Name} </h1>
             <Link className = 'button1 btn-primary'  to ="/"> Home </Link>
            <FilteringTable1_1/>
           

        </div>
    );
}

  

export default App1;
