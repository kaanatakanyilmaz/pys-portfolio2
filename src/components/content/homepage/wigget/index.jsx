import { div } from "framer-motion/client";
import { Frown, Brain, Smile } from "lucide-react";

function Wigget() {
  return (
    <div className="bg-[#1b1b1b] flex flex-col lg:flex-row justify-center items-center text-[#d89c24]   ">
      <div className="bg-[#121212] p-6 h-80  w-full shadow-lg  ">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">SORUNLAR</h2>

          <Frown size={120} strokeWidth={1} />
        </div>
      </div>
      <div className="bg-[#1b1b1b] p-6 h-80 w-full shadow-lg ">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">DESTEK</h2>
          <Brain size={120} strokeWidth={0.5} />
        </div>
      </div>
      <div className="bg-[#313131] p-6 h-80 w-full shadow-lg  ">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">İYİLEŞME</h2>
          <Smile size={120} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
export default Wigget;
