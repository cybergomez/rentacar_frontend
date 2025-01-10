import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8080/api/cars";

const CreateRent = () => {
    
    
    //Definir variables
    const [user, setUser] = useState("");
    const [car, setCar] = useState("");
    const [days, setDays] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");
  
    const navigate = useNavigate();

    const saveRent = async () => {

        await axios
            .post(URI, {
                user: user,
                car: car,
                days: days,
                price: price,
                total: total
            })
            .then((response) => {
                console.log(response.data);
                alert("Rent created successfully");
                navigate("/rent");
            })
            .catch((error) => {
                console.error(error);
                alert("Error creating Rent");
            });
    }

  return (
    <div>
            <h1>New Rent</h1>
            <form onSubmit={saveRent}>
                <label>User:</label>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                <label>Car:</label>
                <input type="text" value={car} onChange={(e) => setCar(e.target.value)} />
                <label>Days:</label>
                <input type="text" value={days} onChange={(e) => setDays(e.target.value)} />
                <label>Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Total:</label>
                <input type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
                <button type="submit">Save Rent</button>
            </form>
        </div>

  );
}

export default CreateRent;