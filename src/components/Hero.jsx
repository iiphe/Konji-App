import React from 'react'
import hero from '../assets/hero.png'
import heart1 from "../assets/heart1.png"
import heart2 from "../assets/heart2.png"
import heart3 from "../assets/heart3.png"
import testeclipse from "../assets/testeclipse.png"
import testeclipse2 from "../assets/testeclipse2.png"

function Hero() {
  return (
      <div className='flex container flex-col flex-shrink-0 md:flex lg:flex-row lg:h-auto h-[764px] w-[1512px]  bg-[#eef8eb] relative overflow-hidden mx-auto my-0 p-4 lg:p-0'>
        <div className='relative w-full lg:w-auto'>
        
        <img
          className="w-[200px] h-[500px] bg-cover bg-no-repeat ml-[300px] lg:block absolute rotate-90 md:rotate-90 top-[-200px] left-[900px] "
          src={testeclipse}
          alt='Background Eclipse'
        />
               
        </div>
        
        <div className='relative w-full lg:w-auto' >
          <img className='w-[423px] md:h-full md:flex-shrink-0 h-auto p-10 mx-auto bg-cover bg-no-repeat lg:mt-0 rounded-[32px] absolute top-[142px] left-[50px] z-30'   src={hero} alt='' />
        </div>
        <div>
        <img className='w-[44.36px] h-[44.36px]  bg-cover bg-no-repeat absolute top-[183.82px] left-[589.82px] overflow-hidden z-[34]' src={heart1}/>
        </div>
        <div>
        <img className='w-[41.219px] h-[41.219px]  bg-cover bg-no-repeat absolute top-[291px] left-[979px] overflow-hidden z-[35]' src={heart2} />
        </div>
        
        <div className='flex w-[728px] h-[129px] flex-col gap-[8px] items-start flex-nowrap absolute top-[321px] left-[684px] z-[31]'>
          <span className="h-[49px] shrink-0 basis-auto font-heading text-[40px] font-semibold leading-[48.76px] text-[#000435] tracking-[5.6px] relative text-left whitespace-nowrap z-[32]">
            Safe is sexy
          </span>
          <span className="flex w-[728px] h-[72px] justify-start items-start shrink-0 font-body text-[24px] font-normal leading-[36px] text-[#000435] relative text-left z-[33]">
            Konji offers a discrete way for people to engage in sexual health
            education and access sexual health resources.
          </span>
        </div>
        <button className='flex w-[140px] h-[46px] hover:bg-white pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center flex-nowrap rounded-[8px] border-solid border border-[#6ac66b] absolute top-[485px] left-[684px] box-content z-[28] pointer'>
          <span className="h-[21px]  shrink-0 basis-auto font-body text-[14px] font-semibold leading-[21px] text-[#6ac66b] relative text-left whitespace-nowrap z-[29]">
            Find my test
          </span>
        </button>
        <div>
          <img className='w-[40.675px] h-[40.675] bg-cover bg-no-repeat absolute top-[637.272px] left-[567.272px] overflow-hidden z-[36]' src={heart3} />
        </div>

      </div>
      
    
  )
}

export default Hero