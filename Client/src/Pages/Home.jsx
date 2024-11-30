import React from "react";
import Footer from "../Component/Footer/Footer";
import  Navbar from "../Component/Navbar/Navbar"
import CarCard from "../Component/CarCard/CarCard";
import Hero from "../Component/Hero/Hero";
import SmallBanner from "../Component/SmallBanner/SmallBanner";
import Filter from "../Component/FIlter/Filter";
import DetailCards from "../Component/DetailCard/DetailCard";
import TopPickVehicles from "../Component/TopPickVehicles/TopPickVehicles";
function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <DetailCards/>
    <TopPickVehicles/>
    <CarCard/>
    <SmallBanner/>
    <Footer/>
    </>
  );
}
export default Home;
