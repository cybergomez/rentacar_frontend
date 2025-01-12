import React, { useState } from 'react'
import SearchCar from './SearchCar';
import TableCars from './TableCars';

const CarsList = () => {

    const [car, setCar] = useState([]);

    const handleDelete = (carId) => {
        console.log("Sending by table:", carId, car) // Remove in production
        const updatedCars = car.filter((c) => c.id !== carId);
        setCar(updatedCars);
    };

    if (car.length < 0){
        return <h2>No existen carros !!!</h2>
    } else {
        return(
            <div className='grid auto-rows-min gap-2 text-center'>
               <h2>Lista de Carros</h2>
               <SearchCar onSearch={ setCar }/>
               <TableCars cars={ car } onDelete={handleDelete}/>
            </div>
        );

    }   
};

export default CarsList;