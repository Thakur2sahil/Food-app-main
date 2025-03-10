import * as React from "react";
import img from "../../lib/images/ubereats.png";
import * as ReactRouter from "react-router-dom";
import * as Icon from "react-icons/fa";
import axios from "axios";

export default function UserNavber({ setSearchTerm, cartCount }) {
  return (
    <div className="max-w-full mx-auto flex items-center justify-between w-screen">
      <div className="w-full bg-black">
        <nav className="px-2 py-2 text-white flex items-center justify-between">
          <div className="flex items-center">
            <img src={img} alt="#" className="bg-black w-20 h-20" />
            {/* <button className="md:hidden ml-4" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars className="text-white" />
              )}
            </button> */}
            <div className={`hidden md:flex ml-14 w-8/12`}>
              <ul className="flex items-center justify-evenly space-x-6">
                <li className="hover:underline cursor-pointer">
                  <ReactRouter.Link to={"/user/userhome"}>Home</ReactRouter.Link>
                </li>
                <li className="hover:underline cursor-pointer">
                  <ReactRouter.Link to={"/user/about"}>About</ReactRouter.Link>
                </li>
                <li className="hover:underline cursor-pointer">
                  <ReactRouter.Link to={"/user/contact"}>Contact</ReactRouter.Link>
                </li>
                <li>
                  <input
                    type="search"
                    className="outline-none text-black px-2 py-1 rounded"
                    placeholder="Search dishes..."
                    // onChange={handleSearchChange}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
