import React from "react";
import image1 from "../assets/image1.png";
import hearticon from "../assets/hearticon.png";

function Community() {
  return (
    <div className="relative  w-full h-scree flex-col border-red-100 flex ">
      <div className=" md:w-[1512px] md:h-[600px] bg-[#e0f3df]  overflow-hidden z-[8]  mx-0 my-0">
        <div className="flex-col mt-0 md:w-[1312px] p-2 md:flex-col gap-[64px] flex items-center flex-nowrap relative md:mt-[125px] mr-0 mb-8 md:ml-[100px]">
          <div className="flex">
          <span className="flex mt-[40px] md:ml-[-60px] md:mt-[-40px] mb-[-15px] ml-[30px] text-center md:w-[333px] md:h-[39px] justify-center  shrink-0 basis-auto font-heading md:text-[32px] text-[25px] font-semibold tracking-[2px] md:leading-[39px] text-[#000435]  md:text-center whitespace-nowrap z-[1]">
            Join the community
          </span>
          </div>
          <div className="md:w-[1100px]  ml-[-0px] w-full mx-auto text-center h-[200px] relative md:h-[247px] flex-row shrink-0 bg-[#fff] rounded-tl-none rounded-tr-[180px] rounded-br-[180px]  rounded-bl-none absolut overflow-hidden shadow-[0_35px_44px_0_rgba(88,88,88,0.25)] z-[2]">
            <div className="md:w-[4px]  md:h-[282px] bg-[#eef8eb] absolute top-0 md:left-[1188px] z-[3]" />
            <img
              className="md:w-[426px] md:h-[247px] h-[200px] w-[150px] absolute bg-cover bg-no-repeat top-0 left-0 overflow-hidden z-10"
              src={image1}
            />
            <div className="flex p-1 w-[180px] h-[px] text-base mt-[10px] ml-[150px] md:w-[564px] md:h-[152px] flex-col gap-[16px] items-start flex-nowrap md:ml-[450px]  md:mt-[40px] z-[4]">
              <span className="flex md:w-[564px] ml-[10px] md:h-[90px] justify-start items-start shrink-0 font-body md:text-[20px] text-[10px] font-normal md:leading-[30px] text-[#000435] relative p- text-left z-[5]">
                Hey there! It looks like you’ve got a question. Feel free to ask
                anonymously, or under your own name, I’ll respond and the
                community will too.
              </span>
              <button className="flex w-[70px]ml- h-[30px] md:w-[140px] hover:bg-[#e0f3df] md:h-[46px] pt-[10px] pr-[10px] ml-[10px] mt-[-7px] pb-[10px] pl-[10px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#6ac66b] relative box-content z-[6] pointer">
                <span className="h-[21px] shrink-0 basis-auto font-body md:text-[14px] text-[10px] items-center justify-center font-semibold md:leading-[21px] text-[#6ac66b] relative text-left whitespace-nowrap z-[7]">
                  Join now
                </span>
                <div className="md:w-[24px] md:h-[24px] shrink-0 relative overflow-hidden z-[8]">
                  <img
                    className="md:w-[20px]  ml-[-2px] w-[15px] md:h-[14px] bg-[length:100%_100%] bg-no-repeat relative z-[9] mt-[1px] mr-0 mb-0 md:ml-[2px]"
                    src={hearticon}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
