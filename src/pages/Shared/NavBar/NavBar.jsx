import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = <>
  
  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/" >Home</NavLink></li>
  <li><NavLink  className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-1' : 'font-bold mx-1'
            } to="/about">about</NavLink></li>
  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/project">project</NavLink></li>

  <li><NavLink className={({ isActive }) =>
              isActive ? 'bg-[#59C6D2] font-bold mx-2' : 'font-bold mx-2'
            } to="/contact">contact</NavLink></li>

  
 
  
 
</>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">MD<span className='text-[red]'>Didar</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end">
  <button className='btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-red hover:text-red'><a href="/sample.txt" download="Sample_File.txt" className="download-link">Download CV</a></button>
  </div>
</div>
  );
};

export default NavBar;