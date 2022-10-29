import React from "react";
import foodLogo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen">
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
            <p className="text-base text-orange-500 font-semibold">E-Canteen</p>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <img
                src={foodLogo}
                className="w-full h-full object-contain"
                alt="foodlogo"
              />
            </div>
          </div>

          <p className="text-[2.5rem] lg:text-[3.8rem] font-bold tracking-wide text-headingColor">
            Layanan E-Canteen di
            <span className="text-orange-600 text-[3rem] lg:text-[4.2rem]"> Kampus Kita</span>
          </p>

          <p className="text-base text-textColor text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            magnam ipsam nulla nam mollitia obcaecati natus, magni optio
            accusamus nostrum, alias dolorum! Alias facere debitis
            exercitationem dolorem libero distinctio eligendi!
          </p>

          <button type="button" className="bg-gradient-to-r from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out">Pesan Makanan</button>
        </div>
        <div className="py-2 flex-1 bg-sky-500"></div>
      </div>
    </div>
  );
};

export default Home;
