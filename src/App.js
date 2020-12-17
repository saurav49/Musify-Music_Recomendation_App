import React from "react";
import "./styles.css";
import Layout from "./Components/Layout/Layout";
import Favorite from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Favorite />
        <Footer />
      </Layout>
    </div>
  );
}
