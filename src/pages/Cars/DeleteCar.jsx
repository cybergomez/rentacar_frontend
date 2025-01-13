import axios from 'axios';
import React, { useState } from 'react'

const URI = "http://localhost:8080/api/cars";

const DeleteCar = ({ carId, onDelete }) => {

    const deleteCar = async (carId) => {
        if (confirm("Realmente Quiere Eliminar el Registro: " + carId)) {
            try {
                await axios.delete(`${URI}/${carId}`);
                alert("El registro se borró satisfactoriamente");
                onDelete(carId);
            } catch (error) {
                console.error(error);
                alert("Error al eliminar el registro.");
            }
        }
    };

    return (
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => deleteCar(carId)}
        >
            Delete Car 
        </button>
    );

};


export default DeleteCar;