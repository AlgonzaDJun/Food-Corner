import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Success from "../../components/Success";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userActions";
import {
  createStand,
  deleteStand,
  editStand,
  getStandAdmin,
} from "../../actions/standActions";

function Admin() {
  const [isActive, setIsActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [standID, setStandID] = useState("");
  const [modalData, setModalData] = useState(null);

  const [updateNama, setUpdateNama] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");

  const dispatch = useDispatch();

  const createStandState = useSelector((state) => state.createStand);
  const updateStandState = useSelector((state) => state.updateStand);
  const deleteStandState = useSelector((state) => state.deleteStand);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  const handleEdit = () => {
    // 👇️ toggle isActive state on click
    setIsEdit((current) => !current);
  };
  const onHideModalEdit = async () => {
    handleEdit();
    setModalData(null);
    await dispatch(getStandAdmin());
  };

  useEffect(() => {
    dispatch(getStandAdmin());
  }, []);

  useEffect(() => {
    dispatch(getStandAdmin());
  }, [
    createStandState.success,
    updateStandState.success,
    deleteStandState.success,
  ]);

  const getStand = useSelector((state) => state.getStandAdmin);
  const { stand } = getStand;

  console.log(stand);

  return (
    <div className="" style={{ marginTop: "130px" }}>
      <div class="container mt-3">
        <h2 className="text-center mb-4">Table Stand</h2>
        <table className=" w-100 mb-1">
          <tr>
            <td>
              <button className="btn">
                <i class="uil uil-user-plus" onClick={handleClick}>
                  New Stand
                </i>
              </button>
            </td>
            <td className="float-end">
              <button
                className="btn d-grid justify-content-md-end"
                onClick={() => dispatch(logoutUser())}
              >
                <i class="uil uil-sign-out-alt">Log out</i>
              </button>
            </td>
          </tr>
        </table>

        <table class="table table-bordered">
          <thead>
            <tr className="text-white" style={{ backgroundColor: "#1746A2" }}>
              <th className="text-center">Nama</th>
              <th className="text-center">Email</th>
              <th className="text-center">Password</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {stand.map((item) => {
              return (
                <tr className="text-center">
                  <td id="namaStand" className="w-25">
                    {item.name}
                  </td>
                  <td>{item.email}</td>
                  <td className="text-truncate">{item.password}</td>
                  <td>Aktif</td>
                  <td className="mx-auto gap-2 w-25">
                    <button
                      type="button"
                      class="btn btn-primary mx-2"
                      onClick={() => {
                        handleEdit();
                        setModalData(item);
                      }}
                    >
                      <i className="mx-2 uil uil-edit-alt" />
                    </button>
                    <button
                      className="btn"
                      onClick={async () => {
                        dispatch(deleteStand(item._id));
                        await dispatch(getStandAdmin());
                      }}
                    >
                      <i className="mx-2 uil uil-trash-alt" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Create Stand */}
      {isActive ? (
        <Modal show={isActive} onHide={handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Stand</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Stand</Form.Label>
                <Form.Control
                  type="namaStand"
                  placeholder="nama stand" //tampilin nama sesuai standnya
                  autoFocus
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com" //tampilin alamat email sebelum diganti
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password" // tampilin password sebelumnya
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Stand ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="01"
                  autoFocus
                  onChange={(e) => setStandID(e.target.value)}
                  value={standID}
                />
              </Form.Group>
              <label htmlFor="" className="">
                Status Stand
              </label>
              <div className="mb-4 pb-2 mt-2 mx-2">
                <select className="select" style={{ width: "70px" }}>
                  <option value="1">Aktif</option>
                  <option value="2">Libur</option>
                </select>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClick}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
                await dispatch(createStand(nama, email, password, standID));
                await dispatch(getStandAdmin());
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : isEdit ? (
        // Edit Modal
        <Modal show={isEdit} onHide={onHideModalEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Stand</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nama Stand</Form.Label>
                <Form.Control
                  type="namaStand"
                  placeholder={modalData.name} //tampilin nama sesuai standnya
                  autoFocus
                  onChange={(e) => setUpdateNama(e.target.value)}
                  value={updateNama}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={modalData.email} //tampilin alamat email sebelum diganti
                  autoFocus
                  onChange={(e) => setUpdateEmail(e.target.value)}
                  value={updateEmail}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder={modalData.password} // tampilin password sebelumnya
                  autoFocus
                  onChange={(e) => setUpdatePassword(e.target.value)}
                  value={updatePassword}
                />
              </Form.Group>
              <label htmlFor="" className="">
                Status Stand
              </label>
              <div className="mb-4 pb-2 mt-2 mx-2">
                <select className="select" style={{ width: "70px" }}>
                  <option value="1">Aktif</option>
                  <option value="2">Libur</option>
                </select>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClick}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
                dispatch(
                  editStand(
                    updateNama,
                    updateEmail,
                    updatePassword,
                    modalData._id
                  )
                );
                await dispatch(getStandAdmin());
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}

export default Admin;
