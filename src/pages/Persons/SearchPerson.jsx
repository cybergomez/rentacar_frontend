import axios from "axios";
import React, { useEffect, useState } from "react";

const URI = "http://localhost:8080/api/persons";

const SearchPerson = ({ onSearch }) => {


  const [name, setName] = useState("");
  const [person, setPerson] = useState([]);


  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {

    const endpoint = name.trim() === '' ? `${URI}/getAll` : `${URI}/findByNameContaining/${name}`;

    await axios
      .get(endpoint)
      .then((res) => {
        setPerson(res.data);
        onSearch(res.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          Swal.fire({
            title: 'Search Person!',
            text: 'No la persona buscada',
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
      <input type="text" placeholder="Nombre de la persona " value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className="bg-slate-800 btn" onClick={getPersons}>Buscar</button>
    </div>

  );
}

export default SearchPerson;