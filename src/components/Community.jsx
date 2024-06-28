import React from 'react'
import image1 from "../assets/image1.png"
import hearticon from "../assets/hearticon.png"



function Community() {
  return (
    <div className='relative border-red-100 flex '>
      <div className=' w-[1512px] h-[600px] bg-[#e0f3df]  overflow-hidden z-[8]  mx-0 my-0'>
      <div className='flex w-[1312px] flex-col gap-[64px] items-center flex-nowrap relative mt-[125px] mr-0 mb-0 ml-[100px]'>
        <span className="flex w-[333px] h-[39px] justify-center items-start shrink-0 basis-auto font-heading text-[32px] font-semibold leading-[39px] text-[#000435] relative text-center whitespace-nowrap z-[1]">
          Join the community
        </span>
        <div className='w-[1312px] h-[247px] shrink-0 bg-[#fff] rounded-tl-none rounded-tr-[180px] rounded-br-[180px] rounded-bl-none relative overflow-hidden shadow-[0_35px_44px_0_rgba(88,88,88,0.25)] z-[2]'>
          <div className='w-[4px] h-[282px] bg-[#eef8eb] absolute top-0 left-[1188px] z-[3]' />
          <img className='w-[426px] h-[247px]  bg-cover bg-no-repeat absolute top-0 left-0 overflow-hidden z-10' src={image1} />
          <div className='flex w-[564px] h-[152px] flex-col gap-[16px] items-start flex-nowrap absolute top-[48px] left-[525px] z-[4]'>
            <span className="flex w-[564px] h-[90px] justify-start items-start shrink-0 font-body text-[20px] font-normal leading-[30px] text-[#000435] relative text-left z-[5]">
              Hey there! It looks like you’ve got a question. Feel free to ask
              anonymously, or under your own name, I’ll respond and the
              community will too.
            </span>
            <button className='flex w-[140px] hover:bg-[#e0f3df] h-[46px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] border-solid border border-[#6ac66b] relative box-content z-[6] pointer'>
              <span className="h-[21px] shrink-0 basis-auto font-body text-[14px] font-semibold leading-[21px] text-[#6ac66b] relative text-left whitespace-nowrap z-[7]">
                Join now
              </span>
              <div className='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[8]'>
                <img className='w-[20px] h-[14px] bg-[length:100%_100%] bg-no-repeat relative z-[9] mt-[5px] mr-0 mb-0 ml-[2px]' src={hearticon} />
              </div>
            </button>
          </div>
        </div>
      </div>
      
    </div>

        
   
    </div>
    
  )
}

export default Community