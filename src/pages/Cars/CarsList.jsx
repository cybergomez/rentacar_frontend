import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchCar from './SearchCar';
import TableCars from './TableCars';
const URI = "http://localhost:8080/api/cars";
const URIseach = "";


const CarsList = () => {

    const [car, setCar] = useState([]);
    const [carList, setCarList] = useState([]);

    

    if (car.length < 0){
        return <h2>No existen carros !!!</h2>
    } else {
        return(
            <div className='grid auto-rows-min gap-2 text-center'>
               <h2>Lista de Carros</h2>
               <SearchCar onSearch={ setCar }/>
               <TableCars cars={ car }/>               
            </div>        
        );

    }   
};

export default CarsList;