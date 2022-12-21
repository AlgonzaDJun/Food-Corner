import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllStands } from "../actions/standActions";
import { addToCart, getCart } from "../actions/cartActions";
import Success from "../components/Success";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStands());
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

  const cartState = useSelector((state) => state.cartReducer);

  const standState = useSelector((state) => state.getAllStandsReducer);
  const { stands, error, loading } = standState;

  const foodData = stands.map((stand) => {
    return stand.menu.map((item, index) => {
      return item;
    });
  });
  // menggabungkan yang berbeda stand
  const allFood = foodData.reduce((a, b) => a.concat(b), []);

  const [stand, setStand] = useState("all");

  const filterData = (filter) => {
    return allFood.filter((item) => {
      return item.standID === filter;
    });
  };

  return (
    <div className="w-100 h-auto flex-column d-flex align-items-center justify-content-center">
      <div className="body-fixed h-auto w-100">
        {/* start */}
        {cartState.success && <Success text={"Berhasil menambah ke keranjang"} />}
        <section className="main-banner" id="home">
          <div className="sec-wp">
            <div className="container">
              <div className="row" style={{ paddingTop: "10px" }}>
                <div className="col-lg-6">
                  <div className="banner-text">
                    <h1 className="h1-title">
                      Mau Makan Apa {""}
                      <span>HARI INI</span>?
                    </h1>
                    <p>
                    Tersedia berbagai macam stand makanan yang bisa kalian pilih berdasarkan selera anda.
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
              <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#stand"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="menu-tab-wp" id="stand">
                <div className="row">
                  <div className="col-lg-12 m-auto">
                    <div className="menu-tab text-center d-flex gap-4 justify-content-center">
                      {/* <ul className="filters"> */}
                      <div className="filter-center"></div>
                      <li
                        className={
                          stand === "all" ? "btn active btn-stand text-white" : "btn active"
                        }
                        onClick={() => setStand("all")}
                        to={"/"}
                      >
                        <img src={bg1} alt="" />
                        All
                      </li>
                      <li
                        className={stand === "01" ? "btn btn-stand text-white" : "btn active"}
                        onClick={() => setStand("01")}
                      >
                        <img src={bg2} alt="" />
                        Stand 1
                      </li>
                      <li
                        className={stand === "02" ? "btn btn-stand text-white" : "btn active"}
                        onClick={() => setStand("02")}
                      >
                        <img src={bg3} alt="" />
                        Stand 2
                      </li>
                      <li
                        className={stand === "03" ? "btn btn-stand text-white" : "btn active"}
                        onClick={() => setStand("03")}
                      >
                        <img src={bg4} alt="" />
                        Stand 3
                      </li>
                      {/* </ul> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-list-row">
                <div className="row g-xxl-5 bydefault_show">
                  {/* 1 */}
                  {stand === "all"
                    ? allFood.map((item) => {
                        return (
                          <div
                            className="col-lg-4 col-sm-6 dish-box-wp stand1"
                            id="stand1"
                            key={item._id}
                          >
                            <div className="dish-box text-center">
                              <div className="dist-img">
                                <img src={item.image} alt={item.name} />
                              </div>
                              
                              <div className="dish-title">
                                <h3 className="h3-title">{item.name}</h3>
                              </div>
                              <div className="dist-bottom-row">
                                <p>{item.price}</p>
                                <button
                                  className="dish-add-btn"
                                  onClick={async () => {
                                    await dispatch(addToCart(item, 1));
                                    dispatch(getCart());
                                  }}
                                >
                                  <i className="uil uil-shopping-cart px-3 py-3">
                                    Add to cart
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : stand === "01"
                    ? filterData("01").map((item) => {
                        return (
                          <div
                            className="col-lg-4 col-sm-6 dish-box-wp stand1"
                            id="stand1"
                            key={item._id}
                          >
                            <div className="dish-box text-center">
                              <div className="dist-img">
                                <img src={item.image} alt={item.name} />
                              </div>
                              
                              <div className="dish-title">
                                <h3 className="h3-title">{item.name}</h3>
                              </div>
                              <div className="dist-bottom-row">
                                <p>{item.price}</p>
                                <button
                                  className="dish-add-btn"
                                  onClick={async () => {
                                    await dispatch(addToCart(item, 1));
                                    dispatch(getCart());
                                  }}
                                >
                                  <i className="uil uil-shopping-cart px-3 py-3">
                                    Add to cart
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : stand === "02"
                    ? filterData("02").map((item) => {
                        return (
                          <div
                            className="col-lg-4 col-sm-6 dish-box-wp stand1"
                            id="stand1"
                            key={item._id}
                          >
                            <div className="dish-box text-center">
                              <div className="dist-img">
                                <img src={item.image} alt={item.name} />
                              </div>
                              
                              <div className="dish-title">
                                <h3 className="h3-title">{item.name}</h3>
                              </div>
                              <div className="dist-bottom-row">
                                <p>{item.price}</p>
                                <button
                                  className="dish-add-btn"
                                  onClick={async () => {
                                    await dispatch(addToCart(item, 1));
                                    dispatch(getCart());
                                  }}
                                >
                                  <i className="uil uil-shopping-cart px-3 py-3">
                                    Add to cart
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : filterData("03").map((item) => {
                        return (
                          <div
                            className="col-lg-4 col-sm-6 dish-box-wp stand1"
                            id="stand1"
                            key={item._id}
                          >
                            <div className="dish-box text-center">
                              <div className="dist-img">
                                <img src={item.image} alt={item.name} />
                              </div>
                              
                              <div className="dish-title">
                                <h3 className="h3-title">{item.name}</h3>
                              </div>
                              <div className="dist-bottom-row">
                                <p>{item.price}</p>
                                <button
                                  className="dish-add-btn"
                                  onClick={async () => {
                                    await dispatch(addToCart(item, 1));
                                    dispatch(getCart());
                                  }}
                                >
                                  <i className="uil uil-shopping-cart px-3 py-3">
                                    Add to cart
                                  </i>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                  {/* 2 */}
                  {/* <div
                    className="col-lg-4 col-sm-6 dish-box-wp stand2"
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
                  </div> */}
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
                  Food corner merupakan website kantin yang bisa diakses kapan saja secara online untuk memudahkan proses pemesanan konsumen dan untuk meningkatkan efisiensi dalam mengelola kantin di Universitas Negeri Surabaya.
                  </p>
                  <p>
                    
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
