import React from "react";
import AboutSection from "../components/About";
import NavbarSection from "../components/NavbarSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function About() {
  return (
    <>
    <NavbarSection/>
      <Banner
        title="How it works"
        subtitle="This platform only includes peers from your contacts who also use the app. This is essential to ensure that you can only borrow and lend money to people you know."
      />
      <AboutSection />
      <Footer />
    </>
  );
}

export default About;
