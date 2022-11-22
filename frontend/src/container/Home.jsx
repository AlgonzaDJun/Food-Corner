import React from "react";
import foodLogo from "../assets/images/main-b.jpg";
import bgstand from "../assets/images/menu-bg.png";
import dish1 from "../assets/images/dish/1.png";
import dish2 from "../assets/images/dish/2.png";
import dish3 from "../assets/images/dish/3.png";
import dish4 from "../assets/images/dish/4.png";
import dish5 from "../assets/images/dish/5.png";
import dish6 from "../assets/images/dish/6.png";
import HeroBg from "../assets/heroBg.png";
import { heroData } from "../utils/Data";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "./css/swiper-bundle.min.css";




const Home = () => {

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


    <div className="body-fixed h-auto mb-5">
      {/* start */}
      <section class="main-banner" id="home">
        <div class="sec-wp">
          <div class="container">
            <div class="row" style={{ paddingTop: '10px', }}>
              <div class="col-lg-6">
                <div class="banner-text">
                  <h1 class="h1-title">
                    Mau Makan Apa
                    <span>HARI INI</span>
                    ?
                  </h1>
                  <p>This is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eius
                    vel tempore consectetur nesciunt? Nam eius tenetur recusandae optio aperiam.</p>
                  <div class="banner-btn mt-4">
                    <a href="#menu" class="sec-btn">Check our Menu</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-img-wp">
                  <div class="banner-img" style={{ backgroundImage: `url(${foodLogo})`, }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of start */}

      {/* rekommendasi */}
      <section class="body-swiper">
        <div class="slide-container swiper">
          <div class="recom">
            <p class="recom">rekomendasi</p>
          </div>
          <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    <img src={dish1} class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish2} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish3} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish4} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish5} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish6} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish1} class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish4} alt="" class="card-img" />
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src={dish6} alt="" class="card-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-next swiper-navBtn"></div>
          <div class="swiper-button-prev swiper-navBtn"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
      {/* end of rekomdasi */}
      {/* stand */}
      <section style={{ backgroundImage: `url(${bgstand})`, }}
                class="our-menu section bg-light repeat-img" id="menu">
                <div class="sec-wp">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sec-title text-center mb-5">
                                    <h2 class="h2-title">mau makan apa? <span>langsung pilih di menu</span></h2>
                                    <div class="sec-title-shape mb-4">
                                        <img src="assets/images/title-shape.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-tab-wp">
                            <div class="row">
                                <div class="col-lg-12 m-auto">
                                    <div class="menu-tab text-center">
                                        <ul class="filters">
                                            <div class="filter-active"></div>
                                            <li class="filter" data-filter=".all, .stand1, .stand2, .stand3">
                                                <img src="assets/images/menu-1.png" alt=""/>
                                                All
                                            </li>
                                            <li class="filter" data-filter=".stand1">
                                                <img src="assets/images/menu-2.png" alt=""/>
                                                Stand 1
                                            </li>
                                            <li class="filter" data-filter=".stand2">
                                                <img src="assets/images/menu-3.png" alt=""/>
                                                Stand 2
                                            </li>
                                            <li class="filter" data-filter=".stand3">
                                                <img src="assets/images/menu-4.png" alt=""/>
                                                Stand 3
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-list-row">
                            <div class="row g-xxl-5 bydefault_show" id="menu-dish">
                                
                                {/* 1 */}
                                <div class="col-lg-4 col-sm-6 dish-box-wp stand1" data-cat="stand1">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/2.png" alt=""/>
                                        </div>
                                        <div class="star-rating-wp">
                                            <div class="star-rating">
                                                <span class="star-rating__fill" style={{width:'100%'}}></span>
                                            </div>
                                        </div>
                                        <div class="dish-title">
                                            <h3 class="h3-title">Grilled Chicken</h3>
                                        </div>
                                        <div class="dist-bottom-row">
                                            <p>Rp 20.000</p>
                                            <button class="dish-add-btn">
                                                <i class="uil uil-shopping-cart px-3 py-3">Add to cart</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div class="col-lg-4 col-sm-6 dish-box-wp stand1" data-cat="stand1">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/3.png" alt=""/>
                                        </div>
                                        <div class="star-rating-wp">
                                            <div class="star-rating">
                                                <span class="star-rating__fill" style="width:85%"></span>
                                            </div>
                                        </div>
                                        <div class="dish-title">
                                            <h3 class="h3-title">Panner Noodles</h3>
                                        </div>
                                        <div class="dist-bottom-row">
                                            <p>Rp 20.000</p>
                                            <button class="dish-add-btn">
                                                <i class="uil uil-shopping-cart px-3 py-3">Add to cart</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div class="col-lg-4 col-sm-6 dish-box-wp stand3" data-cat="stand3">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/4.png" alt=""/>
                                        </div>
                                        <div class="star-rating-wp">
                                            <div class="star-rating">
                                                <span class="star-rating__fill" style="width:95%"></span>
                                            </div>
                                        </div>
                                        <div class="dish-title">
                                            <h3 class="h3-title">Chicken Noodles</h3>
                                        </div>
                                        <div class="dist-bottom-row">
                                            <p>Rp 20.000</p>
                                            <button class="dish-add-btn">
                                                <i class="uil uil-shopping-cart px-3 py-3">Add to cart</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div class="col-lg-4 col-sm-6 dish-box-wp stand3" data-cat="stand3">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/5.png" alt=""/>
                                        </div>
                                        <div class="star-rating-wp">
                                            <div class="star-rating">
                                                <span class="star-rating__fill" style="width:85%"></span>
                                            </div>
                                        </div>
                                        <div class="dish-title">
                                            <h3 class="h3-title">Bread Boiled Egg</h3>
                                        </div>
                                        <div class="dist-bottom-row">
                                            <p>Rp 20.000</p>
                                            <button class="dish-add-btn">
                                                <i class="uil uil-shopping-cart px-3 py-3">Add to cart</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div class="col-lg-4 col-sm-6 dish-box-wp stand1" data-cat="stand1">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/6.png" alt=""/>
                                        </div>
                                        <div class="star-rating-wp">
                                            <div class="star-rating">
                                                <span class="star-rating__fill" style="width:75%"></span>
                                            </div>
                                        </div>
                                        <div class="dish-title">
                                            <h3 class="h3-title">Immunity Dish</h3>
                                        </div>
                                        <div class="dist-bottom-row">
                                            <p>Rp 20.000</p>
                                            <button class="dish-add-btn">
                                                <i class="uil uil-shopping-cart px-3 py-3">Add to cart</i>
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
    </div>
  );
};

export default Home;
