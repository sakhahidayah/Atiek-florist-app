import React, { useState } from "react";
import "flowbite";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white  border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex flex-row items-center gap-3">
          <img src="https://i.pinimg.com/1200x/fa/13/1e/fa131ea0dd87eb24f17f19ae76e9eaef.jpg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#C7A700]">ATIEK FLORIST</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-[#C7A700] focus:outline-none focus:ring-2  hover:text-white  " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:opacity-100 md:max-h-screen overflow-hidden transition-all duration-700 ease-in-out w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white border-[#C7A700]">
            <li>
              <a href="/home" className="block py-2 px-3  font-semibold text-lg hover:text-[#C7A700]">
                Home
              </a>
            </li>
            <li>
              <a href="/catalog" className="block py-2 px-3  font-semibold text-lg hover:text-[#C7A700]">
                Katalog
              </a>
            </li>
            <li>
              <a href="/formulir" className="block py-2 px-3  font-semibold text-lg hover:text-[#C7A700]">
                Formulir
              </a>
            </li>
            <li>
              <a href="/lacak" className="block py-2 px-3  font-semibold text-lg hover:text-[#C7A700]">
                Lacak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
