import axios from 'axios';
import React, { Component } from 'react'

const URI = "http://localhost:8080/api/persons";

const DeletePerson = ({ personId, onDelete }) => {

    const deletePerson = async (personId) => {
        if (confirm("Desea Eliminar el registro: "+personId+" de la Persona?" )){
            try {
                await axios.delete(`${URI}/${personId}`);
                alert("El registro se borró satisfactoriamente");
                onDelete(personId);
            } catch (personId) {
                console.error(error);
                alert("Error al eliminar el registro.");
            }
/*            await axios
            .delete(`${URI}/${personId}`)
            .then((res) => {
                console.log(res);
                alert("El registro se borro satisfactoriamente.");
                onDelete(personId);
            })
            .catch((error) => {
                console.log(error);
            });*/
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