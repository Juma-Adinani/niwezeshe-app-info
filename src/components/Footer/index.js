import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
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
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">
                  <AiOutlinePhone />
                  +255 754 678 908
                </FooterLink>
                <FooterLink to="/">
                  <AiOutlineMail />
                  info@niwezeshe.com
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/about">How it works</FooterLink>
                <FooterLink to="/">Company</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Terms & conditions</FooterLinkTitle>
                <FooterLink to="/terms">Terms of use</FooterLink>
                <FooterLink to="/privacy">Privacy</FooterLink>
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
                Niwezeshe &copy; {new Date().getFullYear()}, All rights
                reserved.
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
