import React from 'react';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import CreateCar from '../pages/Cars/CreateCar';
import UpdateCar from '../pages/Cars/UpdateCar';
import Persons from '../pages/Persons';
import Rent from '../pages/Rent';


const Navbar = () => {
    return(
        <HashRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>                        
                        </li>
                        <li>
                            <Link to="/rent">Rent</Link>
                        </li>
                        <li>
                            <Link to="/cars">Cars</Link>                    
                        </li>
                        <li>
                            <Link to="/persons">Persons</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}/>    
                    <Route path="/home" element={<Home />}/>
                    <Route path="/rent" element={<Rent />}/>
                    <Route path="/cars" element={<Cars />}/>
                    <Route path="/create-car" element={<CreateCar />} />
                    <Route path="/edit-car/:id" element={<UpdateCar />}/>
                    
                    <Route path="/persons" element={<Persons />}/>
                    <Route path="/persons" element={<Persons />}/>
                    
                </Routes>
            </div>


        </HashRouter>

    );
};

export default Navbar;
