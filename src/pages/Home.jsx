import React from 'react';
import Hero from '../assets/images/hero.jpg';
import { Link } from "react-router-dom";

const Home = () => {
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
        <p className='text-white'>Tu aventura comienza aquí, nosotros ponemos las ruedas.</p>
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