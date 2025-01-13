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
            console.log(res);                   
        })
        .catch((err) =>{
            console.log(err);
        })

  }

  return (
    <div className="flex gap-2">
      <input className="border border-slate-800 rounded-xl px-5 py-3" type="text" placeholder="Nombre de la persona " value={name} onChange={(e) => setName(e.target.value)}></input>
      <button className="bg-slate-800 darK:bg-slate-200 text-slate-200 darK:text-slate-900 rounded-xl px-5 py-3" onClick={getPersons}>Buscar</button>
    </div>

  );
}

export default SearchPerson;