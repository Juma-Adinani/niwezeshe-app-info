import React from "react";
import Banner from "../components/Banner";
import PrivacySection from "../components/Privacy";
import Footer from "../components/Footer"
import NavbarSection from "../components/NavbarSection";

const Privacy = () => {
  return (
    <>
    <NavbarSection/>
      <Banner
        title="Privacy"
        subtitle="These are the privacy we ensure to you."
      />
      <PrivacySection/>
      <Footer/>
    </>
  );
};

export default Privacy;
