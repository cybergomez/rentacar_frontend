import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const URI = "http://localhost:8080/api/persons";


const UpdatePerson = (props) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    
    const { id } = useParams();

    const navigate = useNavigate();

    const Update = async () => {
        event.preventDefault();
        await axios
        .put(`${URI}/${id}`, {
            name: name,
            address: address,
            phone: phone
        })
        .then((response) => {
            console.log(response.data);
            alert("Person updated successfully");
            navigate("/persons");
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    useEffect(() => {
        getUserById()
    }, []);

    const getUserById = async () => {
        event.preventDefault();
        await axios
            .get(`${URI}/${id}`)
            .then((res) => {
                setName(res.data.name);
                setAddress(res.data.address);
                setPhone(res.data.phone);
            })
            .catch((error)=>{
                console.log(error);
            });

    }

    return (
        <div>
            <div>
                <h1>Actualizar Persona</h1>            
                <form onSubmit={Update}>

                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Direccion:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label>Telefono:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button type="submit">Actualizar Persona</button>
                </form>
            </div>
        </div>
    );
};


export default UpdatePerson;