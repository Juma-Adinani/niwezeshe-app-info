import React from 'react'
import styled from 'styled-components';
import Video from "../videos/videodata.mp4";
import { HeroContent, HeroH1, HeroP, VideoBg } from './HeroSection/HeroElements'

const BannerContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 300px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const BannerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

function Banner(props) {

  return (
    <>
      <BannerContainer>
        <BannerBg>
         <VideoBg autoplay loop muted src={Video} type="video/mp4" />
        </BannerBg>
        <HeroContent>
          <HeroH1>{props.title}</HeroH1>
          <HeroP>{props.subtitle}</HeroP>
        </HeroContent>
      </BannerContainer>
    </>
  )
}

export default Banner