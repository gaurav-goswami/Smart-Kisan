import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import SubLink from "./SubLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Daily Price", path: "/commodity/commodity-price" },
    { name: "Lab Test", path: "/lab-test" },
    { name: "Sell", path: "/commodity/sell-commodity" },
    { name: "Buy", path: "/commodity/buy-commodity" },
    { name: "Store", path: "/farmer/store" },
    { name: "Farmer Education", path: "/farmer/education" },
    { name: "Tips", path: "/farming/tips" },
    { name: "News", path: "/farming/news" },
  ];

  const authLink = [
    { name: "Sign Up", path: "/auth/signup" },
    { name: "Login", path: "/auth/login" },
  ];

  return (
    <>
      <nav className="w-full bg-white fixed top-0 flex justify-between px-6 py-2 items-center h-[40px] z-10">
        <Link to="/" className="text-2xl font-bold text-[#266f38]">Smart-Kisan</Link>

        {isOpen ? (
          <IoIosClose
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <BiMenuAltRight
            className="text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}

        <div
          className={`absolute p-4 h-screen left-0 top-[100%] bottom-0 bg-white ${
            isOpen ? "w-[250px] opacity-1" : "w-0 opacity-0"
          } transition-all duration-200 ease-linear`}
        >
          {navLinks.map((item, index) => {
            return <SubLink {...item} key={index} isOpen={isOpen} />;
          })}

          {
            authLink.map((item, index) => {
              return <SubLink {...item} key={index} isOpen={isOpen} />
            })
          }
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
