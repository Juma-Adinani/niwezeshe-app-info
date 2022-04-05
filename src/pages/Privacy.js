import React from "react";
import Banner from "../components/Banner";
import PrivacySection from "../components/Privacy";
import Footer from "../components/Footer"
import NavbarSection from "../components/NavbarSection";

const Privacy = () => {
  return (
    <>
      <NavbarSection />
      <Banner
        title="Privacy"
        subtitle="Privacy and data protection is paramount to us"
      />
      <PrivacySection />
      <Footer />
    </>
  );
};

export default Privacy;
