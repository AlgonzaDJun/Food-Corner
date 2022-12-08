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
import Recommendation from "./Recommendation";

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
    <div className="w-100 h-auto flex-column d-flex align-items-center justify-content-center">
      <div className="body-fixed h-auto w-100">
        {/* start */}
        <section className="main-banner" id="home">
          <div className="sec-wp">
            <div className="container">
              <div className="row" style={{ paddingTop: "10px"}}>
                <div className="col-lg-6">
                  <div className="banner-text">
                    <h1 className="h1-title">
                      Mau Makan Apa {""}
                      <span>HARI INI</span>?
                    </h1>
                    <p>
                      This is Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Numquam eius vel tempore consectetur
                      nesciunt? Nam eius tenetur recusandae optio aperiam.
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

        <Recommendation />

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
        <section className="two-col-sec section" id="aboutUs">
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
                    aspernatur? Quos laboriosam, repudiandae exercitationem
                    atque a excepturi vel. Voluptas, ipsa.
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Mollitia, tenetur.
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
                            <i className="uil uil-clock"></i> Mon-Thurs : 8am -
                            19pm
                          </li>
                          <li>
                            <i className="uil uil-clock"></i> Fri-Sun : 9am -
                            18pm
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
                      Copyright &copy; 2021{" "}
                      <span className="name">Kelompok 7.</span>
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
    </div>
  );
};

export default Home;
