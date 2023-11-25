import React from "react";

import { GiArson } from "react-icons/gi";
import { Link } from "react-router-dom";
import Donate from "../pages/Donate";

const Header = () => {
  return (
    <div className=" p-4 font-poppins">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center pb-4 border-b-8 sm:border-none sm:pb-0">
        <h1 className="text-5xl font-bold cursor-pointer flex flex-row mb-4">
          Mh
          <GiArson color="rgb(249,115,22)" />
        </h1>
        <ul className="flex space-x-8">
          <Link to="/">
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
            About
          </li>
          <Link to="/emergency">
            <li className="hover:text-red-700 font-bold text-red-500 transition duration-300 cursor-pointer">
              Emergency
            </li>
          </Link>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer ">
            Contact
          </li>
          <Link to="/donate">
            <li className="hover:text-orange-500 transition duration-300 cursor-pointer">
              Donate
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
