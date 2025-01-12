import axios from "axios";
import React, { useEffect, useState } from "react";

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
        console.log(err);
      })

  }

  return (
    <div className="flex gap-2">
      <input className="border border-slate-800 rounded-xl px-5 py-3" type="text" placeholder="Nombre del carro" value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3" onClick={getCars}>Buscar</button>
    </div>

  );
}

export default SearchCar;