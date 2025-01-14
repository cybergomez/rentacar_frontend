import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const URI = "http://localhost:8080/api/persons/create";


const CreatePerson = () => {
  //Definir variables
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const savePerson = async () => {
    event.preventDefault();

    await axios
      .post(URI, {
        name: name,
        address: address,
        phone: phone

      })
      .then((response) => {
        console.log(response.data);
        alert("Person created successfully");
        navigate("/persons");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating person");
      });
  }

  return (
    <div className='p-5 grid auto-rows-min gap-4'>
      <h1>Nuevo registro de persona</h1>
      <form onSubmit={savePerson} className='grid gap-2 grid-cols-[max-content_auto]'>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Direccion:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Telefono:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Link to="/persons" className="btn-danger" >
          Cancelar
        </Link>
        <button type="submit" className='btn-success'>Crear Persona</button>
      </form>
    </div>
  );

};


export default CreatePerson;