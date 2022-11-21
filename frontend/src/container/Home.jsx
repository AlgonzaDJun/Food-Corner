import React from "react";
import foodLogo from "../assets/logo.jpg";
import HeroBg from "../assets/heroBg.png";
import { heroData } from "../utils/Data";

const Home = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
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

        <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          Layanan E-Canteen yang&nbsp;
           <span className="text-orange-600 text-[2.7rem] lg:text-[4.2rem]">
            memudahkan anda
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam ipsam nulla nam mollitia obcaecati natus, magni optio accusamus
          nostrum, alias dolorum! Alias facere debitis exercitationem dolorem
          libero distinctio eligendi!
        </p>

        <button
          type="button"
          className="bg-gradient-to-r from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out"
        >
          Pesan Makanan
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto w-full h-420 lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-4 xl:px-31 xl2:px-32 py-5 gap-4 flex-wrap ">
          {heroData &&
            heroData.map((data) => (
              <div
                key={data.id}
                className="lg:w-190 p-3 md:min-h-[130px] lg:min-h-[180px] bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img src={data.imgSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {data.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {data.desc}
                </p>

                <p className="text-sm font-semibold text-headingColor ">
                  <span className="text-xs text-red-600">Rp. </span>{data.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
