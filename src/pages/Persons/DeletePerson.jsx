import axios from 'axios';
import React, { Component } from 'react'

const URI = "http://localhost:8080/api/persons";

const DeletePerson = ({ personId }) => {

    const deletePerson = async (personId) => {
        if (confirm("Desea Eliminar el registro: "+personId+" de la Persona?" )){
            
            await axios
            .delete(`${URI}/${personId}`)
            .then((res) => {
                console.log(res);
                alert("El registro se borro satisfactoriamente.");
                onDelete(personId);
            })
            .catch((error) => {
                console.log(error);
            });
        }        
    }

    return (
        <div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => deletePerson(personId)}>Delete Person</button>
        </div>
    );

};


export default DeletePerson;