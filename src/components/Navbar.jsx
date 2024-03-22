import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-transparent4.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Function to toggle navigation state and close the mobile menu
  const toggleNav = () => {
    setNav(!nav);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setNav(false);
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8 mx-auto max-w-[1500px] h-[8vh]'>
      <div className='flex items-center justify-between h-16 lg:h-20 bg-[#fff]/30 rounded-b-3xl shadow-lg px-4'>

        {/* Name on the left */}
        <div className="text-white text-xl sm:text-2xl">
          <a href="/home" className="font-bold"><span><img className='' src={logo} alt="logo" /></span></a>
        </div>

        {/* Navigation list on the right */}
        <ul className='text-gray-700 font-medium hidden lg:flex lg:items-center lg:justify-end lg:space-x-10 text-2xl'>
          <li className="p-2">
            <NavLink to="/" activeClassName="selected" onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/about" activeClassName="text-white" onClick={closeMobileMenu}>About</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/portfolio" activeClassName="text-white" onClick={closeMobileMenu}>Portfolio</NavLink>
          </li>
          <li className="p-2">
            <NavLink to="/contact" activeClassName="text-white" onClick={closeMobileMenu}>Contact</NavLink>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div onClick={toggleNav} className='block md:hidden text-white z-40'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile navigation */}
        <div className={nav ? 'z-30 text-gray-300 fixed h-[50%] left-0 top-0 w-full bg-[#202121] ease-in-out duration-500'
          : 'fixed left-[-100%]'}>
          <div className='bg-[#ffd700b2]'>
            <img className='' src={logo} alt="logo" />
          </div>
          <ul className='p-8 text-4xl ml-20'>
            <li className="p-2">
              <NavLink to="/" activeClassName="selected" onClick={closeMobileMenu}>Home</NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/about" activeClassName="text-white" onClick={closeMobileMenu}>About</NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/portfolio" activeClassName="text-white" onClick={closeMobileMenu}>Portfolio</NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/contact" activeClassName="text-white" onClick={closeMobileMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
