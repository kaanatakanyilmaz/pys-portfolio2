import { div } from "framer-motion/client";
import { Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#1b1b1b] mt-40 h-100  top-0 text-[#d89c24] flex flex-col items-center ">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl  text-[#fff3b5] font-light mt-15  ">
        Danışan odaklı, güvenli ve etik
        <h1 className="flex justify-center"> ilkelerle hizmet.</h1>
      </h1>
      <div className="flex flex-row justify-center items-center gap-3 sm:gap-8 mt-8 text-[#fff3b5] ">
        <a href="#home">
          <div className="flex flex-row  items-center ">
            <img src="images/gpt-beyin.png" alt="" className=" h-4 sm:h-12 " />
            <p className="font-normal text-[10px] sm:text-xs sm:text-sm lg:text-lg">
              <div className="flex flex-row">
                Psk.Mustafa <div> Kocadağ</div>
              </div>
            </p>
          </div>
        </a>
        <a href="https://www.instagram.com/pskkocadag/" target="_blank">
          <div className="flex flex-row gap-1 items-center">
            <Instagram className="text-[#9b701a] h-4 w-4 sm:h-10 sm:w-10" />
            <p className="font-normal text-xs sm:text-sm lg:text-lg">
              pskkocadag
            </p>
          </div>
        </a>
        <a href="mailto:pskkocadag@gmail.com">
          <div className="flex flex-row gap-1 items-center">
            <Mail className="text-[#9b701a]  h-4 w-4 sm:h-10 sm:w-10 " />

            <p className="font-normal text-xs sm:text-sm lg:text-lg">
              pskkocadag@gmail.com
            </p>
          </div>
        </a>
      </div>
      <div className="mt-10 border-b border-[#373737]  w-70 sm:w-100 md:w-130 lg:w-150 xl:w-180 2xl:w-220 "></div>

      <a href="https://www.instagram.com/kaatakann/" Target="_blank">
        <p className="flex flex-row text-[#d89c24] italic text-sm sm:text-lg font-light mt-10">
          <p>©</p> 2025 Designed by Kaan Atakan Yılmaz.
        </p>
      </a>
    </div>
  );
}
export default Footer;
