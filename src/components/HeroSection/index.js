import React, { useState } from "react";
import Video from "../../videos/videodata.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoplay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>P2P MONEY BORROWING AND LENDING MADE EASY</HeroH1>
          <HeroP>
            Download niwezeshe app now from playstore to enjoy the service
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to=""
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              duration={500}
              smooth={true}
              spy={true}
              exact="true"
              offset={-80}
            >
              Download Now {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
