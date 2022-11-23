import React, { useEffect } from "react";
import navbarLogo from "../assets/images/logo2.png";
import foodLogo from "../assets/images/main-b.jpg";
import bgstand from "../assets/images/menu-bg.png";
import dish1 from "../assets/images/dish/1.png";
import dish2 from "../assets/images/dish/2.png";
import dish3 from "../assets/images/dish/3.png";
import dish4 from "../assets/images/dish/4.png";
import dish5 from "../assets/images/dish/5.png";
// import dish6 from "../assets/images/dish/6.png";
import bg1 from "../assets/images/menu-1.png";
import bg2 from "../assets/images/menu-2.png";
import bg3 from "../assets/images/menu-3.png";
import bg4 from "../assets/images/menu-4.png";
import stand from "../assets/images/title-shape.svg";
// import HeroBg from "../assets/heroBg.png";
// import { heroData } from "../utils/Data";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FreeMode } from "swiper";
import "swiper/css";
import "./css/swiper-bundle.min.css";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
import Row from "./Row";

const Home = () => {
  useEffect(() => {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: "true",
      fade: "true",
      grabCursor: "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    // <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
    //   <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
    //     <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
    //       <p className="text-base text-orange-500 font-semibold">E-Canteen</p>
    //       <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
    //         <img
    //           src={foodLogo}
    //           className="w-full h-full object-contain"
    //           alt="foodlogo"
    //         />
    //       </div>
    //     </div>

    //     <p className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
    //       Layanan E-Canteen yang&nbsp;
    //        <span className="text-orange-600 text-[2.7rem] lg:text-[4.2rem]">
    //         memudahkan anda
    //       </span>
    //     </p>

    //     <p className="text-base text-textColor text-center md:text-left">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
    //       magnam ipsam nulla nam mollitia obcaecati natus, magni optio accusamus
    //       nostrum, alias dolorum! Alias facere debitis exercitationem dolorem
    //       libero distinctio eligendi!
    //     </p>

    //     <button
    //       type="button"
    //       className="bg-gradient-to-r from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out"
    //     >
    //       Pesan Makanan
    //     </button>
    //   </div>
    //   <div className="py-2 flex-1 flex items-center relative">
    //     <img
    //       src={HeroBg}
    //       className="ml-auto w-full h-420 lg:w-auto lg:h-650"
    //       alt="hero-bg"
    //     />

    //     <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-4 xl:px-31 xl2:px-32 py-5 gap-4 flex-wrap ">
    //       {heroData &&
    //         heroData.map((data) => (
    //           <div
    //             key={data.id}
    //             className="lg:w-190 p-3 md:min-h-[130px] lg:min-h-[180px] bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
    //           >
    //             <img src={data.imgSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />

    //             <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
    //               {data.name}
    //             </p>
    //             <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
    //               {data.desc}
    //             </p>

    //             <p className="text-sm font-semibold text-headingColor ">
    //               <span className="text-xs text-red-600">Rp. </span>{data.price}
    //             </p>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </section>

    <div className="body-fixed h-auto w-100">
      {/* start */}
      <section className="main-banner" id="home">
        <div className="sec-wp">
          <div className="container">
            <div className="row" style={{ paddingTop: "10px" }}>
              <div className="col-lg-6">
                <div className="banner-text">
                  <h1 className="h1-title">
                    Mau Makan Apa {''}
                    <span>HARI INI</span>?
                  </h1>
                  <p>
                    This is Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Numquam eius vel tempore consectetur nesciunt? Nam
                    eius tenetur recusandae optio aperiam.
                  </p>
                  <div className="banner-btn mt-4">
                    <a href="#menu" className="sec-btn">
                      Check our Menu
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img-wp">
                  <div
                    className="banner-img"
                    style={{ backgroundImage: `url(${foodLogo})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of start */}

      <Row/>
      
      {/* stand */}
      <section
        style={{ backgroundImage: `url(${bgstand})` }}
        className="our-menu section bg-light repeat-img w-100"
        id="menu"
      >
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title text-center mb-5">
                  <h2 className="h2-title">
                    mau makan apa? <span>langsung pilih di menu</span>
                  </h2>
                  <div className="sec-title-shape mb-4">
                    <img src={stand} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-tab-wp">
              <div className="row">
                <div className="col-lg-12 m-auto">
                  <div className="menu-tab text-center">
                    <ul className="filters">
                      <div className="filter-active"></div>
                      <li
                        className="filter"
                        data-filter=".all, .stand1, .stand2, .stand3"
                      >
                        <img src={bg1} alt="" />
                        All
                      </li>
                      <li className="filter" data-filter=".stand1">
                        <img src={bg2} alt="" />
                        Stand 1
                      </li>
                      <li className="filter" data-filter=".stand2">
                        <img src={bg3} alt="" />
                        Stand 2
                      </li>
                      <li className="filter" data-filter=".stand3">
                        <img src={bg4} alt="" />
                        Stand 3
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-list-row">
              <div className="row g-xxl-5 bydefault_show" id="menu-dish">
                {/* 1 */}
                <div
                  className="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div className="dish-box text-center">
                    <div className="dist-img">
                      <img src={dish1} alt="" />
                    </div>
                    <div className="star-rating-wp">
                      <div className="star-rating">
                        <span
                          className="star-rating__fill"
                          style={{ width: "100%" }}
                        ></span>
                      </div>
                    </div>
                    <div className="dish-title">
                      <h3 className="h3-title">Grilled Chicken</h3>
                    </div>
                    <div className="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button className="dish-add-btn">
                        <i className="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div
                  className="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div className="dish-box text-center">
                    <div className="dist-img">
                      <img src={dish2} alt="" />
                    </div>
                    <div className="star-rating-wp">
                      <div className="star-rating">
                        <span
                          className="star-rating__fill"
                          style={{ width: "83%" }}
                        ></span>
                      </div>
                    </div>
                    <div className="dish-title">
                      <h3 className="h3-title">Panner Noodles</h3>
                    </div>
                    <div className="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button className="dish-add-btn">
                        <i className="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  className="col-lg-4 col-sm-6 dish-box-wp stand3"
                  data-cat="stand3"
                >
                  <div className="dish-box text-center">
                    <div className="dist-img">
                      <img src={dish3} alt="" />
                    </div>
                    <div className="star-rating-wp">
                      <div className="star-rating">
                        <span
                          className="star-rating__fill"
                          sstyle={{ width: "70%" }}
                        ></span>
                      </div>
                    </div>
                    <div className="dish-title">
                      <h3 className="h3-title">Chicken Noodles</h3>
                    </div>
                    <div className="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button className="dish-add-btn">
                        <i className="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 4 */}
                <div
                  className="col-lg-4 col-sm-6 dish-box-wp stand3"
                  data-cat="stand3"
                >
                  <div className="dish-box text-center">
                    <div className="dist-img">
                      <img src={dish4} alt="" />
                    </div>
                    <div className="star-rating-wp">
                      <div className="star-rating">
                        <span
                          className="star-rating__fill"
                          style={{ width: "90%" }}
                        ></span>
                      </div>
                    </div>
                    <div className="dish-title">
                      <h3 className="h3-title">Bread Boiled Egg</h3>
                    </div>
                    <div className="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button className="dish-add-btn">
                        <i className="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                {/* 5 */}
                <div
                  className="col-lg-4 col-sm-6 dish-box-wp stand1"
                  data-cat="stand1"
                >
                  <div className="dish-box text-center">
                    <div className="dist-img">
                      <img src={dish5} alt="" />
                    </div>
                    <div className="star-rating-wp">
                      <div className="star-rating">
                        <span
                          className="star-rating__fill"
                          style={{ width: "100%" }}
                        ></span>
                      </div>
                    </div>
                    <div className="dish-title">
                      <h3 className="h3-title">Immunity Dish</h3>
                    </div>
                    <div className="dist-bottom-row">
                      <p>Rp 20.000</p>
                      <button className="dish-add-btn">
                        <i className="uil uil-shopping-cart px-3 py-3">
                          Add to cart
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of stand */}
      {/* about us */}
      <section className="two-col-sec section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="sec-img mt-5">
                <img src={navbarLogo} alt="" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sec-text">
                <h2 className="xxl-title">FooD CorneR</h2>
                <p>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet dolores eligendi earum eveniet soluta officiis
                  asperiores repellat, eum praesentium nihil totam. Non ipsa
                  expedita repellat atque mollitia praesentium assumenda quo
                  distinctio excepturi nobis tenetur, cum ab vitae fugiat hic
                  aspernatur? Quos laboriosam, repudiandae exercitationem atque
                  a excepturi vel. Voluptas, ipsa.
                </p>
                <p>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. At fugit laborum voluptas magnam sed ad illum? Minus
                  officiis quod deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of about us */}
      {/* footer */}
      <footer className="site-footer" id="contact">
        <div className="top-footer section">
          <div className="sec-wp">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-info">
                    <div className="footer-logo">
                      <a href="/">
                        <img
                          src={navbarLogo}
                          alt=""
                          style={{ height: "80px", borderRadius: "50%" }}
                        />
                      </a>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Mollitia, tenetur.
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a src="https://www.facebook.com/">
                            <i className="uil uil-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-github-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="uil uil-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="footer-flex-box">
                    <div className="footer-table-info">
                      <h3 className="h3-title">open hours</h3>
                      <ul>
                        <li>
                          <i className="uil uil-clock"></i> Mon-Thurs : 9am - 22pm
                        </li>
                        <li>
                          <i className="uil uil-clock"></i> Fri-Sun : 11am - 22pm
                        </li>
                      </ul>
                    </div>
                    <div className="footer-menu food-nav-menu">
                      <h3 className="h3-title">Links</h3>
                      <ul className="column-2">
                        <li>
                          <a href="#home" className="footer-active-menu">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#menu">Menu</a>
                        </li>
                        <li>
                          <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                          <a href="#blog">Blog</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-menu">
                      <h3 className="h3-title">Company</h3>
                      <ul>
                        <li>
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Cookie Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2021 <span className="name">TechieCoder.</span>
                    All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
            <button className="scrolltop">
              <i className="uil uil-angle-up"></i>
            </button>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </div>
  );
};

export default Home;
