import { motion } from "framer-motion";
import {
  Mail,
  Building2,
  University,
  Phone,
  ContactRound,
  Instagram,
} from "lucide-react";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 flex flex-col h-150 w-full"
      id="contact"
    >
      <div className="flex flex-col items-center lg:items-start gap-3 mt-4 px-30  ">
        <h1 className="font-bold text-[30px] text-[#d89c24] md:text-[40px] text-center md:text-left">
          İletişim
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center text-[#15202b] ">
        <div className="leading-8 text-lg font-medium p-3 sm:p-6 mt-6 rounded-2xl bg-[#1b1b1b] shadow-lg  w-[300px] sm:w-[500px]  md:w-[800px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[900px] max-w-[900px]">
          <ul className="text-[10px] sm:text-sm lg:text-lg">
            <div className="flex flex-col md:flex-row justify-between p-8">
              <div className="flex flex-col ">
                <div className="flex flex-col sm:flex-row  items-center">
                  <ContactRound className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold text-[#d89c24] font-normal ">
                      Ad ve Soyad:
                    </span>
                    <span className="ml-3 text-[#fff3da] ">
                      Psk. Mustafa Kocadağ
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row  items-center">
                  <Mail className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold text-[#d89c24] font-normal ">
                      Email :
                    </span>
                    <span className="ml-3 text-[#fff3da] ">
                      pskkocadag@gmail.com
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row items-center ">
                  <Phone className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold text-[#d89c24] font-normal ">
                      Telefon :
                    </span>
                    <span className="ml-3 text-[#fff3da]">
                      +90 534 038 70 81
                    </span>
                  </li>
                </div>
              </div>
              <div className="flex flex-col  ">
                <div className="flex flex-col sm:flex-row  items-center">
                  <Building2 className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold text-[#d89c24] font-normal ">
                      {" "}
                      Şehir :
                    </span>
                    <span className="ml-3 text-[#fff3da]">
                      Kocaeli / Düzce / Mersin
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row  items-center  ">
                  <University className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  text-[#d89c24] font-normal">
                      {" "}
                      Üniversite :
                    </span>
                    <span className="ml-3 text-[#fff3da]">
                      Düzce Üniversitesi
                    </span>
                  </li>
                </div>
                <div className="flex flex-col sm:flex-row  items-center  ">
                  <Instagram className="text-[#d89c24]  sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  <li className="ml-3 border-b-1 border-[#747171] mb-3">
                    <span className="font-bold  text-[#d89c24] font-normal">
                      {" "}
                      İnstagram :
                    </span>
                    <span className="ml-3 text-[#fff3da]">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/pskkocadag/"
                      >
                        pskkocadag
                      </a>
                    </span>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
