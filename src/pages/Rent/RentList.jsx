import React, { useEffect, useState } from 'react';
import SearchRent from './SearchRent'
import TableRents from './TableRent'
import axios from 'axios';

const URI = "http://localhost:8080/api/rentals";
const URIcars = "http://localhost:8080/api/cars";
const URIpersons = "http://localhost:8080/api/persons/getAll";


const RentList = () => {
    
    const [rent, setRent] = useState([]);

    //
     const [user, setUser] = useState([]); //person
     const [car, setCars] = useState([]);
    //

    useEffect(() => {
        getCars();
        getPersons();
      }, []);

    //Consultar Cars
    const getCars = async () => {
          await axios
          .get(URIcars)
          .then((res) => {
            setCars(res.data); 
            console.log(res.data);          
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
            setUser(res.data);    
            console.log(res.data)       
        })
        .catch((err) => {
          console.log(err);
        })
  
    }

    const handleDeleteRent = (rentId) => {
        console.log("Sending by table:", rentId, rent) // Remove in production
        const updatedRent = rent.filter((c) => c.id !== rentId);
        setRent(updatedRent);
    };

    return (
        <div className='grid auto-rows-min gap-2 text-center'>
            <h2> Rent List </h2>
            <SearchRent onSearchRent={ setRent }/>
            <TableRents rents={ rent } cars ={car} users={user} onDeleteRent={handleDeleteRent}/>
        </div>
    );
}

export default RentList;