import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';

const URI = "http://localhost:8080/api/rentals";

const DeleteRent = ({ rentId, onDeleteRent }) => {

    const deleteRent = async (rentId) => {
        if (confirm("Realmente Quiere Eliminar el Registro: " + rentId)) {
            try {
                await axios.delete(`${URI}/${rentId}`);
                Swal.fire({
                    title: 'Delete Rent!',
                    text: 'El registro se borró satisfactoriamente',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                onDeleteRent(rentId);
            } catch (error) {
                console.error(error);
                alert("Error al eliminar el registro.");
            }
        }
    };

    return (
        <button
            className="btn-danger"
            onClick={() => deleteRent(rentId)}
        >
            Delete Rent 
        </button>
    );

};


export default DeleteRent;