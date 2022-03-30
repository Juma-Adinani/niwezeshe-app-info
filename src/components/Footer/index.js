import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIcons,
  SocialIconsLink,
  BrandLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Policy</FooterLinkTitle>
                <FooterLink to="/">Terms & conditions</FooterLink>
                <FooterLink to="/">Policy of service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <BrandLogo to="/" onClick={toggleHome}>
                Niwezeshe
                {/* <img
                  src={require("../../images/logo.png").default}
                  alt="brand logo"
                /> */}
              </BrandLogo>
              <WebsiteRights>
                Niwezeshe @ {new Date().getFullYear()}, All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconsLink to="/" target="_black" arial_label="Facebook">
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink to="/" target="_black" arial_label="Twitter">
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink to="/" target="_black" arial_label="Instagram">
                  <FaInstagram />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
