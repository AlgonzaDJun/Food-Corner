import React, { useEffect } from "react";
import bgstand from "../assets/images/menu-bg.png";
import stand from "../assets/images/title-shape.svg";
import "./css/checkout.css";

import navbarLogo from "../assets/images/logo2.png";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../actions/orderActions";
const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Mengambil data order dari user
    dispatch(getOrder());
  }, []);

  const orderState = useSelector((state) => state.getOrderReducer);
  const { orderItems } = orderState;

  console.log(orderItems);

  // merubah tanggal dari database ke tanggal lokal
  const dateToLocal = (data) => {
    const date = new Date(data);
    const localDate = date.toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return localDate;
  };
  return (
    <div className="">
      <div className="">
        <section
          className=""
          style={{ marginTop: "60px", marginBottom: "100px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title text-center mb-5 mt-5">
                  <h2 className="pesan">
                    Daftar <br /> Menu Pesanan
                  </h2>
                  <div className="sec-title-shape mb-4">
                    <img src={stand} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {orderItems.map((item) => {
              return (
                <div
                  className="card mx-auto col-lg-6"
                  style={{ marginBottom: "50px" }}
                  key={item._id}
                >
                  <div className="card-body">
                    <h2 className="nama-pesan">Member : {item.name}</h2>
                    <h2 className="nama-pesan text-muted">
                      Status :{" "}
                      <br />
                      {
                        // map semua pesanan dan logic jika isDelivered true => pesanan ready
                        item.orderItems.map((item) => {
                          return !item.isPaid && !item.isDelivered ? (
                            <b>Belum Dibayar <br /></b> 
                          ) : item.isPaid && !item.isDelivered ? (
                            <b>Sudah Dibayar <br /></b>
                          ) : (
                            <b>Sudah Diantar <br /></b>
                          );
                        })
                      }
                    </h2>
                    <div className="stand-menu">
                      <h6 className="text-muted mb-3">
                        Tgl : {dateToLocal(item.createdAt)}
                      </h6>
                    </div>

                    <table className="table table-borderless">
                      <thead className="w-100">
                        <tr>
                          <th>
                            <h6
                              className="text-muted text-center"
                              style={{ width: "7rem" }}
                            ></h6>
                          </th>
                          <th>
                            <h6
                              className="text-muted text-center"
                              style={{ width: "4rem" }}
                            >
                              Jumlah
                            </h6>
                          </th>
                          <th>
                            <h6
                              className="text-muted text-center"
                              style={{ width: "8rem" }}
                            >
                              Porsi
                            </h6>
                          </th>
                          <th>
                            <h6
                              className="text-muted text-center"
                              style={{ width: "4rem" }}
                            >
                              Subtotal
                            </h6>
                          </th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.orderItems.map((item) => {
                          return (
                            <>
                              <tr className="p-0 m-0 mb-0 gap-0">
                                <td className="mb-0">
                                  <p className="text-muted p-0 m-0">
                                    ({item.standName})
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6
                                    className="menu mb-2 text-wrap"
                                    style={{ width: "7rem" }}
                                  >
                                    {item.name}{" "}
                                  </h6>
                                </td>
                                <td>
                                  <h6
                                    className="menu mb-2 text-center"
                                    style={{ width: "4rem" }}
                                  >
                                    {item.quantity}
                                  </h6>
                                </td>
                                <td>
                                  <p
                                    className="harga text-center"
                                    style={{ width: "8rem" }}
                                  >
                                    {item.price}
                                  </p>
                                </td>
                                <td>
                                  <p
                                    className="harga text-center"
                                    style={{ width: "4rem" }}
                                  >
                                    {item.prices}
                                  </p>
                                </td>
                              </tr>
                            </>
                          );
                        })}

                        {/* <tr className="stand-menu">
                          <td>
                            <h6
                              className="menu mb-2 text-wrap"
                              style={{ width: "7rem" }}
                            >
                              ayam geprek
                            </h6>
                          </td>
                          <td>
                            <h6
                              className="menu mb-2 text-center"
                              style={{ width: "4rem" }}
                            >
                              1
                            </h6>
                          </td>
                          <td className="harga text-center">
                            <p style={{ width: "8rem" }}>20,000</p>
                          </td>
                          <td>
                            <p
                              className="harga text-center"
                              style={{ width: "4rem" }}
                            >
                              20,000
                            </p>
                          </td>
                        </tr> */}
                        <tr className="horizon">
                          <td></td>
                          <td></td>
                          <td className="">
                            <h6
                              className="text-muted text-end text-wrap"
                              style={{ width: "8rem", height: "8px" }}
                            >
                              Total Pesanan:
                            </h6>
                          </td>
                          <td className="">
                            <h6
                              className="text-danger text-end"
                              style={{ width: "4rem", height: "8px" }}
                            >
                              {parseInt(item.orderAmount) - 1000}
                            </h6>
                          </td>
                        </tr>
                        <tr className="">
                          <td></td>
                          <td></td>
                          <td className="">
                            <h6
                              className="text-muted text-end text-wrap"
                              style={{ width: "8rem", height: "5px" }}
                            >
                              Subtotal Produk :
                            </h6>
                          </td>
                          <td className="">
                            <h6
                              className="text-danger text-end"
                              style={{ width: "4rem", height: "5px" }}
                            >
                              {parseInt(item.orderAmount) - 1000}
                            </h6>
                          </td>
                        </tr>
                        <tr className="">
                          <td></td>
                          <td></td>
                          <td className="">
                            <h6
                              className="text-muted text-end text-wrap"
                              style={{ width: "8rem", height: "5px" }}
                            >
                              Biaya Admin :
                            </h6>
                          </td>
                          <td className="">
                            <h6
                              className="text-danger text-end"
                              style={{ width: "4rem", height: "5px" }}
                            >
                              {item.adminFee}
                            </h6>
                          </td>
                        </tr>
                        <tr className="">
                          <td></td>
                          <td></td>
                          <td className="">
                            <h6
                              className="text-muted text-end text-wrap"
                              style={{ width: "8rem", height: "5px" }}
                            >
                              Pembayaran :
                            </h6>
                          </td>
                          <td className="">
                            <h6
                              className="text-danger text-end"
                              style={{ width: "4rem", height: "5px" }}
                            >
                              {item.orderAmount}
                            </h6>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
            {/* Mulai order pesanan */}

            {/* akhir menu pesanan */}
          </div>
        </section>
        {/* about us */}
        {/* <section className="two-col-sec section" id="aboutUs">
          
        </section> */}
        {/* end of about us */}
      </div>
    </div>
  );
};

export default Checkout;
