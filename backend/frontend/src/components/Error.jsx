import React, { useRef, useState } from "react";
import { Alert, CButton, CToast, CToastBody, CToaster, CToastHeader } from '@coreui/bootstrap-react';

const Error = ({ text }) => {

  const exampleToast = (
    <CToast
      delay={1500} className="justify-content-center bg-transparent border-0 w-100" >
      <div class="alert alert-danger text-center w-100">
        <i class="uil uil-check-circle" style={{ fontSize: '16px' }}>{text}</i>
      </div>
    </CToast>
  )
  return (
    <CToaster push={exampleToast} placement="bottom-center"/>
  )


};

export default Error;
