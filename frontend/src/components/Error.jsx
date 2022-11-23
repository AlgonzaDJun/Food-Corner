import React from "react";

const Error = ({ text }) => {
  return (
    <div class="alert alert-danger">
      <strong>Error!</strong> {text}
    </div>
  );
};

export default Error;
