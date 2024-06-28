import React from "react";


import search from "../assets/search.png";

function Navbar() {
 return (
    <section className="bg-white">
      <header>
        <nav className="container mx-auto flex md:flex-col md:flex-row justify-between items-center gap-4 p-4">
          <div className="flex items-center ml-[100px]">
            <span className="font-body text-2xl left-[20px] font-bold text-[#6acd6b]">
              Konji
            </span>
          </div>
          <div className="flex-1  mt-4 md:mt-0">
            <ul className="flex md:flex-col md:flex-row  items-center justify-center gap-4 md:gap-8">
              <li>
                <a href="#" className="text-[#6acd6b] font-body text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Take quiz</a>
              </li>
              <li>
                <a href="#">STITesting Calendar</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center border border-[#6ac66b] rounded-full overflow-hidden w-48 h-10">
              <div className="flex items-center justify-center w-10 h-full">
                <img src={search} alt="search" className="w-3 h-3" />
              </div>
              <input
                type="text"
                placeholder="find lab near you..."
                className="flex-1 h-full text-xs text-[#9f9c9c] bg-transparent pl-2 focus:outline-none"
              />
            </div>
            <button className="ml-4 bg-[#6ac66b] text-white rounded-lg px-4 py-2 hover:bg-[#8fb982]">
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </section>
  );
}


export default Navbar;
