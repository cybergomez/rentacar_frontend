import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const links = [
        { path: "/home", label: "Inicio" },
        { path: "/rent", label: "Rentas" },
        { path: "/cars", label: "Carros" },
        { path: "/persons", label: "Personas" },
    ];

    return (
        <nav className='h-[50px] bg-black grid items-center'>
            <ul className='flex justify-center gap-4'>
                {links.map(link => (
                    <li key={link.path}>
                        <Link to={link.path}>
                            <p className="font-medium text-white">{link.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;