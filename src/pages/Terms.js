import React from "react";
import Banner from "../components/Banner";
import TermSection from "../components/Terms";
import NavbarSection from "../components/NavbarSection";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
    <NavbarSection/>
      <Banner
        title="Terms"
        subtitle="Terms & Conditions on using NIWEZESHE App."
      />
      <TermSection/>
      <Footer/>
    </>
  );
};

export default Terms;
