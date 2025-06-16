import React from "react";
import { motion } from "framer-motion";
import {
  House,
  User,
  FolderClosed,
  BriefcaseBusiness,
  MessagesSquare,
} from "lucide-react";

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: -20 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className=" relative group font-normal  text-[#d89c24] text-sm md:text-base lg:text-lg flex flex-col md:flex-row justify-center items-center py-4 lg-py-0">
        <a href="#home" className="ml-6 hover:border-b-[2px] mb-5 md:mb-0">
          <div className="flex items-center">
            <span className="ml-1">Ana Sayfa</span>
          </div>
        </a>
        <a href="#aboutus" className="ml-6  hover:border-b-[2px] mb-5 md:mb-0">
          <div className="flex items-center">
            {/* <User size={30} /> */}
            <span className="ml-1">Hakkımda</span>
          </div>
        </a>
        <a href="#services" className="ml-6  hover:border-b-[2px] mb-5 md:mb-0">
          <div className="flex items-center">
            {/* <BriefcaseBusiness size={30} /> */}
            <span className="ml-1"> Hizmetlerim</span>
          </div>
        </a>
        {/* <a href="#social" className="ml-6 ] hover:border-b-[2px] mb-5 md:mb-0 ">
          <div className="flex items-center">
            
            <span className="ml-1">Yazılar</span>
          </div>
        </a> */}
        <a
          href="#contact"
          className="ml-6 text-[#d89c24] hover:border-b-[2px] mb-5 md:mb-0"
        >
          <div className="flex items-center">
            {/* <MessagesSquare size={30} /> */}
            <span className="ml-1">İletişim</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default NavBar;
