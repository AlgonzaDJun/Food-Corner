import React from "react";
import { HomeContainer, RowContainer } from "../components";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Main = () => {
  return (
    // <div className="w-full h-auto flex flex-col items-center justify-center">
    //   <HomeContainer />

    //   <section className="w-full my-6" id="menu">
    //     <div className="w-full flex items-center justify-between">
    //       <p className="text-2xl font-semibold capitalize relative text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
    //         Pilihan Menu
    //       </p>

    //       <div className="hidden md:flex gap-3 items-center ">
    //         <motion.div
    //           whileTap={{ scale: 0.75 }}
    //           className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
    //         >
    //           <MdChevronLeft className="text-lg text-white"/>
    //         </motion.div>
    //         <motion.div
    //           whileTap={{ scale: 0.75 }}
    //           className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center "
    //         >
    //           <MdChevronRight className="text-lg text-white"/>
    //         </motion.div>
    //       </div>
    //     </div>
    //     <RowContainer flag={true}/>
    //   </section>
    // </div>
    <div className="w-100 h-auto flex-column d-flex align-items-center justify-content-center">
      <HomeContainer/>
    </div>
  );
};

export default Main;
