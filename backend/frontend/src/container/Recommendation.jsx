import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import I1 from "../assets/ayam_geprek.png";
import { MdAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
// import { getAllFoods } from "../actions/foodActions";
import { getAllStands } from "../actions/standActions";
import { addToCart, getCart } from "../actions/cartActions";
import Error from "../components/Error";
import Success from "../components/Success";

const Recommendation = () => {
  const dispatch = useDispatch();
  // const foodState = useSelector((state) => state.getAllFoodsReducer);
  const standState = useSelector((state) => state.getAllStandsReducer);
  const cartState = useSelector((state) => state.cartReducer);

  const [errorState, setErrorState] = useState(false);

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const { stands, error, loading } = standState;
  // const { cartItems } = cartState;
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getAllStands());
  }, []);

  // const addtocart = (menu) => {
  //   dispatch(addToCart(menu, quantity));
  // };

  // console.log(cartItems)

  return (
    <div className="h-auto w-100">
      {/* rekommendasi */}
      <section className="body-swiper">
        <div className="slide-container swiper">
          <div className="recom">
            <p className="recom mx-2">Rekomendasi Menu</p>
          </div>
          {errorState && <Error text={"Silakan Login terlebih dahulu"} />}
          {cartState.success && <Success text={"Berhasil menambah ke keranjang"} />}
          <div className="slide-content">
            <div className="card-wrapper swiper-wrapper">
              {loading ? (
                <h1 className="mx-auto">Loading...</h1>
              ) : error ? (
                <h1 className="mx-auto"> Terjadi Error</h1>
              ) : (
                stands.map((stand) => {
                  return (
                    <>
                      {stand.menu.map((menu, index) => {
                        return (
                          <div className="swiper-slide" key={index}>
                            <div className="image-content">
                              <span className="overlay"></span>
                              <div className="card-image position-relative">
                                <motion.img
                                  whileHover={{ scale: 1.2 }}
                                  src={menu.image}
                                  className="card-img"
                                  alt="menu"
                                />
                                <div
                                  className="position-absolute"
                                  style={{ bottom: 0, right: 0 }}
                                >
                                  <button
                                    className="border-0 m-0 p-1 rounded-4 bg-light"
                                    style={{ backgroundColor: "transparent" }}
                                    onClick={
                                      !currentUser
                                        ? () => setErrorState(!errorState)
                                        : async () => {
                                            await dispatch(addToCart(menu, 1));
                                            dispatch(getCart());
                                          }
                                    }
                                  >
                                    <MdAddShoppingCart size={30} />
                                  </button>
                                </div>
                              </div>
                              <p>{menu.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })
              )}
            </div>
          </div>

          <div className="swiper-button-next swiper-navBtn"></div>
          <div className="swiper-button-prev swiper-navBtn"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
      {/* end of rekomdasi */}
    </div>
  );
};

export default Recommendation;
