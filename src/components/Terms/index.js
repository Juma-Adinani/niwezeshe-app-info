import React from "react";
import {
  AboutContainer,
  AboutCard,
  CardTitle,
  CardBody,
  AboutCardWrapper,
} from "../About/AboutElements";

const Terms = () => {
  return (
    <>
      <AboutContainer>
        <AboutCardWrapper>
          <AboutCard>
            <CardTitle>Terms</CardTitle>
            <CardBody>
              These terms and conditions ("Agreement") sets forth the general
              terms and conditions of your use of the niwezeshe mobile
              application ("Mobile Application" or "Service") and any of its
              related products and services (collectively, "Services"). This
              Agreement is legally binding between you ("User", "you" or "your")
              and this Mobile Application developer ("Operator", "we", "us" or
              "our"). By accessing and using the Mobile Application and
              Services, you acknowledge that you have read, understood, and
              agree to be bound by the terms of this Agreement. If you are
              entering into this Agreement on behalf of a business or other
              legal entity, you represent that you have the authority to bind
              such entity to this Agreement, in which case the terms "User",
              "you" or "your" shall refer to such entity. If you do not have
              such authority, or if you do not agree with the terms of this
              Agreement, you must not accept this Agreement and may not access
              and use the Mobile Application and Services. You acknowledge that
              this Agreement is a contract between you and the Operator, even
              though it is electronic and is not physically signed by you, and
              it governs your use of the Mobile Application and Services.
            </CardBody>
          </AboutCard>
        </AboutCardWrapper>
      </AboutContainer>
    </>
  );
};

export default Terms;
