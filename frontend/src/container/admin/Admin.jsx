// import React from "react";
// import { useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// // import Data from './Data';
// // import Dropdown from "./Dropdown";
// // import "./seller.css"

import { useState } from 'react';
import Success from '../../components/Success';


export default function Admin() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    return (
        <div style={{ marginTop: "170px" }}>
            {
                isActive ? <Success/> : null 
            }
            {/* <div className={isActive ? '' : 'text-center'}>
                <div id="liveAlertPlaceholder">

                </div>
            </div> */}
            {/* <button className="bg-dark" onClick={handleClick}></button> */}
            <button type="button" class="btn btn-primary" id="liveAlertBtn" onClick={handleClick}>Show live alert</button>
        </div>
    );
}



// function Seller() {

//     return (
//         // <div className="app" style={{marginTop : '100px'}}>
//         //     {/* {Data.map((options, i) => (
//         //         <Dropdown key={i} options={options}/>
//         //     ))} */}

//         // </div>

//         <div className="" style={{ marginTop: "90px" }}>
//             <div class="container mt-3">
//                 <h2 className="text-center mb-5">Table Stand</h2>
//                 {/* <p>The .table-striped class adds zebra-stripes to a table:</p> */}
//                 <table class="table table-bordered">
//                     <thead>
//                         <tr className="bg-grey">
//                             <th className="text-center">Nama</th>
//                             <th className="text-center">Email</th>
//                             <th className="text-center">Password</th>
//                             <th className="text-center">Status</th>
//                             <th className="text-center">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="text-center">
//                             <td>Stand Jambu</td>
//                             <td>jambu@example.com</td>
//                             <td >123456</td>
//                             <td>
//                                 <div className="mb-4 pb-2">
//                                     <select className="select">
//                                         <option value="1">Aktif</option>
//                                         <option value="2">Libur</option>
//                                     </select>
//                                 </div>
//                             </td>
//                             <td className="mx-auto">
//                                 <button className="btn"><i className="mx-2 uil uil-edit-alt"></i></button>
//                                 {/* <button onClick={doSomething}>Do something</button>; */}
//                                 {/* <button className="btn"><i className="mx-2 uil uil-trash-alt"></i> */}
//                                     {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
//                                     <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
//                                 {/* </button> */}
//                             </td>
//                         </tr>
//                         <tr className="text-center">
//                             <td>Stand Jambu</td>
//                             <td>jambu@example.com</td>
//                             <td>123456</td>
//                             <td>Akrif</td>
//                             <td className="mx-auto">
//                                 <button className="btn"><i className="mx-2 uil uil-edit-alt"></i></button>
//                                 <button className="btn"><i className="mx-2 uil uil-trash-alt"></i></button>
//                             </td>
//                         </tr>
//                         <tr className="text-center">
//                             <td>Stand Jambu</td>
//                             <td>jambu@example.com</td>
//                             <td>123456</td>
//                             <td>Akrif</td>
//                             <td className="mx-auto">
//                                 <button className="btn"><i className="mx-2 uil uil-edit-alt"></i></button>
//                                 <button className="btn"><i className="mx-2 uil uil-trash-alt"></i></button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Seller;