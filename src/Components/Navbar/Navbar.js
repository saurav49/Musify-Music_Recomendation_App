import React from "react";
import Emoji from "a11y-react-emoji";
import styles from "./Navbar.module.css";
import Auxiliary from "../../hoc/Auxiliary";

const Navbar = () => {
  return (
    <Auxiliary>
      <div className={styles.Navbar}>
        <h2>
          <Emoji symbol="🎸" label="guitar" /> Musify
        </h2>
      </div>
      <h4> Check out my favorite Music. Select a genre to get started</h4>
    </Auxiliary>
  );
};

export default Navbar;
