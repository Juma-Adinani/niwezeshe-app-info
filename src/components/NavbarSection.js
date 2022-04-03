import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbar/NavbarElements";

const NavbarSection = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const startScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", startScroll);
  }, []);

 
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <img
              sr={require("../../images/logo.png").default}
              alt="logo"
            /> */}
            Niwezeshe
          </NavLogo>
          <MobileIcon>
            <NavBtnLink to="/"><b>FAQ</b></NavBtnLink>
          </MobileIcon>
          <NavMenu>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/"><b>FAQ</b></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarSection;
