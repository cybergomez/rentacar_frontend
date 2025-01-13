import React from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8080/api/rentals";

const UpdateRent = () => {


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
            console.log(response.data);
            alert("Rent updated successfully");
            navigate("/rent");
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    return (
        <div>
            <h1>Update Rent</h1>
        </div>
    );
}

export default UpdateRent;