import React from "react";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#282828] py-[20px] border-b-[3px] border-yellowBorder">
      <div className="max-w-container mx-auto">
        <div className="flex">
          <div className="w-3/4 flex ">
            <p className="text-white pr-[50px] border-r-2 border-[#5C6A92]">
              <span>
                <AiOutlineMail className="inline-block " />{" "}
              </span>
              <span>mail@yourcompany.com</span>
            </p>
            <p className="text-white pl-[50px]">
              <span>
                <BsFillTelephoneFill className="inline-block " />{" "}
              </span>
              <span>+896 120 5889 (Toll free)</span>
            </p>
          </div>
          <div className="w-1/4">
            <p className="text-white">
              <ul className="flex justify-end">
                <li className="px-2 cursor-pointer">
                  <FaFacebookF />
                </li>
                <li className="px-2 cursor-pointer">
                  <BsTwitter />
                </li>
                <li className="px-2 cursor-pointer">
                  <FaLinkedinIn />
                </li>
                <li className="px-2 cursor-pointer">
                  <AiOutlineInstagram />
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
