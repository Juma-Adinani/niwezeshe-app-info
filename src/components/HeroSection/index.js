import React, { useState } from "react";
import Video from "../../videos/videodata.mp4";
import Mobile from "../../images/homepage.svg";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  MobileSvg,
  MainContent,
  Lb,
  Topic,
  Title,
  SubText,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoplay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <MainContent>
          <Lb id="leftBlock">
            <Topic>
              <span>Niwezeshe App</span>
            </Topic>
            <Title>P2P MONEY BORROWING AND LENDING MADE EASY</Title>
            <SubText>
              Connect with people from your contacts to know who can offer you a
              quick loan.
            </SubText>
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
          </Lb>
          <MobileSvg
            src={Mobile}
            alt="Mobile Svg"
            srcset=""
            width="400"
            height="400"
          />
        </MainContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
