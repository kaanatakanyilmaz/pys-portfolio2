import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-[#133a9f]"
    >
      <a href="#home">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <img
            src="/images/gpt-beyin.png"
            alt="logo"
            className="h-14 sm:h-16 mt-3 sm:mt-0"
          />
          <div className="text-[#d89c24] text-sm sm:text-lg font-light">
            Psikolog
          </div>
          <div className="text-[#d89c24] font-semibold text-sm sm:text-xl">
            Mustafa Kocadağ
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default Logo;
