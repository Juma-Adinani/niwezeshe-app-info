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
  const services = [
    {
      icon: Icon3,
      title: 'Premium Benefits',
      description: `Instead of letting your money idle in a bank; help peers,
      make an impact by helping those in need and earn a decent income in return`
    },
    {
      icon: Icon2,
      title: 'Credit Scoring',
      description: `To mitigate lending risks before deciding to approve a loan, 
      we calculate and show you the borrower's likelihood to pay on time or default`
    },
    {
      icon: Icon1,
      title: 'Debt Collection',
      description: `By just providing debtor's phone number, 
      Pursue payments of debts by sending automated SMS reminders everyday to the debtors
      `
    },

  ]
  return (
    <>
      <ServicesContainer id="service">
        <ServicesH1>What we offer</ServicesH1>
        <ServicesWrapper>
          {services.map(((service, index) => (
            <ServicesCard key={index}>
              <img width="100" height="100" src={service.icon} alt={service.title} />
              <ServicesH2>{service.title}</ServicesH2>
              <ServicesP>
                {service.description}
              </ServicesP>
            </ServicesCard>
          )))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
