import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RoleAccess = ({ roles = [] }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  console.log(user)
  return !roles.length || roles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace/>
  );
};

export default RoleAccess;
