import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Registation from "../../component/RegisterBanner/RegisterBanner";
import FCategorie from "../../component/FCategorie/FCategorie";


const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Registation />
      <FCategorie />
      <Footer />

    </>
  );
};

export default Home;
