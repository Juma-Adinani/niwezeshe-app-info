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
  const openLink = (href, e) => {
    e && e.preventDefault()
    window.location.href = href;
  }
  const socialMediaLinks = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      url: 'https://facebook.com/niwezesheapp'
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: 'https://instagram.com/niwezesheapp'
    },
    // {
    //   icon: <FaTwitter />,
    //   label: "Twitter",
    //   url: 'https://twitter.com/niwezesheapp'
    // },
  ]

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                {/* <FooterLink to="tel:">
                  <AiOutlinePhone />
                </FooterLink> */}
                <FooterLink to="." target="_black"
                  onClick={(e) => openLink('mailto:niwezeshe@hudumabomba.com', e)}
                >
                  <AiOutlineMail />
                  niwezeshe@hudumabomba.com
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/about">How it works</FooterLink>
                <FooterLink
                  target="_black" to='.'
                  onClick={(e) => openLink("https://hudumabomba.com", e)} >Company</FooterLink>
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
                {
                  socialMediaLinks.map((media, index) => (
                    <SocialIconsLink
                      onClick={(e) => openLink(media.url, e)}
                      key={index} to="."
                      target="_black"
                      arial_label={media.label}>
                      {media.icon}
                    </SocialIconsLink>
                  ))
                }
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
