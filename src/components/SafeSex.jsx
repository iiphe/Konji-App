import React from "react";
import pills from "../assets/pills.png";
import path1 from "../assets/path1.png";
import path2 from "../assets/path2.png";
import path3 from "../assets/path3.png";
import play from "../assets/play.png";

function SafeSex() {
  return (
    <div className=" md:w-full mt-[50px] p- w-[400px] rounded-[10px] h-[300px] md:h-[577px] bg-[#6ac66b] relative overflow-hidden mx-auto my-0">
      <div className="md:flex justify-center flex md:w-[1181px] gap-[106px] items-center flex-nowrap relative z-[1] md:mt-[85px] mr-0 mb-0 md:ml-[231px]">
        <div className="md:flex flex md:w-[427px] md:flex-col flex-col md:gap-[16px] items-start shrink-0 flex-nowrap relative z-[2]">
          <span className="md:h-[39px] md:ml-[-420px] md:mt-[222px] shrink-0 basis-auto absolute font-heading md:text-[32px] text-[18px] mt-[20px] ml-[-30px]  font-semibold leading-[39px] text-[#fff]  text-left whitespace-nowrap z-[3]">
            Condoms vs Aids
          </span>
          <span className="md:h-[30px] md:ml-[-430px] md:mt-[280px] p-2 shrink-0 basis-auto  font-body md:text-[20px] text-[12px]  font-normal leading-[30px] text-[#fff] mt-[230px] ml-[-80px] absolute text-left whitespace-nowrap z-[4]">
            Find more videos on our YouTube Channel.
          </span>
        </div>
        <div className="md:w-[500px] md:mt-[450px] md:h-[350px] md:ml-[100px] shrink-0 md:bg-[#fff md:absolute rounded-[16px]  overflow-hidden shadow-[0_20px_40px_0_rgba(46,46,46,0.54)] z-[5]">
          <div className="md:w-[59px] md:h-[59px]  bg-[rgba(0,0,0,0.4)] rounded-[100px]  overflow-hidden z-[8] md:mt-[191px] mr-0 mb-0 md:ml-[295px]">
            <button className="md:w-[42px] md:h-[32px]  w-[0px] absolute overflow-hidden z-[9] md:mt-[-30px] mr-0 mb-0 md:ml-[-46px] md:mt-]">
              <img
                className="md:w-[42.997px] md:absolute   w-[30px] ml-[0px] h-[20px] md:h-[90px] bg-[length:100%_100%] bg-no-repeat absolut z-1 md:mt-[-45.5px] mt-[-50px]  md:ml-[-20.003px]"
                src={play}
              />
            </button>
          </div>
          <img
            className="md:w-[500px] md:ml-[-1px]  md:mt-[100px]  md:h-[350px] shadow md:shadow-lg rounded-[15px] md:rounded-[20px]  bg-cover bg-no-repeat  w-[250px] h-[140px] mr-[100px]  ml-[-160px] mt-[80px] rad  absolute md:absolute md:top-[-100px]  z-[6]"
            src={pills}
          />
        </div>
        
      </div>
      <svg class="md:left-[839px] md:w-[80px] md:h-[50px] md:mt-[240px] w-[30px] h-[40px] ml-[370px] mt-[130px]  absolute md:absolute" xmlns="http://www.w3.org/2000/svg"  width="52" height="65" viewBox="0 0 52 65" fill="none">
<path d="M8.66319 0.000273316L22.7522 16.1091L26.7788 12.5625L27.7343 11.7208L28.5744 12.6779L50.0211 36.9952C50.2276 35.2368 51.0554 33.5472 52.4821 32.295C54.012 30.9528 55.9497 30.358 57.8396 30.4833C59.73 30.6085 61.5716 31.4549 62.9113 32.9872C65.591 36.0518 65.2795 40.75 62.2204 43.4345C59.4563 45.8596 55.3599 45.8404 52.6188 43.554L50.1236 45.7502L58.6114 55.4027L63.513 51.1085C69.4087 57.8439 56.2842 69.9129 50.1105 62.8589L54.9861 58.586L46.5106 48.9294L44.3737 50.8094C46.2641 53.8318 45.7427 57.8952 42.983 60.3165C39.9239 63.0011 35.2337 62.6892 32.554 59.6246C29.8746 56.5597 30.1858 51.8616 33.2451 49.1772C34.5879 47.9986 36.2476 47.397 37.9113 47.3525L16.6222 23.2063L15.7779 22.2451L16.7374 21.4034L20.8323 17.797L6.74817 1.68359L8.66319 0V0.000273316ZM6.08685 5.47793C6.08685 14.8763 12.1737 18.8634 12.1737 24.4368C12.1737 27.8029 9.44654 30.5301 6.08685 30.5301C2.72717 30.5301 0 27.8029 0 24.4369C0 18.4207 6.08685 15.231 6.08685 5.47821V5.47793ZM40.394 29.9403L32.2597 37.0764L34.2089 39.2853L42.3433 32.1495L40.3942 29.9404L40.394 29.9403ZM57.443 33.0086C56.2842 32.9878 55.1108 33.386 54.1631 34.2176C52.1408 35.9921 51.9396 39.0328 53.7107 41.0586C55.482 43.0844 58.5175 43.286 60.5396 41.5114C62.562 39.7371 62.7631 36.6964 60.9919 34.6707C60.1061 33.6575 58.9067 33.0987 57.6733 33.0169C57.5963 33.012 57.5204 33.0101 57.443 33.0087V33.0086ZM43.7977 33.7989L41.4349 35.8756L41.7035 36.1789L48.4344 43.8318L50.806 41.7466L43.7977 33.7989ZM37.8304 39.0375L35.6635 40.9389L42.6803 48.8949L44.826 47.0063L37.8306 39.0375H37.8304ZM38.2057 49.8907C37.0469 49.8695 35.8736 50.264 34.9258 51.0956C34.4453 51.514 34.0523 52.0235 33.7694 52.5947C33.4864 53.1659 33.3191 53.7876 33.277 54.4239C33.235 55.0602 33.3191 55.6986 33.5244 56.3022C33.7298 56.9058 34.0524 57.4627 34.4736 57.9409C36.2447 59.9667 39.2802 60.1683 41.3024 58.3937C42.1436 57.6611 42.7053 56.6591 42.8919 55.5583C43.0786 54.4575 42.8786 53.3259 42.3261 52.3562C42.3254 52.3548 42.3268 52.3527 42.3261 52.3516L41.6095 51.5441L40.9824 50.835C40.241 50.2845 39.3569 49.9597 38.436 49.8992C38.3589 49.8941 38.2831 49.8921 38.2056 49.8906L38.2057 49.8907Z" fill="#D6EFD4"/>
</svg> 
      <svg
        class="md:absolute md:w-full ml-[-0px] w-[900px] absolute mt-[60px] md:top-[186px] "
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="159"
        viewBox="0 0 1512 126"
        fill="none"
      >
        <path
          d="M-156 63C-5.08333 -18.3333 145.833 -18.3333 296.75 63C447.667 144.333 598.583 144.333 749.5 63C900.417 -18.3333 1051.33 -18.3333 1202.25 63C1353.17 144.333 1504.08 144.333 1655 63"
          stroke="#D6EFD4"
          stroke-width=""
        />
      </svg>
      <svg
        class="md:absolute md:w-full w-[900px] absolute mt-[70px] md:top-[186px]"
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="163"
        viewBox="0 0 1512 163"
        fill="none"
      >
        <path
          d="M-156 81.5C-5.08333 187.5 145.833 187.5 296.75 81.5C447.667 -24.5 598.583 -24.5 749.5 81.5C900.417 187.5 1051.33 187.5 1202.25 81.5C1353.17 -24.5 1504.08 -24.5 1655 81.5"
          stroke="#D6EFD4"
          stroke-width=""
        />
      </svg>
      <svg
        class="md:absolute md:w-[50px] w-[30px] mt-[175px] absolute md:bottom-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        width="71"
        height="73"
        viewBox="0 0 71 73"
        fill="none"
      >
        <path
          d="M54.7224 0L53.9342 2.67772L70.2118 6.63275L71 3.95504L54.7224 0ZM55.6573 7.39781L47.9584 33.5097C52.9627 34.5908 56.0422 36.3537 57.5637 38.3662L65.9591 9.90921L62.293 9.0111L56.4822 28.7031L53.5309 27.988L59.3417 8.29593L62.238 8.99446L55.6573 7.39781ZM25.8517 13.3021C24.7152 13.3354 23.597 13.5349 22.4605 13.9341C16.0998 16.196 0.201637 29.2187 0.201637 29.2187L0 57.8087C9.07183 56.1788 18.0978 55.8961 21.9106 46.5158L29.0229 42.4909C29.0229 42.4909 42.8258 49.2267 50.763 43.9378C55.1257 41.0605 51.2763 37.4514 39.0314 35.1729C18.0978 31.2644 21.9289 26.8071 21.9289 26.8071L26.8965 28.2374L23.487 22.4163L29.2795 27.3559L30.6176 22.4163L33.0556 25.3601L45.1538 29.5014L47.9401 20.3041C38.0965 17.8259 31.9191 13.1524 25.8517 13.3021ZM65.1342 26.8736L62.4213 36.0876C68.1954 38.8818 75.5827 31.0815 65.1342 26.8736ZM61.908 39.3142L59.3234 48.8276C66.344 51.0729 74.4278 43.1229 61.908 39.3142ZM54.7224 47.996C51.8262 50.0417 47.5735 51.4221 42.6792 51.3722L38.1882 66.6069C37.4366 69.1017 39.123 71.7628 41.9643 72.4281C44.8055 73.0933 47.7384 71.5965 48.49 69.1017L54.7224 47.996Z"
          fill="#D6EFD4"
        />
      </svg>
    </div>
  );
}

export default SafeSex;
