import React from "react";

import {
  AboutContainer,
  AboutCard,
  CardTitle,
  CardBody,
  AboutCardWrapper,
  List,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutCardWrapper>
          <AboutCard>
            <CardTitle>For Borrowers</CardTitle>

            <List>
              <li>
                <CardBody>
                  Quickly identify who is from your contact can lend you money
                  when you need it
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Send your loan request directly to the lender without any
                  screening
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Never miss a repayment. Be notified whenever the status of
                  your loan application changes or when the due date date is
                  near
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Cash back. Get paid back if you pay your loan on time or before the due date.
                </CardBody>
              </li>

              <li>
                <CardBody>
                  Manage all your loan applications in one place
                </CardBody>
              </li>
            </List>
          </AboutCard>
        </AboutCardWrapper>
        <AboutCardWrapper>
          <AboutCard>
            <CardTitle>For Lenders</CardTitle>
            <List>
              <li>
                <CardBody>
                  Set different portifolios with different interest rates,
                  maximum lending amount, and loan duration. Interest rate
                  ranges from 0 - 25% and loan duration cannot be less than 60
                  days and not more than 1 year.
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Enjoy up to 35% in the US and up to 100% Maximum Annual
                  Percenntage Rate (APR) of your investment by helping peers in
                  need.
                </CardBody>
              </li>
              <li>
                <CardBody>
                  In case you don't wish to let some people know you have some
                  extra cash to lend, simply exclude them from viewing your
                  portifolios (the same thing as in social media status)
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Manage all your loan applications in one place
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Smart debt collection by sending automated daily debt reminders to your debtors directly
                  from your phone. Contact us to request this feature
                </CardBody>
              </li>
            </List>
          </AboutCard>
        </AboutCardWrapper>
        <AboutCardWrapper>
          <AboutCard>
            <CardTitle>For Organizations</CardTitle>

            <List>
              <li>
                <CardBody>
                  This feature is currently available by invite only or upon
                  request. Feel free to contact us via support within the app
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Organization can register their members who will then have
                  access to their loan portifolio. The portifolio may also be
                  available to everyone depending on the organization's policy.
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Organization can specify required documents for each loan
                  portifolio, review attached documents, and reply to
                  applicants' inquiries
                </CardBody>
              </li>
              <li>
                <CardBody>
                  Smart debt collection by sending automated daily debt reminders to your debtors directly
                  from your phone. Contact us to request this feature
                </CardBody>
              </li>
            </List>
          </AboutCard>
        </AboutCardWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
