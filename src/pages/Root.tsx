import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
// ROOT LAYOUT
const Root = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
