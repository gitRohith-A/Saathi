import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MissionAndVision from "@/components/MissionAndVision";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main">
        <div className="top-container">
          <Banner />
        </div>
        <About />
        <MissionAndVision />
        <Footer />
      </div>
    </React.Fragment>
  );
}
