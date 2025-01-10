import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CreateCar from './pages/Cars/CreateCar';
import UpdateCar from './pages/Cars/UpdateCar';
import DeleteCar from './pages/Cars/DeleteCar';
import Persons from './pages/Persons';
import Rent from './pages/Rent';

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
            <Route path="/persons" element={<Persons />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;