import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
const URI = "http://localhost:8080/api/cars";

//https://medium.com/@bhairabpatra.iitd/crud-create-read-update-delete-application-in-react-566bf229aaee

const CarsList = () => {

    const [car, setCar] = useState([]);

    useEffect(() => {
        getCars();
      }, []);

    const getCars = () => {
        axios
            .get(URI)
            .then((res) => {
                setCar(res.data);                
            })
            .catch((err) =>{
                console.log(err);
            })
    };

    if (car.length < 0){
        return <h1>No existen carros !!!</h1>
    } else {
        return(
            <div>
               <h1>Lista de Carros</h1>
               <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Nombre</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {car?.map((item, i) => {
                    return (
                        <tr>                           
                            <td>{item.id}</td>
                            <td>{item.brand}</td>
                            <td>{item.color}</td>
                            <td>{item.name}</td>                        
                            <td>
                            
                                <i className="fa fa-pencil" aria-hidden="true">Edit</i>
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={() => handelDelete(item.id)}>Delete</i>
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