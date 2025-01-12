import React, { useState } from 'react'
import SearchCar from './SearchCar';
import TableCars from './TableCars';

const CarsList = () => {

    const [car, setCar] = useState([]);

    const handleDelete = (carId) => {
        const updatedCars = car.filter((c) => c.id !== carId);
        setCar(updatedCars);
    };

    if (car.length < 0) {
        return <h2>No existen carros !!!</h2>
    } else {
        return(
            <div className='mt-[20px] grid gap-[20px] auto-rows-min text-center'>
               <SearchCar onSearch={ setCar }/>
               <TableCars cars={ car } onDelete={handleDelete}/>
            </div>
        );

    }
};

export default CarsList;