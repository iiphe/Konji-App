import React from 'react'
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import mail from "../assets/mail.png"

function Footer() {
  return (
<div class=' md:w-[1512px] w-[400px]  h-screen md:h-screen flex-row relative md:relative overflow-hidden mx-auto my-0'>
    <div class='md:flex  flex md:w-[172px]  flex-col md:flex-col md:gap-[12px] ml-[150px] mt-[330px] absolute  items-center flex-nowrap md:relative z-[28] md:mt-[331px] mr-0 mb-0 md:ml-[670px]'>
      <div class='md:flex md:mt-[70px] flex md:w-[87px]  md:gap-[8px]  items-center shrink-0 flex-nowrap md:absolute  z-[29]'>
        <div class='md:w-[12px] w-[14px] h-[13px] md:h-[12px]  shrink-0 md:rounded-[150px] rounded-[100px] border-solid md:ml-[-130px] md:mt-[0px]  border-[0.9px] border-[#000435] relative md:absolute box-content overflow-hidden z-30'>
          <span class="md:flex w-[30px]  text-[9px] ml-[2px] md:mt- flex md:h-[12px] md:ab justify-start items-start font-body md:text-[10px] md:ml-[-1px] font-medium md:leading-[12px]  text-[#000435] absolute  top-0 md:left-[2px] text-left whitespace-nowrap z-[31]">
            C
          </span>
        </div>
        <span class="md:h-[12px] ml-[5px] md:ml-[-100px] shrink-0 basis-auto md:text-[1] text-[10px] font-body md:text-[13px]  font-normal leading-[12px] text-[#000435] md:absolute relative text-left whitespace-nowrap z-[32]">
          All right reserved
        </span>
      </div>
      <div class='md:flex flex mt-[10px] gap-[5px] md:w-[172px] md:gap-[16px] items-start shrink-0 flex-nowrap md:absolute md:ml-[-210px] md:mt-[100px] z-[33]'>
        <button class='md:w-[31px] w-[20px] md:h-[31px] shrink-0 hover:bg-[#F3F4F6] md:rounded-[100px] border-solid relative md:relative box-content overflow-hidden z-[34]'>
          <img class='md:w-[31px] md:h-[31px] bg-[url(../assets/images/6f902b69-755a-4306-ab32-b0a3575bbd88.png)] bg-[length:100%_100%] bg-no-repeat  md:relative z-[35]' src={facebook} />
        </button>
        <button class='md:w-[31px] w-[20px] md:h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid relative box-content overflow-hidden z-[36]'>
          <img class='md:w-[31px] md:h-[31px] bg-[url(../assets/images/fdd257c5-557d-476d-ad6d-b06a72b56c96.png)] bg-[length:100%_100%] bg-no-repeat md:relative z-[35]' src={insta} />
        </button>
        <button class='md:w-[31px] w-[20px] md:h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid md:relative box-content overflow-hidden z-[38]'>
          <img class='md:w-[31px] md:h-[31px] bg-[url(../assets/images/6df25248-cac0-4649-885b-2c3f32a181ae.png)] bg-[length:100%_100%] bg-no-repeat md:relative z-[35]' src={twitter} />
        </button>
        <button class='md:w-[31px] w-[20px] md:h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid md:relative relative box-content overflow-hidden z-40'>
          <img class='md:w-[31px] md:h-[31px] bg-[url(../assets/images/4cc08577-195a-41dd-a0f2-0f4a441f9675.png)] bg-[length:100%_100%] bg-no-repeat relative z-[45]' src={linkedin} />
        </button>
      </div>
    </div>
    <div class='md:w-[1312px]  mt-[100px] w-[400px] gap-[px] flex md:h-[216px] md:relative absolute md:mt-[0px] md:left-[100px] z-[27]'>
      <div class='md:flex flex md:ml-[40px] md:w-[289px] gap-[10px] md:gap-[50px]  items-start flex-nowrap md:mt-[-200px] mt-0 mr-0 mb-0 '>
        <span class="md:h-[29px] shrink-0 basis-auto font-heading md:text-[24px]   font-bold leading-[29px] text-[#6acd6b] md:relative relative text-left whitespace-nowrap z-[1]">
          Konji
        </span>
        <div class='md:flex md:w-[144px] ml-[10px] mt-[3px] md:flex-col items-start shrink-0 flex-nowrap relative z-[2]'>
          <ul class="space-y-2 md:space-y-5">
            <li>
              <a href="#" class="md:h-[21px] font-body md:text-[14px] text-[10px] font-normal leading-[21px] text-[#000435] md:relative text-left whitespace-nowrap z-[4]">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="md:h-[21px] font-body md:text-[14px] text-[10px]  font-normal leading-[21px] text-[#000435] md:relative relative text-left whitespace-nowrap z-[7]">
                Take quiz
              </a>
            </li>
            <li>
              <a href="#" class="md:h-[21px] font-body md:text-[14px] text-[10px]  font-normal leading-[21px] text-[#000435] md:relative text-left whitespace-nowrap z-10">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" class="md:h-[21px] font-body md:text-[14px] text-[10px]  font-normal leading-[21px] text-[#000435] md:relative text-left whitespace-nowrap z-[13]">
                Library
              </a>
            </li>
            <li>
              <a href="#" class="md:h-[21px] font-body md:text-[14px] text-[10px]  font-normal leading-[21px] text-[#000435] md:relative text-left whitespace-nowrap z-[16]">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class='md:w-full md:ml-[-100px] w-[400px] h-[2px]  md:h-[2px] bg-[#6bcd6c] md:rounded-[50px] absolute  md:absolute mt-[200px] z-[27] md:mt-[39px] justify-center items-center' />
    </div>
    <div class='md:flex flex md:w-[302px]   md:h-[145px] md:flex-col md:gap-[21px] md:ml-[700px] md:mt-[-390px] items-start flex-nowrap ml-[150px] mt-[127px]  md:top-[111px] md:left-[1110px] z-[18]'>
      <div class='md:flex flex md:w-[302px] md:flex-col md:gap-[6px] items-start md:ml- shrink-0 flex-nowrap md:absolute z-[19]'>
        <span class="md:h-[22px]  shrink-0 basis-auto font-heading md:text-[18px]  text-[12px] tracking-[1px] mt-[-25px] ml-[70px] font-semibold leading-[21.942px] text-[#000435] absolute md:relative text-left whitespace-nowrap z-20">
          Newsletter
        </span>
        <span class="md:flex flex md:w-[302px] ml-[70px] md:mt-[10px] mt-[0px] text-[10px]  md:h-[42px] justify-start items-start shrink-0 font-body md:text-[13px] font-normal leading-[21px] text-[#000435] absolute md:relative text-left z-[21]">
          Subscribe to our newsletter and get free daily sexual tips
        </span>
      </div>
      <div class='md:w-[290px] md:mt-[80px] mt-[50px] ml-[70px] w-[180px] h-[30px] md:h-[54px] shrink-0 rounded-[12px] border-solid border border-[#6ac66b] absolute box-content overflow-hidden z-[22]'>
        <div class='flex md:w-[270px] md:gap-[186px] items-center flex-nowrap absolute z-[23] md:mt-[15px] mr-0 mb-0 md:ml-[16px]'>
          <span class="md:h-[18px] md:mt-[-20px] md:ml-[-10px] shrink-0 basis-auto font-body md:text-[12px] text-[9px] p-2 font-normal leading-[18px] text-[#9f9c9c] absolute text-left whitespace-nowrap z-[24]">
            Subscribe via email
          </span>
          <div class='md:w-[24px] md:h-[24px] relative]'>
            <button class="md:w-[20px]  md:h-[16px] bg-[length:100%_100%] bg-no-repeat md:absolute relative z-[26] md:mt-[-16px] mr-0 mb-0 md:ml-[70px]" aria-label="Subscribe via mail">
              <img className='w-[14px] md:absolute md:w-[20px] md:h-[20px] mt-2 ml-[150px] ' src={mail} alt="mail icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer