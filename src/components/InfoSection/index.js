import React from "react";
import { Button } from "../ButtonElement";
import {
  Column2,
  Img,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  headline,
  img,
  lightText,
  darkText,
  description,
  buttonLabel,
  alt,
  to = "home",
  href,
  imgStart,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                {!!buttonLabel && <BtnWrap>
                  <Button
                    to={to}
                    href={href}
                    smooth="true"
                    duration={500}
                    spy="true"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
