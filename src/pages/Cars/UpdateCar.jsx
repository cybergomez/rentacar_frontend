import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const URI = "http://localhost:8080/api/cars";


const UpdateCar = (props) => {
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [name, setName] = useState("");
    
    const { id } = useParams();

    const navigate = useNavigate();

    const Update = async () => {
        event.preventDefault();
        await axios
        .put(`${URI}/${id}`, {
            brand: brand,
            color: color,
            name: name
        })
        .then((response) => {
            console.log(response.data);
            alert("Car updated successfully");
            navigate("/cars");
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
                setBrand(res.data.brand);
                setColor(res.data.color);
                setName(res.data.name);
            })
            .catch((error)=>{
                console.log(error);
            });

    }


    return (
        <div>
            <div>
                <h1>Actualizar Carro</h1>            
                <form onSubmit={Update}>
                    <label>Marca:</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <label>Color:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit">Actualizar Carro</button>
                </form>
            </div>
        </div>
    );

};


export default UpdateCar;