import React from "react";

const URI = "http://localhost:8080/api/cars";

const SearchCar = () => {

  return (
    <div className="flex gap-2">
      <input className="border border-slate-800 rounded-xl px-5 py-3" type="text" placeholder="Nombre del carro"></input>
      <button className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3">Buscar</button>
    </div>

  );
}

export default SearchCar;