import React, { useEffect } from "react";
import AboutSection from "../components/About";
import NavbarSection from "../components/NavbarSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function About() {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [])
  return (
    <>
      <NavbarSection />
      <Banner
        title="How it works"
        subtitle="Our aim is to make lending and borrowing to everyone as simple as counting 1,2,3"
      />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
