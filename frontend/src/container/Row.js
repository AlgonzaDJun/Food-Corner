import React from "react";
import I1 from "../assets/ayam_geprek.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const Row = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 bg-cardOverlay  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 my-12 md:w-340 hover:drop-shadow-lg h-auto backdrop-blur-lg bg-gray-100 rounded-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={I1}
            alt=""
            className="w-40 -mt-8 drop-shadow-2xl"
          />

          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-4 items-end justify-end">
          <p className="text-textColor font-semibold text-base ">Ayam Geprek</p>
          <p className="mt-1 text-sm text-gray-500 ">Pedis & Manis</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold ">
              <span className="text-sm text-red-500 ">Rp</span> 10.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
