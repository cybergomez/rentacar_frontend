import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchCar from './SearchCar';
const URI = "http://localhost:8080/api/cars";


const CarsList = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        await axios
            .get(URI)
            .then((res) => {
                setCar(res.data);                
            })
            .catch((err) =>{
                console.log(err);
            })
    };

    const deleteCar = async (id) => {
        if (confirm("Realmente Quiere Eliminar el Registro: " + id)){
            axios
            .delete(`${URI}/${id}`)
            .then((res) => {
                console.log(res);
                alert("El registro se borro satisfactoriamente");
                getCars();
                
            })
            .catch((error) => {
                console.log(error);
            });
        }        
    }

    if (car.length < 0){
        return <h2>No existen carros !!!</h2>
    } else {
        return(
            <div className='grid auto-rows-min gap-2 text-center'>
               <h2>Lista de Carros</h2>
               <SearchCar />
               <table className='border-collapse border border-slate-400'>
                <thead>
                    <tr>
                    <th className='px-4 py-3'>ID</th>
                    <th className='px-4 py-3'>Marca</th>
                    <th className='px-4 py-3'>Color</th>
                    <th className='px-4 py-3'>Nombre</th>
                    <th className='px-4 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {car?.map((item, i) => {
                    return (
                        <tr>                           
                            <td className='px-4 py-3'>{item.id}</td>
                            <td className='px-4 py-3'>{item.brand}</td>
                            <td className='px-4 py-3'>{item.color}</td>
                            <td className='px-4 py-3'>{item.name}</td>                        
                            <td className='px-4 py-3'>
                            <Link to={`/edit-car/${item.id}`}>
                                <i className="fa fa-pencil" aria-hidden="true">Edit</i>
                            </Link>
                            <Link>
                               <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteCar(item.id)}>Delete</i>
                            </Link>
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>        
        );

    }   
};

export default CarsList;