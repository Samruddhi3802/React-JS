import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const navLinkStyles = ({ isActive }) => 
    `transition-colors duration-300 hover:text-pink-400 ${isActive ? 'text-pink-500 border-b-2 border-pink-500' : 'text-slate-600'}`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-pink-600">
        <NavLink to="/">Meesho</NavLink>
      </h1>

      <div className="flex gap-8 text-lg font-medium">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/products" className={navLinkStyles}>
          Products
        </NavLink>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="bg-slate-100 px-4 py-1 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-300 transition-all"
        />
      </div>
    </nav>
  );
};