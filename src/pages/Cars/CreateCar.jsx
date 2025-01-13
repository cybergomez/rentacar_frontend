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
        <div>
            <h1>New Car</h1>
            <form onSubmit={saveCar}>
                <label>Marca:</label>
                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label>Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <Link to="/cars" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >
                    Cancelar
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border
                                     border-green-700 rounded" type="submit" >Save Car</button>
            </form>
        </div>
    );

};


export default CreateCar;