import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" text-3xl text-[#133a9f]"
      >
        <a href="#home">
          <div class="relative group">
            <div className=" flex flex-row md:flex-col items-center text-gray-100 text-3xl md:text-xl font-bold relative mb-16 lg:mb-0">
              <div className="flex flex-col lg:flex-row items-center  justify-center">
                <img
                  src="/images/gpt-beyin.png"
                  alt=""
                  className=" h-15 mt-5 lg:mt-0"
                />
                {/* <img src="/images/beyin2.png" alt="" className=" h-25" /> */}
                <div className=" text-[#d89c24] font-light ">Psikolog</div>
                <div className=" text-[#d89c24] font-semibold ml-2">
                  Mustafa Kocadağ
                </div>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
}

export default Logo;
