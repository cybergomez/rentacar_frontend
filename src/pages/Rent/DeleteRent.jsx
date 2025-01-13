import axios from 'axios';
import React from 'react'

const URI = "http://localhost:8080/api/rentals";

const DeleteRent = ({ rentId, onDelete }) => {

    const deleteRent = async (rentId) => {
        if (confirm("Realmente Quiere Eliminar el Registro: " + rentId)) {
            try {
                await axios.delete(`${URI}/${rentId}`);
                alert("El registro se borró satisfactoriamente");
                onDelete(rentId);
            } catch (error) {
                console.error(error);
                alert("Error al eliminar el registro.");
            }
        }
    };

    return (
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
            onClick={() => deleteRent(rentId)}
        >
            Delete Rent 
        </button>
    );

};


export default DeleteRent;