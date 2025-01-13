import React, { useEffect, useState } from 'react';
import SearchRent from './SearchRent'
import TableRents from './TableRent'
import axios from 'axios';

const URI = "http://localhost:8080/api/rentals";
const URIcars = "http://localhost:8080/api/cars";
const URIpersons = "http://localhost:8080/api/persons/getAll";


const RentList = () => {

  const [rent, setRent] = useState([]);
  const [user, setUser] = useState([]);
  const [car, setCars] = useState([]);

  useEffect(() => {
    getCars();
    getPersons();
  }, []);

  const getCars = async () => {
    await axios
      .get(URIcars)
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getPersons = async () => {
    await axios
      .get(URIpersons)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  const handleDeleteRent = (rentId) => {
    const updatedRent = rent.filter((c) => c.id !== rentId);
    setRent(updatedRent);
  };

  return (
    <div className='mt-[20px] grid gap-[20px] auto-rows-min text-center'>
      <SearchRent onSearchRent={setRent} />
      <TableRents rents={rent} cars={car} users={user} onDeleteRent={handleDeleteRent} />
    </div>
  );
}

export default RentList;