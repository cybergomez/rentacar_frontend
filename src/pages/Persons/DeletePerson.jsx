import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const URI = "http://localhost:8080/api/persons";

const DeletePerson = ({ personId, onDelete }) => {

  const deletePerson = async (personId) => {
    if (confirm("Desea Eliminar el registro: " + personId + " de la Persona?")) {
      try {
        await axios.delete(`${URI}/delete/${personId}`);
        Swal.fire({
          title: 'Registro eliminado',
          text: 'El registro de la persona se borró satisfactoriamente',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        onDelete(personId);
      } catch (error) {
        console.error(error);
        alert("Error al eliminar el registro.");
      }
    }
  };

  return (
    <button
      className="btn-danger"
      onClick={() => deletePerson(personId)}
    >
      Delete Person
    </button>
  );
};


export default DeletePerson;