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
      .then(() => {
        Swal.fire({
          title: 'Carro actualizado',
          text: 'Carro actualizado con éxito',
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
    <div className='p-5 grid auto-rows-min gap-4'>
      <h1>Actualizar Vehiculo</h1>
      <form onSubmit={Update} className='grid gap-2 grid-cols-[max-content_auto]'>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Marca:</label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
        <label>Color:</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
        <Link to="/cars" className="btn-danger" >
          Cancelar
        </Link>
        <button className="btn-success" type="submit">Actualizar</button>
      </form>
    </div>
  );

};


export default UpdateCar;