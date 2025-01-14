import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const URI = "http://localhost:8080/api/rentals";
const URIcars = "http://localhost:8080/api/cars";
const URIpersons = "http://localhost:8080/api/persons/getAll";

const CreateRent = () => {
    
    //Definir variables
    const [user, setUser] = useState(""); //person
    const [car, setCar] = useState("");
    const [days, setDays] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");

    const [cars, setCars] = useState([]);
    const [persons, setPersons] = useState([]);
    
  
    const navigate = useNavigate();

    //Consultar Datos Carros y Personas
    useEffect(() => {
        getCars();
        getPersons();
        const totalRenta = price * days;
        setTotal(totalRenta);
      }, [price, days]);

    //Consultar Cars
    const getCars = async () => {
          await axios
          .get(URIcars)
          .then((res) => {
            setCars(res.data); 
            //console.log(res.data);          
          })
          .catch((err) => {
            console.log(err);
          })
    
      }

    //Consultar Persons
    const getPersons = async () => {
        await axios
        .get(URIpersons)
        .then((res) => {
            setPersons(res.data);    
            //console.log(res.data)       
        })
        .catch((err) => {
          console.log(err);
        })
  
    }

    const saveRent = async () => {
      event.preventDefault()
            await axios
            .post(URI, {
                user: user,
                car: car,
                days: days,
                price: price,
                total: total
            })
            .then((response) => {
                Swal.fire({
                                    title: 'Renta Creada!',
                                    text: 'Renta creada satisfactoriamente',
                                    icon: 'success',
                                    confirmButtonText: 'Listo'
                                })
                navigate("/rent");
            })
            .catch((error) => {
                console.error(error);
                alert("Error creating Rent");
            });
       
        
    }

  return (
    <div>
            <h1>Nueva Renta</h1>
            <form onSubmit={saveRent}>
                <label>Persona:</label>
                <select value={user} onChange={(e) => setUser(e.target.value)}>
                <option value="">Seleccione una persona</option>
                { persons.map((item) => (
                    <option key={item.id} value={item.id}>
                    {item.name}
                    </option>
                ))}
                </select>

                <label>Vehículo:</label>
                <select value={car} onChange={(e) => setCar(e.target.value)}>
                <option value="">Seleccione un vehículo</option>
                {cars.map((item) => (
                    <option key={item.id} value={item.id}>
                    {item.name}
                    </option>
                ))}
                </select>

                <label>Días:</label>
                <input type="number" value={days} onChange={(e) => setDays(e.target.value)} placeholder="Ingrese los dias" required/>
                <label>Precio:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Ingrese el precio" required/>
                <label>Total:</label>
                <input type="number" value={total} readOnly onChange={(e) => setTotal(e.target.value)} required/> 
                <Link to="/rent" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >          
                     Cancelar
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border
                                     border-green-700 rounded" type="submit" >Guardar</button>
            </form>
        </div>

  );
};

export default CreateRent;