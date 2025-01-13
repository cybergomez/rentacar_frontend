import axios from "axios";
import React, { useEffect, useState } from "react";

const URI = "http://localhost:8080/api/rentals";

const SearchRent = ({ onSearchRent }) => {


    const [id, setId] = useState("");
    const [rent, setRent] = useState([]);

    useEffect(() => {
        getRents();
    }, []);


    const getRents = async () => {

        const endpoint = id.trim() === '' ? URI : `${URI}/${id}`;

        //        console.log(endpoint);

        await axios
            .get(endpoint)
            .then((res) => {

                let data = res.data;
                data = Array.isArray(data) ? data : [data];

               // console.log(data);
                setRent(data);
                onSearchRent(data);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div>
            <div className="flex gap-2">
                <input className="border border-slate-800 rounded-xl px-5 py-3"
                    type="text" placeholder="Id del Alquiler" value={id}
                    onChange={(e) => setId(e.target.value)}></input>
                <button className="bg-slate-800 darK:bg-slate-200 text-slate-200 
                    darK:text-slate-900 rounded-xl px-5 py-3"
                    onClick={getRents}>Buscar</button>
            </div>
        </div>
    );

}

export default SearchRent;