import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchPerson from './SearchPerson.jsx';
import TablePersons from './TablePersons.jsx';
const URI = "http://localhost:8080/api/persons";
const URIseach = "";


const PersonsList = () => {

    const [person, setPerson] = useState([]);
    const [personList, setPersonList] = useState([]);


    if (person.length < 0){
        return <h2>No existen personas !!!</h2>
    } else {
        return(
            <div className='grid auto-rows-min gap-2 text-center'>
               <h2>Lista de Personas</h2>
               <SearchPerson onSearch={ setPerson }/>
               <TablePersons persons={ person }/>               
            </div>        
        );
    }   
};

export default PersonsList;