import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const URI = "http://localhost:8080/api/rentals";

const SearchRent = ({ onSearchRent }) => {


    const [id, setId] = useState("");
    const [rent, setRent] = useState([]);

    useEffect(() => {
        getRents();
    }, []);


    const getRents = async () => {

        const endpoint = id.trim() === '' ? URI : `${URI}/${id}`;

        await axios
            .get(endpoint)
            .then((res) => {

                let data = res.data;
                data = Array.isArray(data) ? data : [data];

                console.log(data);

                if (data.length === 0 || (data.length === 1 && data[0] === '')) {
                    //alert("No se encontraron resultados.");
                    Swal.fire({
                        title: 'Sin resultados',
                        text: 'No se encontraron rentas para el criterio buscado.',
                        icon: 'warning',
                        confirmButtonText: 'Aceptar'
                    });
                    return;
                }


                setRent(data);
                onSearchRent(data);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    Swal.fire({
                        title: 'Sin resultados',
                        text: 'No se encontraron rentas para el criterio buscado.',
                        icon: 'warning',
                        confirmButtonText: 'Aceptar'
                    });
                    return;
                }
                else {
                    console.log(err);

                }
            })

    }

    return (
        <div>
            <div className="flex gap-2">
                <input className="border border-slate-800 rounded-xl px-5 py-3"
                    type="number" placeholder="Id del Alquiler" value={id}
                    onChange={(e) => setId(e.target.value)}></input>
                <button className="bg-slate-800 darK:bg-slate-200 text-slate-200 
                    darK:text-slate-900 rounded-xl px-5 py-3"
                    onClick={getRents}>Buscar</button>
            </div>
        </div>
    );

}

export default SearchRent;