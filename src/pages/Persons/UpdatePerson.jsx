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
          title: 'Persona Actualizada!',
          text: 'Persona actualizada con éxito',
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
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className='p-5 grid auto-rows-min gap-4'>
      <h1>Actualizar Persona</h1>
      <form onSubmit={Update} className='grid gap-2 grid-cols-[max-content_auto]'>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Direccion:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label>Telefono:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Link to="/persons" className="btn-danger" >
          Cancelar
        </Link>
        <button className="btn-success" type="submit">Actualizar</button>
      </form>
    </div>
  );
};


export default UpdatePerson;