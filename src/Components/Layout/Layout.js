import React from "react";
import Navbar from "../Navbar/Navbar";
import Auxiliary from "../../hoc/Auxiliary";

const Layout = (props) => {
  return (
    <Auxiliary>
      <Navbar />
      <main> {props.children} </main>
    </Auxiliary>
  );
};

export default Layout;
