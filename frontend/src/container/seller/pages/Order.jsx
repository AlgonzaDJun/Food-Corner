import React, { useState } from "react";
import "../css/styles2.css";
import "../css/barOrderStyle.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Order = () => {
  const [headerTogle, setHeaderTogle] = useState(false);

  const [statusTogle, setStatusTogle] = useState(false);
  const [itemTogle, setItemTogle] = useState(false);
  const handleStatus = () => {
    setStatusTogle(!statusTogle);
  };
  const handleItem = () => {
    setItemTogle(!itemTogle);
  };

  return (
    <div className="w-100 h-100 d-grid min-vh-100">
      <div
        id="body-pd"
        className={headerTogle ? "body body-pd" : "body"}
        style={{ backgroundColor: "#80808045"}}
      >
        <header class={headerTogle ? "body-pd header" : "header"} id="header">
          <div class="header__toggle">
            <i
              class={headerTogle ? `bx bx-menu bx-x` : `bx bx-menu`}
              id="header-toggle"
              onClick={() => setHeaderTogle(!headerTogle)}
            ></i>
          </div>
          <div class="header__img">
            <img src="" alt="profil" />
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
                  <a href="#" onclick="window.print()" class="btn btn-info">
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
              <th>User Id</th>
              <th>Nama</th>
              <th>Tagihan</th>
              <th>Status</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>orderId_99</td>
              <td>userId_1</td>
              <td>Kimi Hime</td>
              <td>20000</td>
              <td>
                <button class="view btn" onClick={handleStatus}>
                  <i class="material-icons">&#xE5C8;</i>
                </button>
              </td>
              <td>
                <button class="view btn" onClick={handleItem}>
                  <i class="material-icons">&#xE5C8;</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* content */}

        {/* modal untuk status*/}

        {statusTogle && (
          <Modal show={statusTogle} onHide={handleStatus} size="lg">
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
                        <div class="text-center">Status Pesanan</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div class="p-2">
                          <img
                            src="menuOrder.jpg"
                            alt="dr-database"
                            width="70"
                            class="img-fluid rounded shadow-sm"
                          />
                          <div class="ml-3 d-inline-block align-middle">
                            <h6 class="mb-0">Ayam Goreng</h6>
                            <span class="text-muted font-weight-normal font-italic d-block">
                              10.000
                            </span>
                          </div>
                        </div>
                      </th>
                      <td class="align-middle text-center">
                        <strong> 2 </strong>
                      </td>
                      <td className="align-middle">
                        <select
                          className="select"
                          // onChange={eatPlaceHandle}
                        >
                          <option value="dine-in">Dibayar</option>
                          <option value="take-away">DiAntar</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleStatus}>
                Close
              </Button>
              <Button variant="primary" onClick={handleStatus}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* modal untuk items*/}

        {itemTogle && (
          <Modal show={itemTogle} onHide={handleItem}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
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
                    <tr>
                      <th scope="row">
                        <div class="p-2">
                          <img
                            src="menuOrder.jpg"
                            alt="ngambil-dr-database"
                            width="70"
                            class="img-fluid rounded shadow-sm"
                          />
                          <div class="ml-3 d-inline-block align-middle">
                            <h5 class="mb-0">Ayam Goreng</h5>
                            <span class="text-muted font-weight-normal font-italic d-block">
                              10.000
                            </span>
                          </div>
                        </div>
                      </th>
                      <td class="align-middle text-center">
                        <strong> 2 </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleItem}>
                Close
              </Button>
              <Button variant="primary" onClick={handleItem}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* navbar */}
        <div class={headerTogle ? "l-navbar showa" : "l-navbar"} id="nav-bar">
          <nav class="nav">
            <div>
              <a href="/seller2" class="nav__logo">
                <i class="bx bx-layer nav__logo-icon"></i>
                <span class="nav__logo-name">Stand Management</span>
              </a>

              <div class="nav__list">
                <a href="/seller2" class="nav__link nav-home">
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
                <a href="/seller2" class="nav__link nav-siteManage">
                  <i class="fas fa-cogs"></i>
                  <span class="nav__name">Profile Settings</span>
                </a>
              </div>
            </div>
            <a href="" class="nav__link">
              <i class="bx bx-log-out nav__icon"></i>
              <span class="nav__name">Log Out</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Order;
