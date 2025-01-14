import React from 'react';
import Hero from '../assets/images/hero.jpg';
import { Link } from "react-router-dom";

import useDateTimeLocation from '../hooks/useDateTimeLocation'

const Home = () => {

  const { dateTime, location } = useDateTimeLocation();

  return (
    <div className="w-full bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Hero})`,
      }}
    >
      <div
        className='flex flex-col  gap-2 h-full bg-gradient-to-r from-black to-50% to-transparent pt-[100px] pl-[100px]'
      >
        <p className='text-white'>Bienvenido a,</p>
        <h1 className='text-white text-[5rem]'>Renta Car</h1>
        <p className='text-white'>{dateTime.toLocaleString()}</p>
        <p className='text-white'>Tu aventura comienza aquí, nosotros ponemos las ruedas.</p>
        <h2 className='text-white'>Te encuentras ubicado en:</h2>
        {location.error ? (
          <p className='text-white'>Error: {location.error}</p>
        ) : location.lat && location.lon ? (
          <p className='text-white'>
            Latitud: {location.lat}, Longitud: {location.lon}
          </p>
        ) : (
          <p className='text-white'>Obteniendo ubicación...</p>
        )}
        <Link to={'/rent'}>
          <button className='btn bg-slate-50 text-slate-800'>
            Rent a car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;