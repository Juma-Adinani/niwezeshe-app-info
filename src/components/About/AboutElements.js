import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 800px;
  background: #010606;
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutCard = styled.div`
  background: #fff;
  width: 80%;
  min-height: 200px;
  margin: 30px 0;
  padding: 16px;
  border-radius: 10px;
`;

export const CardTitle = styled.h1`
  color: #000;
  font-size: 50px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const List = styled.ul`
  margin-left: 40px;
`;

export const CardBody = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 24px;
  text-align: start;
  /* min-width: 600px; */
  margin-left: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
