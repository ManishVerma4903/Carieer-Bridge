import React from "react";
import NavBar from "./shared/NavBar";
import HeroSection from "./HeroSection";
import Category from "./Category";
import LatestJob from "./LatestJob";
import Footer from "./Footer";

function Home() {
  return (
    <div >
      <NavBar />
      <HeroSection />
      <Category/>
      <LatestJob/>
      <Footer/>
    </div>
  );
}

export default Home;
