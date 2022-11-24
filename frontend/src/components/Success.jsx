import React from "react";

const Success = ({ text }) => {
  return (
    <div className="alert alert-success">
      <strong>Success!</strong> {text}
    </div>
  );
};

export default Success;
