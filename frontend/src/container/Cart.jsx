import React, { useEffect, useState } from "react";
import bgstand from "../assets/images/menu-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteFromcart, getCart, incrementCart } from "../actions/cartActions";
import { placeOrder } from "../actions/orderActions";
import "./css/Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.getCartReducer);
  const { cartItems } = cartState;
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const [eatPlace, setEatPlace] = useState("dine-in");

  const eatPlaceHandle = (e) => {
    setEatPlace(e.target.value);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  let subTotal = cartItems.reduce((x, item) => x + item.prices, 0);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const checkoutHandler = (cartItem, eatPlace) => {
    if (parseInt(subTotal) > 0) {
      dispatch(placeOrder(cartItem, eatPlace));
      navigate("/checkoutdetails");
    }
  };

  // console.log(cartItems);

  return (
    <div className="w-100">
      <section
        className=" bg-light repeat-img w-100 vh-100"
        style={{ backgroundImage: `url(${bgstand})`, marginTop: "60px" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {currentUser && cartItems.length} items
                          </h6>
                        </div>
                        <hr className="my-3" />
                        {!currentUser ? (
                          <h1>Silakan Login terlebih dahulu</h1>
                        ) : (
                          <>
                            {cartItems.map((item) => {
                              return (
                                <div key={item._id}>
                                  <div
                                    className="row mb-4 d-flex justify-content-between align-items-center"
                                    key={item._id}
                                  >
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={item.image}
                                        className="img-fluid rounded-3"
                                        alt="Cotton T-shirt"
                                      />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-muted">
                                        {item.standName}
                                      </h6>
                                      <h6 className="text-black mb-0">
                                        {item.name}
                                      </h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      <button
                                        className="btn btn-link px-2"
                                        onClick={
                                          item.quantity < 1
                                            ? async () => {
                                                await dispatch(
                                                  deleteFromcart(item)
                                                );
                                                dispatch(getCart());
                                              }
                                            : async () => {
                                                await dispatch(
                                                  incrementCart(item, -1)
                                                );
                                                dispatch(getCart());
                                              }
                                        }
                                      >
                                        <i className="fas fa-minus"></i>
                                      </button>

                                      <input
                                        min="0"
                                        name="quantity"
                                        value={item.quantity}
                                        type="number"
                                        className="form-control form-control-sm mx-2"
                                        style={{ width: "50px" }}
                                        readOnly
                                      />

                                      <button
                                        className="btn btn-link px-2"
                                        onClick={async () => {
                                          await dispatch(
                                            incrementCart(item, 1)
                                          );
                                          dispatch(getCart());
                                        }}
                                      >
                                        <i className="fas fa-plus"></i>
                                      </button>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 className="mb-0">
                                        {formatRupiah(item.price)}
                                      </h6>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <button
                                        className="btn border-0"
                                        onClick={async () => {
                                          await dispatch(deleteFromcart(item));
                                          dispatch(getCart());
                                        }}
                                      >
                                        <i className="fas fa-times"></i>
                                      </button>
                                    </div>
                                  </div>

                                  <hr className="my-3" />
                                </div>
                              );
                            })}
                          </>
                        )}

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to={"/"} className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {currentUser && cartItems.length}
                          </h5>
                        </div>
                        <h5>Jenis Pesanan</h5>
                        <div className="mb-4 pb-2">
                          <select
                            className="select"
                            onChange={eatPlaceHandle}
                          >
                            <option value="dine-in">Dine in</option>
                            <option value="take-away">Takeaway</option>
                          </select>
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>

                          {!currentUser ? (
                            <h5>0</h5>
                          ) : (
                            <h5>{formatRupiah(subTotal)}</h5>
                          )}
                        </div>

                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg w-100"
                          data-mdb-ripple-color="dark"
                          onClick={() => checkoutHandler(cartItems, eatPlace)}
                        >
                          Bayar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
