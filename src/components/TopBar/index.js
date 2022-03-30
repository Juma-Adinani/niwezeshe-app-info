import React from "react";
import {
  TopBarContainer,
  Icon,
  CloseIcon,
  TopBarWrapper,
  TopBarLink,
  TopBtnWrap,
  TopBarBtn,
  TopBarMenu
} from "./TopBarElements";

const TopBar = ({isOpen, toggle}) => {
  return (
    <>
      <TopBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <TopBarWrapper>
          <TopBarMenu>
            <TopBarLink to="about" onClick={toggle}>
              About
            </TopBarLink>
            <TopBarLink to="discover" onClick={toggle}>
              Discover
            </TopBarLink>
            <TopBarLink to="services" onClick={toggle}>
              Services
            </TopBarLink>
            <TopBarLink to="signup" onClick={toggle}>
              Sign Up
            </TopBarLink>
          </TopBarMenu>
          <TopBtnWrap>
            <TopBarBtn to="/signin">Sign In</TopBarBtn>
          </TopBtnWrap>
        </TopBarWrapper>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
