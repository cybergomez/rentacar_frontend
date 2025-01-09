import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const URI = "http://localhost:8080/api/cars";

//https://medium.com/@bhairabpatra.iitd/crud-create-read-update-delete-application-in-react-566bf229aaee

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
            <div>
               <h2>Lista de Carros</h2>
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