import axios from 'axios';
import React, { Component } from 'react'

const URI = "http://localhost:8080/api/cars";

const DeleteCar = ({ carId }) => {

    const deleteCar = async (carId) => {
        if (confirm("Realmente Quiere Eliminar el Registro: " + carId)){
            
            await axios
            .delete(`${URI}/${carId}`)
            .then((res) => {
                console.log(res);
                alert("El registro se borro satisfactoriamente");
                onDelete(carId);
            })
            .catch((error) => {
                console.log(error);
            });
        }        
    }

    return (
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => deleteCar(carId)}>Delete Car</button>
        </div>
    );

};


export default DeleteCar;