import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';

const URI = "http://localhost:8080/api/cars";

const DeleteCar = ({ carId, onDelete }) => {

  const deleteCar = async (carId) => {
    if (confirm("Realmente Quiere Eliminar el Registro: " + carId)) {
      try {
        await axios.delete(`${URI}/${carId}`);
        Swal.fire({
          title: 'Delete Car!',
          text: 'El registro se borró satisfactoriamente',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        onDelete(carId);
      } catch (error) {
        console.error(error);
        alert("Error al eliminar el registro.");
      }
    }
  };

  return (
    <button
      className="btn-danger"
      onClick={() => deleteCar(carId)}
    >
      Delete Car
    </button>
  );

};


export default DeleteCar;