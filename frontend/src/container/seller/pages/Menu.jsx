import React, { useEffect, useState } from "react";
import "../css/styles2.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../actions/userActions";
import {
  addNewFood,
  deleteFood,
  updateFood,
} from "../../../actions/foodActions";
import { getFoodStand } from "../../../actions/standActions";
import Error from "../../../components/Error";
import Success from "../../../components/Success";

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodStand());
  }, []);

  const [modalData, setModalData] = useState(null);

  const foodStandState = useSelector((state) => state.getFoodStand);
  const { foodStand } = foodStandState;

  // console.log(foodStand);
  const addFoodState = useSelector((state) => state.addFoodReducer);
  const deleteFoodState = useSelector((state) => state.deleteFoodReducer);
  const updateFoodState = useSelector((state) => state.updateFoodReducer);

  useEffect(() => {
    dispatch(getFoodStand());
  }, [addFoodState.success, deleteFoodState.success, updateFoodState.success]);

  const [headerTogle, setHeaderTogle] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [image, setImage] = useState([]);

  const [updateNama, setUpdateNama] = useState("");
  const [updateHarga, setUpdateHarga] = useState("");
  const [updateImage, setUpdateImage] = useState([]);

  const [editTogle, setEditTogle] = useState(false);

  const onHideModalEdit = () => {
    handleEdit();
    setModalData(null);
  };

  const handleEdit = () => {
    setEditTogle(!editTogle);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  //handle and convert it in base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);

    // console.log(file);
  };

  const setUpdateFileToBase = (file) => {
    const readerUpdate = new FileReader();
    readerUpdate.readAsDataURL(file);
    readerUpdate.onloadend = () => {
      setUpdateImage(readerUpdate.result);
    };
  };

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    setUpdateFileToBase(file);
    console.log(file);
  };

  //submit the form
  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(addNewFood(nama, harga, image));
    await dispatch(getFoodStand());
  };

  // update form
  const updateForm = async (e, idFood) => {
    e.preventDefault();
    dispatch(updateFood(updateNama, updateHarga, updateImage, idFood));
    await dispatch(getFoodStand());
  };

  const deleteForm = async (e, idFood) => {
    e.preventDefault();
    dispatch(deleteFood(idFood));
    await dispatch(getFoodStand());
  };

  return (
    <div className="w-100 h-100 d-grid min-vh-100">
      <div
        id="body-pd"
        className={headerTogle ? "body body-pd" : "body"}
        style={{ backgroundColor: "#80808045" }}
      >
        {addFoodState.success ||
        deleteFoodState.success ||
        updateFoodState.success ? (
          <Success text="Sukses!" />
        ) : null}
        {addFoodState.error && <Error text="Terjadi error!!" />}
        {deleteFoodState.error && <Error text="Terjadi error!!" />}
        {updateFoodState.error && <Error text="Terjadi error!!" />}
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

        {/* Content */}
        <div class="container-fluid" style={{ marginTop: 50 }}>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-4">
                <form>
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
                          onChange={(e) => {
                            setNama(e.target.value);
                            addFoodState.error = null;
                            updateFoodState.error = null;
                            deleteFoodState.error = null;
                            addFoodState.success = null;
                            updateFoodState.success = null;
                            deleteFoodState.success = null;
                          }}
                          value={nama}
                          type="text"
                          class="form-control"
                          name="name"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <label class="control-label">Harga</label>
                        <input
                          onChange={(e) => {
                            setHarga(e.target.value);
                            addFoodState.error = null;
                            updateFoodState.error = null;
                            deleteFoodState.error = null;
                            addFoodState.success = null;
                            updateFoodState.success = null;
                            deleteFoodState.success = null;
                          }}
                          value={harga}
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
                          onChange={handleImage}
                        />
                        <img
                          className="img-fluid w-50 h-50"
                          src={image}
                          alt=""
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
                            onClick={(e) => submitForm(e)}
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
                        {foodStand.map((item) => {
                          return (
                            <tr key={item._id}>
                              <td class="text-center"> {item._id}</td>
                              <td>
                                <img
                                  src={item.image}
                                  alt="image item"
                                  width="100px"
                                  height="100px"
                                />
                              </td>
                              <td>
                                <p>
                                  Nama : <b>{item.name}</b>
                                </p>
                                <p>
                                  Harga : <b>{item.price}</b>
                                </p>
                              </td>
                              <td class="text-center">
                                <div class="mx-auto" style={{ width: "80px" }}>
                                  <button
                                    class="btn btn-sm btn-primary mb-2"
                                    type="button"
                                    onClick={() => {
                                      handleEdit();
                                      setModalData(item);
                                    }}
                                    style={{ width: "100%" }}
                                  >
                                    Edit
                                  </button>
                                  <form>
                                    <button
                                      name="removeItem"
                                      class="btn btn-sm btn-danger"
                                      style={{ width: "100%" }}
                                      onClick={(e) => deleteForm(e, item._id)}
                                    >
                                      Delete
                                    </button>
                                    <input type="hidden" name="" value="" />
                                  </form>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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
          <Modal show={editTogle} onHide={onHideModalEdit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="modal-body">
                <form>
                  <div
                    class="text-left my-2 row"
                    style={{ borderBottom: "2px solid #dee2e6" }}
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
                        style={{ border: 0 }}
                        onChange={handleUpdateImage}
                      />
                      <small id="Info" class="form-text text-muted mx-3">
                        Upload format .jpg.
                      </small>
                      {/* <input type="hidden" id="menuId" name="menuId" value="" /> */}
                    </div>
                    <div class="form-group col-md-4">
                      <img
                        src={updateImage}
                        id="itemPhoto"
                        name="itemPhoto"
                        alt="item image"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div class="text-left my-2">
                    <b>
                      <label for="name">Nama</label>
                    </b>
                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      value={updateNama}
                      placeholder={modalData.name}
                      onChange={(e) => {
                        setUpdateNama(e.target.value);
                        addFoodState.error = null;
                        updateFoodState.error = null;
                        deleteFoodState.error = null;
                        addFoodState.success = null;
                        updateFoodState.success = null;
                        deleteFoodState.success = null;
                      }}
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
                        value={updateHarga}
                        placeholder={modalData.price}
                        onChange={(e) => {
                          setUpdateHarga(e.target.value);
                          addFoodState.error = null;
                          updateFoodState.error = null;
                          deleteFoodState.error = null;
                          addFoodState.success = null;
                          updateFoodState.success = null;
                          deleteFoodState.success = null;
                        }}
                        type="number"
                        min="1"
                        required
                      />
                    </div>
                  </div>
                  {/* <input type="hidden" id="menuId" name="menuId" value="" /> */}
                  <button
                    // type="submit"
                    class="btn btn-success"
                    name="updateItem"
                    onClick={(e) => {
                      updateForm(e, modalData._id);
                    }}
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
                <a href="/menu" class="nav__link nav-menuManage">
                  <i class="bx bx-message-square-detail nav__icon"></i>
                  <span class="nav__name">Menu</span>
                </a>
              </div>
            </div>
            <a class="nav__link" onClick={() => dispatch(logoutUser())}>
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
