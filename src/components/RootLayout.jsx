import React from "react";
import {Outlet} from "react-router-dom";

function RootLayout(props) {
  return (
	  <Outlet></Outlet>
  );
}

export default RootLayout;