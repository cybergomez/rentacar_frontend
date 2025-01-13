import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const URI = "http://localhost:8080/api/persons";

const DeletePerson = ({ personId, onDelete }) => {

    const deletePerson = async (personId) => {
        if (confirm("Desea Eliminar el registro: "+personId+" de la Persona?" )){
            try {
                console.log("Url: "+URI);
                console.log("Url armada: "+`${URI}/delete/${personId}`);
                await axios.delete(`${URI}/delete/${personId}`);
                Swal.fire({
                    title: 'Delete Person!',
                    text: 'El registro de la persona se borró satisfactoriamente',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                onDelete(personId);
            } catch (personId) {
                alert("Pasa capturando error.");
                console.error(error);
                alert("Error al eliminar el registro.");
            }
        }        
    };

    return (
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => deletePerson(personId)}
        >
            Delete Person
        </button>
    );
};


export default DeletePerson;