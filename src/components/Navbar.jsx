import React, { useState } from "react";
import search from "../assets/search.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white ">
      <nav className="mx-auto justify-between flex items-center md:w-full w-[400px] md:gap-4 p-4">
        <div>
          <div className="font-body md:ml-[65px] font-bold md:text-2xl text-xl text-[#6acd6b] w-16">
            Konji
          </div>
        </div>
       
        <div className="md:flex md:flex-row flex-col flex items-center mt- md:mt-0">
        <div className=" md:hidden items-center border w-[120px] flex border-[#6ac66b] rounded-full overflow-hidden w-27 h-8">
            <div className="flex p-1 items-center justify-center w-5  h-full">
              <img src={search} alt="search" className="w-2 absolute ml-[10px] h-2" />
            </div>
            <input
              type="text"
              placeholder="find lab near you..."
              className="flex-1 h-full  text-[9px] ml-[10px] text-[#9f9c9c] bg-transparent pl-2 focus:outline-none "
            />
          </div>
        </div>

        <div className="lg:hidden mx-4 flex items-center">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        
        
        <div className={`lg:flex flex lg:items-center  mx-4 lg:justify-end ${menuOpen ? "flex" : "hidden"}  bg-white min-h-[5vh]  md:left-[-10px] top-[19%] md:w-full w-[10px]  px-4  md:flex md:flex-row md:justify-between lg:flex lg:flex-row`}>
          <ul className="flex  flex-col md:flex-row md:items-center  ml-[-25px]  justify-center gap-2 md:gap-8">
            <li>
              <a className="hover:text-[#6acd6b] md:text-[16px] text-[10px]" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#6acd6b] md:text-[16px] text-[10px]" href="#">
                Take quiz
              </a>
            </li>
            <li>
              <a className="hover:text-[#6acd6b] md:text-[16px] text-[10px]" href="#">
                STITesting Calendar
              </a>
            </li>
            <li>
              <a className="hover:text-[#6acd6b] md:text-[16px] text-[10px]" href="#">
                Library
              </a>
            </li>
            <li>
              <a className="hover:text-[#6acd6b] md:text-[16px] text-[10px]" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
        
        {/* Search and Sign In */}
        <div className="md:flex md:flex-row flex-col flex items-center mt-4 md:mt-0">
          <div className=" hidden items-center border md:flex border-[#6ac66b] rounded-full overflow-hidden w-48 h-10">
            <div className="flex items-center justify-center w-10  h-full">
              <img src={search} alt="search" className="w-3 h-3" />
            </div>
            <input
              type="text"
              placeholder="find lab near you..."
              className="flex-1 h-full text-xs text-[#9f9c9c] bg-transparent pl-2 focus:outline-none "
            />
          </div>
          <button className="ml-2 hidden lg:flex bg-[#6ac66b] text-white rounded-lg mt-2 px-4 py-2 hover:bg-[#8fb982] whitespace-nowrap text-base">
            Sign In
          </button>
        </div>
        
      </nav>
    </header>
  );
}

export default Navbar;

