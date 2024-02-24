import React from "react";
import image from "../images/bbclogo.png";

export const Navbar = () => {
  return (
    <div>
      <nav className="grid grid-cols-3 items-center justify-center font-semibold h-16 w-full bg-black text-white">
        <div className="flex ml-32">
          <img className="h-11" src={image} alt="bbclogo" />
          <button className="flex items-center justify-center ml-4 hover:border-b border-white-600">
            <i className="fa-solid fa-user  text-2xl"></i>
            <p className="pl-3 text-sm">Signin</p>
          </button>
        </div>
        <div>
          <ul className="flex list-none">
            <li className="hover:border-b border-white-600">Home</li>
            <li className="ml-8 hover:border-b border-white-600">News</li>
            <li className="ml-8 hover:border-b border-white-600">Sport</li>
            <li className="ml-8 hover:border-b border-white-600">Earth</li>
            <li className="ml-8 hover:border-b border-white-600">Reel</li>
            <li className="ml-8 hover:border-b border-white-600">WorkLife</li>
            <li className="ml-8 hover:border-b border-white-600">Travel</li>
            <li className="ml-8 hover:border-b border-white-600">Culture</li>
          </ul>
        </div>
        <div className="flex justify-end mr-40 ml-12">
          <button className="flex bg-gray-800 pl-3 pt-1 pb-1 w-48 hover:bg-gray-700">
            <i className="pt-1 pr-2 fa-solid fa-magnifying-glass"></i>
            <p>Search BBC</p>
          </button>
        </div>
      </nav>
    </div>
  );
};
