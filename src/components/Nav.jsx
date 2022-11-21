import React from "react";
import Button from "./Button";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-scroll"

const Nav = ({ isMenu, setIsMenu }) => {
  const links = [
    {
      id: 1,
      link: "home",
    },

    {
      id: 2,
      link: "Portfolio",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contacts",
    },
  ];
  return (
    <>
      <div className="absolute w-full h-24 bg-black text-white z-20">
        <div
          className="flex justify-between items-center max-w-screen-xl
       mx-auto px-4 h-full"
        >
          <div>
            <h1 className="text-thBlue tracking-widest text-3xl">ANTENEH</h1>
          </div>
          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="p-4 uppercase duration-200 hover:text-thBlue cursor-pointer"
                >
                   {link}
                 
                </li>
              ))}
            </ul>
            <Button className="ml-4 capitalize" title="Get Anteneh" />
          </div>
          <div
            onClick={() => setIsMenu(!isMenu)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenu ? <FaTimesCircle size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-blue-800 text-white absolute z-10 left-0 h-fit py-12 lg:hidden 
    flex justify-center text-center text-2xl duration-500 ${
      isMenu ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"
    } `}
      >
        <ul>
          {links.map(({ id, link }) => (
            <li key={id} className="p-4 uppercase cursor-pointer">
              <Link
                onClick={() => setIsMenu(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <Button className="mt-10 capitalize" title="get anteneh" />
        </ul>
      </div>
    </>
  );
};

export default Nav;
