import React from 'react'
import linkedin from "../assets/linkedin.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import mail from "../assets/mail.png"

function Footer() {
  return (
<div class='main-container w-[1512px]  h-[404px]  relative overflow-hidden mx-auto my-0'>
    <div class='flex w-[172px] flex-col gap-[12px] items-center flex-nowrap relative z-[28] mt-[331px] mr-0 mb-0 ml-[670px]'>
      <div class='flex w-[87px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[29]'>
        <div class='w-[12px] h-[12px] shrink-0 rounded-[100px] border-solid border-[0.9px] border-[#000435] relative box-content overflow-hidden z-30'>
          <span class="flex h-[12px] justify-start items-start font-['Poppins'] text-[10px] font-medium leading-[12px] text-[#000435] absolute top-0 left-[2px] text-left whitespace-nowrap z-[31]">
            C
          </span>
        </div>
        <span class="h-[12px] shrink-0 basis-auto font-['Poppins'] text-[8px] font-normal leading-[12px] text-[#000435] relative text-left whitespace-nowrap z-[32]">
          All right reserved
        </span>
      </div>
      <div class='flex w-[172px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[33]'>
        <button class='w-[31px] h-[31px] shrink-0 hover:bg-[#F3F4F6] rounded-[100px] border-solid relative box-content overflow-hidden z-[34]'>
          <img class='w-[31px] h-[31px] bg-[url(../assets/images/6f902b69-755a-4306-ab32-b0a3575bbd88.png)] bg-[length:100%_100%] bg-no-repeat relative z-[35]' src={facebook} />
        </button>
        <button class='w-[31px] h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid relative box-content overflow-hidden z-[36]'>
          <img class='w-[31px] h-[31px] bg-[url(../assets/images/fdd257c5-557d-476d-ad6d-b06a72b56c96.png)] bg-[length:100%_100%] bg-no-repeat relative z-[35]' src={insta} />
        </button>
        <button class='w-[31px] h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid relative box-content overflow-hidden z-[38]'>
          <img class='w-[31px] h-[31px] bg-[url(../assets/images/6df25248-cac0-4649-885b-2c3f32a181ae.png)] bg-[length:100%_100%] bg-no-repeat relative z-[35]' src={twitter} />
        </button>
        <button class='w-[31px] h-[31px] hover:bg-[#F3F4F6] shrink-0 rounded-[100px] border-solid relative box-content overflow-hidden z-40'>
          <img class='w-[31px] h-[31px] bg-[url(../assets/images/4cc08577-195a-41dd-a0f2-0f4a441f9675.png)] bg-[length:100%_100%] bg-no-repeat relative z-[45]' src={linkedin} />
        </button>
      </div>
    </div>
    <div class='w-[1312px] h-[216px] absolute top-[103px] left-[100px] z-[27]'>
      <div class='flex w-[289px] gap-[80px] items-start flex-nowrap relative mt-0 mr-0 mb-0 ml-0'>
        <span class="h-[29px] shrink-0 basis-auto font-heading text-[24px] font-bold leading-[29px] text-[#6acd6b] relative text-left whitespace-nowrap z-[1]">
          Konji
        </span>
        <div class='flex w-[144px] flex-col items-start shrink-0 flex-nowrap relative z-[2]'>
          <ul class="space-y-4">
            <li>
              <a href="#" class="h-[21px] font-body text-[14px] font-normal leading-[21px] text-[#000435] relative text-left whitespace-nowrap z-[4]">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="h-[21px] font-body text-[14px] font-normal leading-[21px] text-[#000435] relative text-left whitespace-nowrap z-[7]">
                Take quiz
              </a>
            </li>
            <li>
              <a href="#" class="h-[21px] font-body text-[14px] font-normal leading-[21px] text-[#000435] relative text-left whitespace-nowrap z-10">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" class="h-[21px] font-body text-[14px] font-normal leading-[21px] text-[#000435] relative text-left whitespace-nowrap z-[13]">
                Library
              </a>
            </li>
            <li>
              <a href="#" class="h-[21px] font-body text-[14px] font-normal leading-[21px] text-[#000435] relative text-left whitespace-nowrap z-[16]">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class='w-[1312px] h-[2px] bg-[#6bcd6c] rounded-[50px] relative z-[27] mt-[19px] mr-0 mb-0 ml-0' />
    </div>
    <div class='flex w-[302px] h-[145px] flex-col gap-[21px] items-start flex-nowrap absolute top-[111px] left-[1110px] z-[18]'>
      <div class='flex w-[302px] flex-col gap-[6px] items-start shrink-0 flex-nowrap relative z-[19]'>
        <span class="h-[22px] shrink-0 basis-auto font-heading text-[18px] font-semibold leading-[21.942px] text-[#000435] relative text-left whitespace-nowrap z-20">
          Newsletter
        </span>
        <span class="flex w-[302px] h-[42px] justify-start items-start shrink-0 font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#000435] relative text-left z-[21]">
          Subscribe to our newsletter and get free daily sexual tips
        </span>
      </div>
      <div class='w-[302px] h-[54px] shrink-0 rounded-[12px] border-solid border border-[#6ac66b] relative box-content overflow-hidden z-[22]'>
        <div class='flex w-[270px] gap-[186px] items-center flex-nowrap relative z-[23] mt-[15px] mr-0 mb-0 ml-[16px]'>
          <span class="h-[18px] shrink-0 basis-auto font-body text-[12px] font-normal leading-[18px] text-[#9f9c9c] relative text-left whitespace-nowrap z-[24]">
            Subscribe
          </span>
          <div class='w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[25]'>
            <button class="w-[20px] h-[16px] bg-[url(../assets/images/0697cdd6-ed2e-496f-a181-0c242b0a2a26.png)] bg-[length:100%_100%] bg-no-repeat relative z-[26] mt-[4px] mr-0 mb-0 ml-[2px]" aria-label="Subscribe via mail">
              <img src={mail} alt="mail icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer