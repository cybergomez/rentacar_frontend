import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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
                //  console.log(response.data);
                //alert("Car updated successfully");
                Swal.fire({
                    title: 'Update Car!',
                    text: 'Car updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                navigate("/cars");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUserById();
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
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>
            <div>
                <h1>Update Cars</h1>
                <form onSubmit={Update}>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                    <label>Marca:</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required/>
                    <label>Color:</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required/>
                    <Link to="/cars" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >
                        Cancelar
                    </Link>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border
                                     border-green-700 rounded" type="submit">Update Car</button>
                </form>
            </div>
        </div>
    );

};


export default UpdateCar;