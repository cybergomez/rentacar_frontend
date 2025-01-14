import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const URI = "http://localhost:8080/api/cars";

const SearchCar = ({ onSearch }) => {


  const [name, setName] = useState("");
  const [car, setCar] = useState([]);


  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {

    const endpoint = name.trim() === '' ? URI : `${URI}/findbyname/${name}`;

    await axios
      .get(endpoint)
      .then((res) => {
        setCar(res.data);
        onSearch(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          Swal.fire({
            title: 'Search Car!',
            text: 'No existe el carro buscado',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
          });
          return;
        }
        else {
          console.log(err);
        }
      })
  }

  return (
    <div className="flex gap-2">
      <input type="text" placeholder="Nombre del carro" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className="bg-slate-800 btn" onClick={getCars}>Buscar</button>
    </div>

  );
}

export default SearchCar;