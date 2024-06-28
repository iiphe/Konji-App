import React from "react";


import search from "../assets/search.png";

function Navbar() {
  return (
    <section className="bg-white">
      <header>
        
        <nav className="flex flex-row container mx-auto md:h-full  w-[1512px] h-[] justify-between items-center gap-[80px] item-start relative">
          <div>
            <span
              className="w-16 left-[106px] p-1 h-[29px] shrink-0 basis-auto font-body text-[24px] font-bold leading-[29px] text-[#6acd6b] relative text-left whitespace-nowrap z-[129]"
              
            >
                Konji
                </span>
          </div>
          <div>
            <ul className="flex items-center flex-row justify-center  flex-nowrap relative  gap-[1vw] ml-20">
              <span className="text-[#6acd6b] font-body leading-[21px] shrink-0 basis-auto text-[17px] relative text-left whitespace-nowrap  p-1">
                <a href="#">Home</a>
              </span>
              <li className="">
                <a href="#">Take quiz</a>
              </li>
              <li>
                <a className="" href="#">STITesting Calender</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="flex mr- ">
            <div className="main-container mt-2 w-[166px] h-[40px] rounded-[100px] border-solid border border-[#6ac66b] relative box-content overflow-hidden mx-auto my-0">
              <div className="flex w-[105px] gap-[4px] justify-center items-center flex-nowrap relative mt-[10px] mr-0 mb-0 ml-[14px]">
                <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[1]">
                  <span>
                    <img
                      className="w-[11.349px]  h-[11.349px] bg-no-repeat relative z-[2] mt-[1.313px] mr-0 mb-0 ml-[1.313px]"
                      src={search}
                    />
                  </span>
                </div>

                <span className="h-[15px] shrink-0 basis-auto font-['Poppins'] text-[10px] font-normal leading-[15px] text-[#9f9c9c] relative text-left whitespace-nowrap z-[3]">find lab near you...</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="absolute w-full h-full font-body top-0 left-0 pl-[34px] text-[10px] text-[#9f9c9c]  bg-transparent border-none focus:outline-none"
              />
            </div>
            <div>
              <span className=" ml-4 hover:bg-[#8fb982] flex pt-[10px] w-[124px] pr-[10px]  pl-[20px] gap-[10px] justify-center items-center flex-nowrap bg-[#6ac66b] rounded-lg relative mb-2 mt-2 pb-2 mx-auto my-0">
                <button className="  h-[21px] shrink-0 basis-auto font-body text-[13px] font-semibold leading-[21px] items-center text-[#fff] relative text-left whitespace-nowrap pr-4 pb-2 pl-1">
                  Sign In
                </button>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}


export default Navbar;
