import React from "react";
import logo from "../../assests/Logo.png";
const Navbar = () => {
  return (
    <nav className="bg-primary py-[30px] ">
      <div className="max-w-container mx-auto">
        <div className="flex  items-center">
          <div className="w-1/5">
            <picture>
              <img src={logo} alt="navbr logo" />
            </picture>
          </div>
          <div className="w-4/5 ">
            <ul className="flex justify-end text-white items-center">
              <li className="font-semibold px-4">
                <a href="">Home</a>
              </li>
              <li className="font-semibold px-4">
                <a href="">About</a>
              </li>
              <li className="font-semibold px-4">
                <a href="">Service</a>
              </li>
              <li className="font-semibold px-4">
                <a href="">Blog</a>
              </li>
              <li className="font-semibold px-4">
                <a href="">Portfolio</a>
              </li>
              <li className="font-semibold px-4">
                <a href="">Contact</a>
              </li>
              <li className="font-semibold ml-4  px-6 py-[10px] border-2 border-solid border-white">
                <a href="">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
