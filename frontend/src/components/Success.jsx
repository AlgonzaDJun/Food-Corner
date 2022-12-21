import React, { useRef, useState } from "react";
import { Alert, CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/bootstrap-react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
// import './sukses.css';




function Success() {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const exampleToast = (
    <CToast title="Bootstrap React">
      <CToastHeader close>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          // xmlns="http://www.w3.org/2000/svg"
          // preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <strong className="me-auto">Bootstrap React</strong>
        {/* <small>7 min ago</small> */}
      </CToastHeader>
      <CToastBody>Hello, world! This is a toast message.</CToastBody>
    </CToast>
  )
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton>
        // <CToaster ref={toaster} push={toast} placement="top-end" />

      ))}
    </>
  )
}


// const [toast, addToast] = useState(0)
// const toaster = useRef()
// const exampleToast = (
//   <CToast title="Bootstrap React">
//     <CToastHeader close>
//       <svg
//         className="rounded me-2"
//         width="20"
//         height="20"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="xMidYMid slice"
//         focusable="false"
//         role="img"
//       >
//         <rect width="100%" height="100%" fill="#007aff"></rect>
//       </svg>
//       <strong className="me-auto">Bootstrap React</strong>
//       <small>7 min ago</small>
//     </CToastHeader>
//     <CToastBody>Hello, world! This is a toast message.</CToastBody>
//   </CToast>
// )

// const Success = () => {

// const [position, setPosition] = useState('top-start');
// const [isActive, setIsActive] = useState(false);


// return (

//   <div>
//     <CButton onClick={() => addToast(exampleToast)}>Send a toast</CButton>
//     <CToaster ref={toaster} push={toast} placement="top-end" />
//   </div>


// );
// <div id="snackbar" >Some text some message..</div>




// <div
//   aria-live="polite"
//   aria-atomic="true"
//   className="bg-dark position-relative"
//   style={{ minHeight: '240px' }}
// >
//   <ToastContainer position="top-end" className="p-3">
//     <Toast>
//       <Toast.Header>
//         <img
//           src="holder.js/20x20?text=%20"
//           className="rounded me-2"
//           alt=""
//         />
//         <strong className="me-auto">Bootstrap</strong>
//         <small className="text-muted">just now</small>
//       </Toast.Header>
//       <Toast.Body>See? Just like this.</Toast.Body>
//     </Toast>
//     <Toast>
//       <Toast.Header>
//         <img
//           src="holder.js/20x20?text=%20"
//           className="rounded me-2"
//           alt=""
//         />
//         <strong className="me-auto">Bootstrap</strong>
//         <small className="text-muted">2 seconds ago</small>
//       </Toast.Header>
//       <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
//     </Toast>
//   </ToastContainer>
// </div>
// );



//   return (
//     <Alert variant="success" style={{marginTop: "100px"}}>
//       <Alert.Heading>Hey, nice to see you</Alert.Heading>
//       <p>
//         Aww yeah, you successfully read this important alert message. This
//         example text is going to run a bit longer so that you can see how
//         spacing within an alert works with this kind of content.
//       </p>
//       <hr />
//       <p className="mb-0">
//         Whenever you need to, be sure to use margin utilities to keep things
//         nice and tidy.
//       </p>
//     </Alert>
//     // <div className="alert alert-success">

//     //   <strong>Success!</strong> {text}
//     // </div>
//   );
// };

export default Success;
