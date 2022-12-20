import React, { useState } from "react";
import "../css/styles2.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Menu = () => {
  const [headerTogle, setHeaderTogle] = useState(false);

  const [editTogle, setEditTogle] = useState(false);

  const handleEdit = () => {
    setEditTogle(!editTogle);
  };
  return (
    <div className="w-100 h-100 d-grid min-vh-100">
      <div
        id="body-pd"
        className={headerTogle ? "body body-pd" : "body"}
        style={{ backgroundColor: "#80808045" }}
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

        {/* Content */}
        <div class="container-fluid" style={{ marginTop: 50 }}>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-4">
                <form action="#" method="post" enctype="multipart/form-data">
                  <div class="card mb-3">
                    <div
                      class="card-header"
                      style={{ backgroundColor: "rgb(208, 156, 250)" }}

                      // "background-color: rgb(208, 156, 250);"
                    >
                      Tambah Menu
                    </div>
                    <div class="card-body">
                      <div class="form-group">
                        <label class="control-label">Nama: </label>
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label class="control-label">Deskripsi: </label>
                        <textarea
                          cols="30"
                          rows="3"
                          class="form-control"
                          name="description"
                          required
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <label class="control-label">Harga</label>
                        <input
                          type="number"
                          class="form-control"
                          name="price"
                          required
                          min="1"
                        />
                      </div>

                      <div class="form-group">
                        <label for="image" class="control-label">
                          Image
                        </label>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          accept=".jpg"
                          class="form-control"
                          required
                          style={{ border: 0 }}
                        />
                        <small id="Info" class="form-text text-muted mx-3">
                          Upload dg format .jpg.
                        </small>
                      </div>
                    </div>

                    <div class="card-footer">
                      <div class="row">
                        <div class="mx-auto">
                          <button
                            type="submit"
                            name="createItem"
                            class="btn btn-sm btn-primary"
                          >
                            {" "}
                            Tambah{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-md-8">
                <div class="card">
                  <div class="card-body">
                    <table class="table table-bordered table-hover mb-0">
                      <thead style={{ backgroundColor: "rgb(208, 156, 250)" }}>
                        <tr>
                          <th class="text-center" style={{ width: "7%" }}>
                            Menu Id
                          </th>
                          <th class="text-center">Img</th>
                          <th class="text-center" style={{ width: "58%" }}>
                            Detail item
                          </th>
                          <th class="text-center" style={{ width: "18%" }}>
                            Aksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center"> menuId_1</td>
                          <td>
                            <img
                              src="menuStand.jpg"
                              alt="image for this item"
                              width="150px"
                              height="150px"
                            />
                          </td>
                          <td>
                            <p>
                              Nama : <b>Mie Goreng Gacor</b>
                            </p>
                            <p>
                              Deskripsi :{" "}
                              <b class="truncate">
                                {" "}
                                Mie dengan balutan coklat belgia yang renyah
                                bertaburkan serbuk sari bunga matahari
                              </b>
                            </p>
                            <p>
                              Harga : <b>12000</b>
                            </p>
                          </td>
                          <td class="text-center">
                            <div class="mx-auto" style={{ width: "112px" }}>
                              <button
                                class="btn btn-sm btn-primary"
                                type="button"
                                onClick={handleEdit}
                                style={{ width: "100%" }}
                              >
                                Edit
                              </button>
                              <form action="" method="POST">
                                <button
                                  name="removeItem"
                                  class="btn btn-sm btn-danger"
                                  style={{ marginLeft: "9px" }}
                                >
                                  Delete
                                </button>
                                <input type="hidden" name="" value="" />
                              </form>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}

        {/* modal edit */}
        {editTogle && (
          <Modal show={editTogle} onHide={handleEdit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="modal-body">
                <form enctype="multipart/form-data">
                  <div
                    class="text-left my-2 row"
                    style={{borderBottom: "2px solid #dee2e6"}}
                  >
                    <div class="form-group col-md-8">
                      <b>
                        <label for="image">Image</label>
                      </b>
                      <input
                        type="file"
                        name="itemimage"
                        id="itemimage"
                        accept=".jpg"
                        class="form-control"
                        required
                        style={{border: 0}}
                        onchange="document.getElementById('itemPhoto').src = window.URL.createObjectURL(this.files[0])"
                      />
                      <small id="Info" class="form-text text-muted mx-3">
                        Upload format .jpg.
                      </small>
                      <input type="hidden" id="menuId" name="menuId" value="" />
                      <button
                        type="submit"
                        class="btn btn-success my-1"
                        name="updateItemPhoto"
                      >
                        Update Img
                      </button>
                    </div>
                    <div class="form-group col-md-4">
                      <img
                        src="menuStand.jpg"
                        id="itemPhoto"
                        name="itemPhoto"
                        alt="db.collection('standMenu').findById()"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </form>
                <form action="#" method="post">
                  <div class="text-left my-2">
                    <b>
                      <label for="name">Nama</label>
                    </b>
                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      value=""
                      type="text"
                      required
                    />
                  </div>
                  <div class="text-left my-2 row">
                    <div class="form-group col-md-6">
                      <b>
                        <label for="price">Harga</label>
                      </b>
                      <input
                        class="form-control"
                        id="price"
                        name="price"
                        value="<?php echo $pizzaPrice; ?>"
                        type="number"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                  <div class="text-left my-2">
                    <b>
                      <label for="desc">Deskripsi</label>
                    </b>
                    <textarea
                      class="form-control"
                      id="desc"
                      name="desc"
                      rows="2"
                      required
                      minlength="6"
                    ></textarea>
                  </div>
                  <input type="hidden" id="menuId" name="menuId" value="" />
                  <button
                    type="submit"
                    class="btn btn-success"
                    name="updateItem"
                  >
                    Update
                  </button>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEdit}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEdit}>
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
                <a href="/menu" class="nav__link nav-menuManage">
                  <i class="bx bx-message-square-detail nav__icon"></i>
                  <span class="nav__name">Menu</span>
                </a>
                <a href="/" class="nav__link nav-siteManage">
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

export default Menu;
