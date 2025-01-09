import axios from 'axios';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const URI = "http://localhost:8080/api/cars";


const CreateCar = () => {
    //Definir variables
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const saveCar = async () => {
        event.preventDefault();

            await axios
                .post(URI, {
                    brand: brand,
                    color: color,
                    name: name
                })
                .then((response) => {
                    console.log(response.data);
                    alert("Car created successfully");
                    navigate("/cars");
                })
                .catch((error) => {
                    console.error(error);
                    alert("Error creating car");
                });   
        //Opcion 1
        // try {
        //     const insertCar = await axios({
        //         method: 'POST',
        //         url: URI,
        //         data: {
        //             brand: brand,
        //             color: color,
        //             name: name
        //         },    
        //     });

            
        //     console.log(insertCar.status);

        //     if(insertCar.status === 201){
        //         alert("Carro creado con exito");                
        //     }
        // } catch (error) {
        //     setError(error.message);
        // }

    }

    return (
        <div>
            <h1>Crear Carro</h1>
            <form onSubmit={saveCar}>
                <label>Marca:</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Crear Carro</button>
            </form>
        </div>
    );

};


export default CreateCar;