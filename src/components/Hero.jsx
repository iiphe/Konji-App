import React from 'react';
import hero from '../assets/hero.png';
import heart1 from "../assets/heart1.png";
import heart2 from "../assets/heart2.png";
import heart3 from "../assets/heart3.png";
import search from "../assets/search.png"
import testeclipse from "../assets/testeclipse.png";
import testeclipse2 from "../assets/testeclipse2.png";

function Hero() {
  return (
    <div className='flex  md:flex md:flex-row flex-col items-center flex-shrink-0  w-full bg-[#eef8eb] overflow-hidden mx-auto my-0 p-2 lg:p-0'>
      
      <div className="md:flex lg:hidden flex flex-row  mt-4 md:mt-0">
        <h3>Sign in to continue...</h3>
      <button className=" ml-8 lg:hidden  flex bg-[#6ac66b] text-white text-sm rounded-lg mt- px-4 py-2 hover:bg-[#8fb982] whitespace-nowrap">
            Sign In
          </button>
        </div>
        <div>
        
        </div>
      <div className=' flex flex-row md:flex-row  md:flex w-full'>
        <img
          className="w-[100px] whitespace-nowrap  flex-shrink-0 md:w-[150px]  flex md:absolute md:h-[300px]  h-[250px] bg-cover bg-no-repeat mt-[-150px] md:ml-[255px] md:mt-[5px] sm:ml-[150px] ml-[400px] lg:block l rotate-90 md:rotate-90 top-[00px] left-[900px]"
          src={testeclipse}
          alt='Background Eclipse'
        />

      </div>
      
      <div className='relative justify-between flex  w-full'>

        <img className='w-[230px] h-[350px]  mt-[-80px] ml-[-20px]  md:h-full flex  p-10 mx-auto bg-cover bg-no-repeat md:ml-[-600px] md:w-[453px] md:mt-[20px] rounded-[32px]' src={hero} alt='' />
      </div>
      <div>
        <img className='w-[30px] h-[25px] md:w-[41px] md:h-[41px]  bg-cover bg-no-repeat mt-[-300px] mx-auto ml-[-2px] md:absolute shrink-0 md:ml-[100px] md:mt-[-170px] top-[350.82px] left-[440px] overflow-hidden z-[34]' src={heart1} />
      </div>

      <div>
        <img className='w-[30px] h-[25px] md:w-[41px] md:h-[41px] flex bg-cover  bg-no-repeat mt-[-270px] mx-auto ml-[380px] md:absolute shrink-0 md:ml-[-400px] md:mt-[-90px]  overflow-hidden z-[34]' src={heart1} />
      </div>
      <div>
        <img className='w-[30px]  h-[25px] md:w-[41px] md:h-[41px]  bg-cover bg-no-repeat mt-[-150px] top-[1px] ml-[-20px] md:absolute shrik-0 md:ml-[-750px] md:mt-[550px] overflow-hidden z-[35]' src={heart2} />
      </div>
      
      <div className='flex absolute ml-5 md:ml-[550px]  p-2 w-[28px] mt-[150px] md:mt-[-150px] h-[19px] gap-[8px] flex-row flex-nowrap  z-[31]'>
        <span className="h-[49px]   ml-[2px] flex  mt-[px] shrink-0  basis-auto font-heading text-[25px] md:text-[40px] font-semibold leading-[48.76px] md:leading-normal text-[#000435] tracking-[2px] md:tracking-[5.6px]  whitespace-nowrap z-[32]">
          Safe is sexy
        </span>
        <span className="flex w-[200px] md:w-[700px] h-[72px] mt-[50px] text-base md:p-2 md:ml-[-3px] justify-start items-start shrink-0 font-body text-[12px] md:text-[24px] font-normal leading-[30px] text-[#000435] absolute  z-[20]">
          Konji offers a discrete way for people to engage in sexual health education and access sexual health resources.
        </span>
      </div>
      <div className='md:static'>
      <button className='flex  w-[100px] h-[30px] md:w-[140px] md:h-[46px] hover:bg-white pt-[10px] pr-[10px] pb-[10px] pl-[10px]  justify-center items-center  rounded-[8px] border-solid border border-[#6ac66b]  ml-[200px] mb-[10px]  mt-[-60px] md:ml-[-715px] md:mt-[200px] box-content z-[28] pointer'>
        <span className="h-[px] shrink-0 basis-auto  font-body text-[10px] md:text-[14px] md:pt-[5px] font-semibold leading-[21px] text-[#6ac66b]  text-left whitespace-nowrap z-[29]">
          Find my test
        </span>
      </button>
      </div>
    </div>
  );
}

export default Hero;
