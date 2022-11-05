import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import I1 from "../assets/ayam_geprek.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { getAllFoods } from "../actions/foodActions";

const Row = ({ flag }) => {
  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodsReducer);

  const { foods, error, loading } = foodState;

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  return (
    <div
      className={`w-full my-12 flex gap-x-8 bg-cardOverlay  ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1> Terjadi Error</h1>
      ) : (
        foods.map((food) => {
          return (
            <div className="w-300 my-12 md:w-340 hover:drop-shadow-lg h-auto backdrop-blur-lg bg-gray-100 rounded-lg" key={food._id}>
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
                <p className="text-textColor font-semibold text-base ">
                  {food.name}
                </p>
                {/* <p className="mt-1 text-sm text-gray-500 ">Pedis & Manis</p> */}
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold ">
                    <span className="text-sm text-red-500 ">Rp</span> {food.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Row;
