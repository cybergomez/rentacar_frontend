import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        .put(`${URI}/update/${id}`, {
            name: name,
            address: address,
            phone: phone
        })
        .then((response) => {
            console.log(response.data);
            Swal.fire({
                title: 'Update Person!',
                text: 'Person updated successfully',
                icon: 'success',
                confirmButtonText: 'Done'
            })
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
            .get(`${URI}/get/${id}`)
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
                    <Link to="/persons" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >
                        Cancelar
                    </Link>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border
                                     border-green-700 rounded" type="submit">Update Person</button>
                </form>
            </div>
        </div>
    );
};


export default UpdatePerson;