import React from "react";
import Icon3 from "../../images/svg_10.svg";
import Icon2 from "../../images/svg_6.svg";
import Icon1 from "../../images/svg_11.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="service">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <img width="100" height="100" src={Icon1} alt="image1" />
            <ServicesH2>Ensure Credit Store</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overall revenue. Using
              our proprietary aligorithms, before giving a loan to your peers,
              quickly identify peers likelihood to pay you back on time.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <img width="100" height="100" src={Icon2} alt="image2" />
            <ServicesH2>Assure safer transactions</ServicesH2>
            <ServicesP>
              Added ability to send attachments while applying for a loan.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <img width="100" height="100" src={Icon3} alt="image3" />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              We provide a casual benefit on using this app. Example loan : If
              the loan principal is $10,000, an interest rate of 20% per annum
              (20% APR), 6 installments of $2,000 every 2 months. This sums to
              $12,000 with everything included.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
