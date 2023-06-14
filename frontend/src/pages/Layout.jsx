import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default layout;
