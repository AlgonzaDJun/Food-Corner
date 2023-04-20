import React, { useState } from "react";
import "../css/styles2.css";
import "../css/barOrderStyle.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { logoutUser } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../../actions/standActions";
import { orderPaid, orderDelivered } from "../../../actions/orderActions";
import Success from "../../../components/Success";
import Error from "../../../components/Error";

const Order = () => {
  const [modalData, setModalData] = useState(null);
  const orderDeliveredState = useSelector((state) => state.orderDeliverReducer);
  const orderPaidState = useSelector((state) => state.orderPaidReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    dispatch(getOrders());
  }, [orderPaidState.success ,orderDeliveredState.success]);

  const onHideModalItem = () => {
    handleItem();
    setModalData(null);
  };
  const onHideModalStatus = () => {
    handleStatus();
    setModalData(null);
    orderPaidState.success = false;
    orderDeliveredState.success = false;
  };

  const orderState = useSelector((state) => state.getOrders);
  const { orders } = orderState;

  console.log(orders);

  const dispatch = useDispatch();

  const [headerTogle, setHeaderTogle] = useState(false);

  const [statusTogle, setStatusTogle] = useState(false);
  const [itemTogle, setItemTogle] = useState(false);
  const handleStatus = () => {
    setStatusTogle(!statusTogle);
  };
  const handleItem = () => {
    setItemTogle(!itemTogle);
  };

  const [modalChange, setModalChange] = useState(false);

  const paidOrder = (orderId, itemId) => {
    dispatch(orderPaid(orderId, itemId));
    dispatch(getOrders());
  };

  const deliveredOrder = (orderId, itemId) => {
    dispatch(orderDelivered(orderId, itemId));
    dispatch(getOrders());
  };

  return (
    <div className="w-100 h-100 d-grid min-vh-100">
      <div
        id="body-pd"
        className={headerTogle ? "body body-pd" : "body"}
        style={{ backgroundColor: "#80808045" }}
      >
        {orderPaidState.error || orderDeliveredState.error ? (
          <Error text={"terjadi error"} />
        ) : null}
        {orderPaidState.success || orderDeliveredState.success ? (
          <Success text={"berhasil merubah status"} />
        ) : null}
        <header class={headerTogle ? "body-pd header" : "header"} id="header">
          <div class="header__toggle">
            <i
              class={headerTogle ? `bx bx-menu bx-x` : `bx bx-menu`}
              id="header-toggle"
              onClick={() => setHeaderTogle(!headerTogle)}
            ></i>
          </div>
          <div class="header__img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profil"
            />
          </div>
        </header>

        {/* content */}
        <div
          class="container"
          style={{ marginTop: 98, backgroundColor: "aliceblue" }}
        >
          <div class="table-wrapper">
            <div class="table-title" style={{ borderRadius: "14px" }}>
              <div class="row">
                <div class="col-sm-4">
                  <h2>
                    Order <b>Details</b>
                  </h2>
                </div>
                <div class="col-sm-8">
                  <a href="" class="btn btn-primary">
                    <i class="material-icons">&#xE863;</i>{" "}
                    <span>Refresh List</span>
                  </a>
                  <a href="#" class="btn btn-info">
                    <i class="material-icons">&#xE24D;</i> <span>Print</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table table-striped table-hover text-center" id="NoOrder">
          <thead style={{ backgroundColor: "aliceblue" }}>
            <tr>
              <th>Order Id</th>
              <th>Jenis pesanan</th>
              <th>Nama</th>
              <th>Tagihan</th>
              <th>Status</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => {
              modalChange && setModalData(item);

              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.eatPlace}</td>
                  <td>{item.name}</td>
                  <td>{item.orderAmount}</td>
                  <td>
                    <button
                      class="view btn"
                      onClick={() => {
                        handleStatus();
                        setModalData(item);
                        dispatch(getOrders());
                      }}
                    >
                      <i class="material-icons">&#xE5C8;</i>
                    </button>
                  </td>
                  <td>
                    <button
                      class="view btn"
                      onClick={() => {
                        handleItem();
                        setModalData(item);
                      }}
                    >
                      <i class="material-icons">&#xE5C8;</i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* content */}

        {/* modal untuk status*/}

        {statusTogle && (
          <Modal show={statusTogle} onHide={onHideModalStatus} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Status Orderan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="table-responsive">
                <table class="table text">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 bg-light">
                        <div class="px-3">Item</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="text-center">Jumlah</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="text-center">Total Harga</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="text-center">Status Pesanan</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {modalData.orderItems.map((status) => {
                      return (
                        <tr key={status._id}>
                          <th scope="row">
                            <div class="p-2">
                              <img
                                src={status.image}
                                alt="dr-database"
                                width="70"
                                class="img-fluid rounded shadow-sm"
                              />
                              <div class="ml-3 d-inline-block align-middle">
                                <h6 class="mb-0">{status.name}</h6>
                                <span class="text-muted font-weight-normal font-italic d-block">
                                  {status.price}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td class="align-middle text-center">
                            <strong> {status.quantity} </strong>
                          </td>
                          <td class="align-middle text-center">
                            <strong> {status.prices} </strong>
                          </td>
                          <td className="align-middle">
                            {/* <select
                              className="select"
                              // onChange={eatPlaceHandle}
                              
                            >
                              <option value="dine-in">Dibayar</option>
                              <option value="take-away">DiAntar</option>
                            </select> */}
                            {!status.isPaid && !status.isDelivered ? (
                              <Button
                                onClick={() => {
                                  paidOrder(modalData._id, status._id);
                                }}
                              >
                                Customer Bayar
                              </Button>
                            ) : status.isPaid && !status.isDelivered ? (
                              <Button
                                onClick={ () => {
                                  deliveredOrder(modalData._id, status._id);
                                }}
                              >
                                Antar Pesanan
                              </Button>
                            ) : (
                              <Button
                                disabled
                                style={{
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                              >
                                Sudah Diantar
                              </Button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                style={{ width: "100%" }}
                onClick={handleStatus}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* modal untuk items*/}
        {itemTogle && (
          <Modal show={itemTogle} onHide={onHideModalItem}>
            <Modal.Header closeButton>
              <Modal.Title>Item order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="table-responsive">
                <table class="table text">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 bg-light">
                        <div class="px-3">Item</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="text-center">Jumlah</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {modalData.orderItems.map((order) => {
                      return (
                        <tr key={order._id}>
                          <th scope="row">
                            <div class="p-2">
                              <img
                                src={order.image}
                                alt="dr-database"
                                width="70"
                                class="img-fluid rounded shadow-sm"
                              />
                              <div class="ml-3 d-inline-block align-middle">
                                <h5 class="mb-0">{order.name}</h5>
                                <span class="text-muted font-weight-normal font-italic d-block">
                                  {order.prices}
                                </span>
                              </div>
                            </div>
                          </th>
                          <td class="align-middle text-center">
                            <strong> {order.quantity}</strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                className="w-100"
                onClick={handleItem}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* navbar */}
        <div class={headerTogle ? "l-navbar showa" : "l-navbar"} id="nav-bar">
          <nav class="nav">
            <div>
              <a class="nav__logo">
                <i class="bx bx-layer nav__logo-icon"></i>
                <span class="nav__logo-name">Stand Management</span>
              </a>

              <div class="nav__list">
                <a href="/seller" class="nav__link nav-home">
                  <i class="bx bx-grid-alt nav__icon"></i>
                  <span class="nav__name">Home</span>
                </a>
                <a href="/order" class="nav-orderManage nav__link ">
                  <i class="bx bx-bar-chart-alt-2 nav__icon"></i>
                  <span class="nav__name">Orders</span>
                </a>
                <a href="/Menu" class="nav__link nav-menuManage">
                  <i class="bx bx-message-square-detail nav__icon"></i>
                  <span class="nav__name">Menu</span>
                </a>
              </div>
            </div>
            <a class="nav__link" onClick={() => dispatch(logoutUser())}>
              <i class="bx bx-log-out nav__icon"></i>
              <span class="nav__name log-out">Log Out</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Order;
