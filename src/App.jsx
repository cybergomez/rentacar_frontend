import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Persons from './pages/Persons';
import CreateCar from './pages/Cars/CreateCar';
import UpdateCar from './pages/Cars/UpdateCar';
import DeleteCar from './pages/Cars/DeleteCar';
import CreatePerson from './pages/Persons/CreatePerson';
import UpdatePerson from './pages/Persons/UpdatePerson';
import DeletePerson from './pages/Persons/DeletePerson';
import Rent from './pages/Rent';
import CreateRent from './pages/Rent/CreateRent';
import DeleteRent from './pages/Rent/DeleteRent';
import UpdateRent from './pages/Rent/UpdateRent';

function App() {
  return (
    <Router>
      <div className="min-h-[100vh] flex flex-col">
        <Navbar />
        <div className="flex-1 flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/create-car" element={<CreateCar />} />
            <Route path="/edit-car/:id" element={<UpdateCar />} />
            <Route path="/delete-car/:id" element={<DeleteCar />} />

            <Route path="/create-person" element={<CreatePerson />} />
            <Route path="/edit-person/:id" element={<UpdatePerson />} />
            <Route path="/delete-person/:id" element={<DeletePerson />} />
            <Route path="/persons" element={<Persons />} />

            <Route path="/create-rent" element={<CreateRent />} />
            <Route path="/edit-rent/:id" element={<UpdateRent />} />
            <Route path="/delete-rent/:id" element={<DeleteRent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
