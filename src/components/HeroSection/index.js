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
      <HeroContainer id="about">
        <HeroBg>
          <VideoBg autoplay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Peer to peer borrowing and lending</HeroH1>
          <HeroP>
            This platform only includes peers from your contacts who also use the app. This is essential to ensure 
            that you can only borrow and lend money to people you know.<br/>
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
