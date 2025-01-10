import React from "react";

const URI = "http://localhost:8080/api/cars";

const SearchCar = () => {

    return(
        <div>
            <label>Buscar por Nombre: </label>
            <input placeholder="Mazda"></input>  
            <button>Buscar</button>
        </div>

    );
}

export default SearchCar;