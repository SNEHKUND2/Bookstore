import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/Freebook";
import Footer from "../Components/Footer";

function Home1() {
  return (
    <div>
      <>
        <Navbar/>
        <Banner/>
        <Freebook />
        {/* <Cards/> */}
        <Footer />
      </>
    </div>
  );
}

export default Home1;
