import React from "react";

const Error = ({ text }) => {
  return (
    <div className="alert alert-danger mx-2">
      <strong>Error!</strong> {text}
    </div>
  );
};

export default Error;
