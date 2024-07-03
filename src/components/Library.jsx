import React from "react";
import group7 from "../assets/group7.png";
import group8 from "../assets/group8.png";
import group9 from "../assets/group9.png";
import vector3 from "../assets/vector3.png";
import star from "../assets/star.png";

function Library() {
  return (
      <div className=" w-full p-2 md:p-3 relative md:flex  flex md:w-[1512px] md:h-[873px] justify-center  md:mb-10 my-0">
      <img className=" w-[100px] h-[300px] md:absolute  md:ml-[900px] absolute ml-[300px] mt-[600px] md:mt-[240px]  md:w-[120px] md:h-[300px] overflow-hidden " src={star} />
      <img
        className=" w-[80px] h-[50px] mt-[-10px] ml-[-390px]  absolute flex md:w-[100px] md:h-[50.366px] shrink-0 bg-cover bg-no-repeat md:absolute z-[293] md:mt-[px]  md:ml-[-1400px]"
        src={vector3}
      />
      <div className="md:flex items-center  justify-center md:w-[150px] md:flex-row ml-[-0px] flex-col md:gap-[72px] md:items-center flex-nowrap md:absolut md:mt-[100px] md:mr-[100px] mb-0 md:ml-[-1150px]">
        <span className="md:h-[39px] md:absolut md:ml-[980px] md:mt-[-550px] md: flex mt-[70px] ml-[25%] shrink-0 basis-auto font-heading md:text-[32px] text-[25px] font-semibold md:leading-[39px] leading-[30px]  text-[#000435] relative text-left whitespace-nowrap z-[44]">
          Safe sex library
        </span>
        <div className=" p-2   md:flex-row flex-col mt-[100px] md:ml-[0px] md:absolute md:mt-[100px] md:w-[150px]  gap-[16px] shrink-0 md:flex">
          <div className="md:w-[370px]  justify-center items-center md:h-[427px] hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden mb-[40px] shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className="md:flex w-[179px] justify-center flex flex-col gap-[24px] items-center flex-nowrap relative z-[4] mt-[64px] mr-0 mb-0 ml-[124px]">
              <img
                className=" flex md:w-[179px] ml-[-100px]  md:h-[246.42px] shrink-0 bg-[url(../assets/images/9433de18-5b6a-4dba-bee3-f63ac5b46219.png)] bg-[length:100%_100%] bg-no-repeat relative z-[5]"
                src={group7}
              />
              <button className="md:h-[30px] ml-[-100px] shrink-0 basis-auto font-body md:text-[20px] text-[20px] mb-3 font-normal md:leading-[30px] text-[#000435] relative text-left whitespace-nowrap z-[6]">
                STI Quiz
              </button>
            </div>
          </div>
          <div className="md:w-[370px] md:h-[427px] hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden mb-[40px] shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className="md:flex flex md:w-[179px] flex-col gap-[24px] items-center flex-nowrap relative z-[4] md:mt-[64px] md:mr-0 md:mb-0 md:ml-[124px]">
              <img
                className="md:w-[179px] h-[246.42px] p-[20px]  mt-[10px] md:h-[246.42px] shrink-0 bg-[url(../assets/images/9433de18-5b6a-4dba-bee3-f63ac5b46219.png)] bg-[length:100%_100%] bg-no-repeat relative z-[5]"
                src={group8}
              />
              <button className="md:h-[30px]  hover:bg-[#eef8eb] text-[20px] mb-3 shrink-0 basis-auto font-body md:text-[20px] font-normal md:leading-[30px] text-[#000435] relative text-left whitespace-nowrap z-[6]">
                Myth Busters
              </button>
            </div>
          </div>

          <button className="md:w-[370px]   md:h-[427px]  hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className=" md:w-[250px]   md:flex-col relative z-[4] md:mt-[64px] md:mr-16 md:mb-[64px] md:ml-[40px]">
              <img
                className="md:w-[350px]   md:h-[300.42px]  shrink-0  bg-[length:100%_100%]  bg-no-repeat relative z-[5]"
                src={group9}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default Library;
