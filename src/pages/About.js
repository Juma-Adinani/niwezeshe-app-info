import React from "react";
import AboutSection from "../components/About";
import NavbarSection from "../components/NavbarSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavbarSection />
      <Banner
        title="How it works"
        subtitle="Our aim is to make lending and borrowing as as counting 1,2,3 to everyone"
      />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
