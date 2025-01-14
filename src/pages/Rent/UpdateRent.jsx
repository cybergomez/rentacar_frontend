import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:8080/api/rentals";
const URIcars = "http://localhost:8080/api/cars";
const URIpersons = "http://localhost:8080/api/persons/getAll";

const UpdateRent = () => {

    //Definir variables
    const [user, setUser] = useState("");
    const [car, setCar] = useState("");
    const [days, setDays] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");

    const [cars, setCars] = useState([]);
    const [persons, setPersons] = useState([]);


    const { id } = useParams();

    const navigate = useNavigate();

    const Update = async () => {
        event.preventDefault();
        await axios
            .put(`${URI}/${id}`, {
                user: user,
                car: car,
                days: days,
                price: price,
                total: total
            })
            .then((response) => {
               // console.log(response.data);
               // alert("Rent updated successfully");
                Swal.fire({
                    title: 'Renta Actualizada!',
                    text: 'Renta actualizada satisfactoriamente',
                    icon: 'success',
                    confirmButtonText: 'Listo'
                })                
                navigate("/rent");
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //Traer datos 
    const getCars = async () => {
        await axios
            .get(URIcars)
            .then((res) => {
                setCars(res.data);
               // console.log(res.data);
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
               // console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    useEffect(() => {
        getRentById();
        getCars();
        getPersons();
       
    }, []);

    useEffect(() => {
        const totalRenta = price * days;
        setTotal(totalRenta);

    },[price, days]);

    const getRentById = async () => {
        
        await axios
            .get(`${URI}/${id}`)
            .then((res) => {
                setUser(res.data.user);
                setCar(res.data.car);
                setDays(res.data.days);
                setPrice(res.data.price);
                setTotal(res.data.total);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <h1>Update Rent</h1>
            <form onSubmit={Update}>

                <label>Persona:</label>
                <select value={user} onChange={(e) => setUser(e.target.value)}>
                    <option value="">Seleccione un Cliente</option>
                    {persons.map((item) => (
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

                <label>Dias de Alquiler:</label>
                <input type="number" value={days} onChange={(e) => setDays(e.target.value)} required/>
                <label>Precio:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
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
}

export default UpdateRent;