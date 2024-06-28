import React from "react";
import group7 from "../assets/group7.png";
import group8 from "../assets/group8.png";
import group9 from "../assets/group9.png";
import vector3 from "../assets/vector3.png";
import star from "../assets/star.png";

function Library() {
  return (
      <div className=" w-[1512px] h-[873px] justify-center  shrink-0 relative mb-10 my-0">
      <img className="absolute top-[200px] left-[1350px] w-[150px] h-[300px] overflow-hidden " src={star} />
      <img
        className="w-[79px] h-[45.366px] shrink-0 bg-cover bg-no-repeat relative z-[293] mt-[63px]  ml-[21px]"
        src={vector3}
      />
      <div className="flex w-[1312px] flex-col gap-[72px] items-center flex-nowrap absolute mt-[100px] mr-[100px] mb-0 ml-[-50px]">
        <span className="h-[39px]  shrink-0 basis-auto font-heading text-[32px] font-semibold leading-[39px] text-[#000435] relative text-left whitespace-nowrap z-[44]">
          Safe sex library
        </span>
        <div className="flex w-[1100px] left-[50px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[2]">
          <div className="w-[427px] h-[427px] hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className="flex w-[179px] flex-col gap-[24px] items-center flex-nowrap relative z-[4] mt-[64px] mr-0 mb-0 ml-[124px]">
              <img
                className="w-[179px] h-[246.42px] shrink-0 bg-[url(../assets/images/9433de18-5b6a-4dba-bee3-f63ac5b46219.png)] bg-[length:100%_100%] bg-no-repeat relative z-[5]"
                src={group7}
              />
              <button className="h-[30px] shrink-0 basis-auto font-body text-[20px] font-normal leading-[30px] text-[#000435] relative text-left whitespace-nowrap z-[6]">
                STI Quiz
              </button>
            </div>
          </div>
          <div className="w-[427px] h-[427px] hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className="flex w-[179px] flex-col gap-[24px] items-center flex-nowrap relative z-[4] mt-[64px] mr-0 mb-0 ml-[124px]">
              <img
                className="w-[179px] h-[246.42px] shrink-0 bg-[url(../assets/images/9433de18-5b6a-4dba-bee3-f63ac5b46219.png)] bg-[length:100%_100%] bg-no-repeat relative z-[5]"
                src={group8}
              />
              <button className="h-[30px] hover:bg-[#eef8eb] shrink-0 basis-auto font-body text-[20px] font-normal leading-[30px] text-[#000435] relative text-left whitespace-nowrap z-[6]">
                Myth Busters
              </button>
            </div>
          </div>

          <button className="w-[427px] h-[427px]  hover:bg-[#eef8eb] shrink-0 bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_16px_20px_0_rgba(179,179,179,0.25)] z-[3]">
            <div className=" w-[300px] flex-col relative z-[4] mt-[64px] mr-16 mb-[64px] ml-16">
              <img
                className="w-[350px] h-[300.42px]  shrink-0  bg-[length:100%_100%]  bg-no-repeat relative z-[5]"
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
