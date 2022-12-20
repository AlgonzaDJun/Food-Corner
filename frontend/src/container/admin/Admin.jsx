import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Admin() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    // return (
    //     <div style={{ marginTop: "170px" }}>
    //         {
    //             isActive ? <Success/> : null 
    //         }
    //         {/* <div className={isActive ? '' : 'text-center'}>
    //             <div id="liveAlertPlaceholder">

    //             </div>
    //         </div> */}
    //         {/* <button className="bg-dark" onClick={handleClick}></button> */}
    //         <button type="button" class="btn btn-primary" id="liveAlertBtn" onClick={handleClick}>Show live alert</button>
    //     </div>
    // );
    // }



    // function Admin() {

    return (
        // <div className="app" style={{marginTop : '100px'}}>
        //     {/* {Data.map((options, i) => (
        //         <Dropdown key={i} options={options}/>
        //     ))} */}

        // </div>

        <div className="" style={{ marginTop: "130px" }}>
            <div class="container mt-3">
                <h2 className="text-center mb-4">Table Stand</h2>
                <table className=' w-100 mb-1'>
                    <tr>
                        <td>
                            <button className='btn'>
                                <i class="uil uil-user-plus"onClick={handleClick}>New Stand</i>
                            </button>
                        </td>
                        <td className='float-end'>
                            <button className='btn d-grid justify-content-md-end'>
                                <i class="uil uil-sign-out-alt">Log out</i>
                            </button>
                        </td>
                    </tr>

                    
                </table>

                <table class="table table-bordered">
                    <thead>
                        <tr className="text-white" style={{ backgroundColor: "#1746A2" }} >
                            <th className="text-center">Nama</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Password</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr className="text-center">
                            <td id='namaStand' className='w-25'>Stand Jambu</td>
                            <td>jambu@example.com</td>
                            <td>123456</td>
                            <td>Aktif</td>
                            <td className="mx-auto gap-2 w-25">
                                <button type="button" class="btn btn-primary mx-2" onClick={handleClick}>
                                    <i className="mx-2 uil uil-edit-alt" />
                                </button>
                                <button className="btn"><i className="mx-2 uil uil-trash-alt" /></button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td id='namaStand'>Stand Jambu</td>
                            <td>jambu@example.com</td>
                            <td>123456</td>
                            <td>Aktif</td>
                            <td className="mx-auto gap-2">
                                <button type="button" class="btn btn-primary mx-2" onClick={handleClick}>
                                    <i className="mx-2 uil uil-edit-alt" />
                                </button>
                                <button className="btn"><i className="mx-2 uil uil-trash-alt" /></button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td id='namaStand'>Stand Jambu</td>
                            <td>jambu@example.com</td>
                            <td>123456</td>
                            <td>Aktif</td>
                            <td className="mx-auto">
                                <button type="button" class="btn btn-primary mx-2" onClick={handleClick}>
                                    <i className="mx-2 uil uil-edit-alt" />
                                </button>
                                <button className="btn"><i className="mx-2 uil uil-trash-alt" /></button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td id='namaStand'>Stand Jambu</td>
                            <td>jambu@example.com</td>
                            <td>123456</td>
                            <td>Aktif</td>
                            <td className="mx-auto">
                                <button type="button" class="btn btn-primary mx-2" onClick={handleClick}>
                                    <i className="mx-2 uil uil-edit-alt" />
                                </button>
                                <button className="btn"><i className="mx-2 uil uil-trash-alt" /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                isActive ? <Modal show={isActive} onHide={handleClick}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Stand</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nama Stand</Form.Label>
                                <Form.Control
                                    type="namaStand"
                                    placeholder="nama stand" //tampilin nama sesuai standnya
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com" //tampilin alamat email sebelum diganti
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="password" // tampilin password sebelumnya
                                    autoFocus
                                />
                            </Form.Group>
                            <label htmlFor="" className=''>Status Stand</label>
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
                        <Button variant="primary" onClick={handleClick}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> : null
            }
        </div>
    );
};

export default Admin;