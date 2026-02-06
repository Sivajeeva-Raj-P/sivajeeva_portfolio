import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
