import axios from 'axios';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
        <div>
            <h1>New Person</h1>
            <form onSubmit={savePerson}>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Direccion:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>Telefono:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Crear Persona</button>
            </form>
        </div>
    );

};


export default CreatePerson;