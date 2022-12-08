// import React from "react";
// import ReactDOM from "react-dom";
// import $ from "jquery";
// import jQuery from "jquery";
// import ScrollTrigger from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js";
// import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js";
// import Parallax from "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js";

// export const jQueryCode = () => {
//     jQuery(".filters").on("click", function () {
//         jQuery("#menu-dish").removeClass("bydefault_show");
//     });
//     $(function () {
//         const filterList = {
//             init: function () {
//                 $("#menu-dish").mixItUp({
//                     selectors: {
//                         target: ".dish-box-wp",
//                         filter: ".filter",
//                     },
//                     animation: {
//                         effects: "fade",
//                         easing: "ease-in-out",
//                     },
//                     load: {
//                         filter: ".all, .breakfast, .lunch, .dinner",
//                     },
//                 });
//             },
//         };
//         filterList.init();
//     });
//     gsap.registerPlugin(ScrollTrigger);
//     const scene = $(".js-parallax-scene").get(0);
//     const parallaxInstance = new Parallax(scene);

//     $('body').removeClass('body-fixed');

//     //activating tab of filter
//     let targets = document.querySelectorAll(".filter");
//     let activeTab = 0;
//     let old = 0;
//     let dur = 0.4;
//     let animation;

//     for (let i = 0; i < targets.length; i++) {
//         targets[i].index = i;
//         targets[i].addEventListener("click", moveBar);
//     }

//     // initial position on first === All
//     gsap.set(".filter-active", {
//         x: targets[0].offsetLeft,
//         width: targets[0].offsetWidth
//     });

//     function moveBar() {
//         if (this.index != activeTab) {
//             if (animation && animation.isActive()) {
//                 animation.progress(1);
//             }
//             animation = gsap.timeline({
//                 defaults: {
//                     duration: 0.4
//                 }
//             });
//             old = activeTab;
//             activeTab = this.index;
//             animation.to(".filter-active", {
//                 x: targets[activeTab].offsetLeft,
//                 width: targets[activeTab].offsetWidth
//             });

//             animation.to(targets[old], {
//                 color: "#0d0d25",
//                 ease: "none"
//             }, 0);
//             animation.to(targets[activeTab], {
//                 color: "#fff",
//                 ease: "none"
//             }, 0);

//         }

//     }
// }

// $(document).jQuery(function ($) {
// //     "use strict";
// //     const swiper = new Swiper(".slide-content", {
// //         slidesPerView: 3,
// //         spaceBetween: 25,
// //         loop: true,
// //         centerSlide: 'true',
// //         fade: 'true',
// //         grabCursor: 'true',
// //         pagination: {
// //           el: ".swiper-pagination",
// //           clickable: true,
// //           dynamicBullets: true,
// //         },
// //         navigation: {
// //           nextEl: ".swiper-button-next",
// //           prevEl: ".swiper-button-prev",
// //         },

// //         breakpoints:{
// //             0: {
// //                 slidesPerView: 1,
// //             },
// //             520: {
// //                 slidesPerView: 2,
// //             },
// //             950: {
// //                 slidesPerView: 3,
// //             },
// //         },
// //       });

// jQuery(".filters").on("click", function () {
//     jQuery("#menu-dish").removeClass("bydefault_show");
// });
// $(function () {
//     const filterList = {
//         init: function () {
//             $("#menu-dish").mixItUp({
//                 selectors: {
//                     target: ".dish-box-wp",
//                     filter: ".filter",
//                 },
//                 animation: {
//                     effects: "fade",
//                     easing: "ease-in-out",
//                 },
//                 load: {
//                     filter: ".all, .breakfast, .lunch, .dinner",
//                 },
//             });
//         },
//     };
//     filterList.init();
// });
// gsap.registerPlugin(ScrollTrigger);
// const scene = $(".js-parallax-scene").get(0);
// const parallaxInstance = new Parallax(scene);
// });

// jQuery(window).on('load', function () {
//     $('body').removeClass('body-fixed');

//     //activating tab of filter
//     let targets = document.querySelectorAll(".filter");
//     let activeTab = 0;
//     let old = 0;
//     let dur = 0.4;
//     let animation;

//     for (let i = 0; i < targets.length; i++) {
//         targets[i].index = i;
//         targets[i].addEventListener("click", moveBar);
//     }

//     // initial position on first === All
//     gsap.set(".filter-active", {
//         x: targets[0].offsetLeft,
//         width: targets[0].offsetWidth
//     });

//     function moveBar() {
//         if (this.index != activeTab) {
//             if (animation && animation.isActive()) {
//                 animation.progress(1);
//             }
//             animation = gsap.timeline({
//                 defaults: {
//                     duration: 0.4
//                 }
//             });
//             old = activeTab;
//             activeTab = this.index;
//             animation.to(".filter-active", {
//                 x: targets[activeTab].offsetLeft,
//                 width: targets[activeTab].offsetWidth
//             });

//             animation.to(targets[old], {
//                 color: "#0d0d25",
//                 ease: "none"
//             }, 0);
//             animation.to(targets[activeTab], {
//                 color: "#fff",
//                 ease: "none"
//             }, 0);

//         }

//     }
// }

// );
