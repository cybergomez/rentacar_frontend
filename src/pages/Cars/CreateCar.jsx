import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const URI = "http://localhost:8080/api/cars";


const CreateCar = () => {
    //Definir variables
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const saveCar = async () => {
        event.preventDefault()

        await axios
            .post(URI, {
                brand: brand,
                color: color,
                name: name
            })
            .then((response) => {
                // console.log(response.data);
              //  alert("Car created successfully");
                Swal.fire({
                    title: 'Save Car!',
                    text: 'Car created successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })

                navigate("/cars");
            })
            .catch((error) => {
                console.error(error);
                alert("Error creating car");
            });
    }

    return (
        <div className='p-5 grid auto-rows-min gap-4'>
            <h1>Nuevo registro de auto</h1>
            <form onSubmit={saveCar} className='grid gap-2 grid-cols-[max-content_auto]'>
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                <label>Marca:</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required/>
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <Link to="/cars" className="btn-danger" >
                    Cancelar
                </Link>
                <button type="submit" className='btn-sucess'>Crear Carro</button>
            </form>
        </div>
    );

};


export default CreateCar;