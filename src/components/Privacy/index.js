import React from "react";
import {
  AboutContainer,
  AboutCard,
  CardTitle,
  CardBody,
  AboutCardWrapper,
} from "../About/AboutElements";

const Privacy = () => {
  return (
    <>
      <AboutContainer>
        <AboutCardWrapper>
          <AboutCard>
            <CardTitle>Privacy</CardTitle>
            <CardBody>
              <p>
                Your privacy is important to us. It is Niwezeshe
                policy to respect your privacy regarding any information we may
                collect from you through our app(s): niwezeshe.
              </p><br />
              <p>
                We only ask for personal information when we truly need it to provide a service to
                you. We collect it by fair and lawful means, with your knowledge
                and consent. We also let you know why we're collecting it and how
                it will be used by the app before granting the app an access to
                such information. The details about why the app is collecting the
                information are given just before you give the permission We only
                retain collected information for as long as necessary to provide
                you with your requested service.
              </p><br />

              <p> What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as
                well as unauthorized access, disclosure, copying, use or
                modification. We don't share any personally identifying
                information publicly or with third-parties, except when required
                to by law. Our app may link to external sites that are not
                operated by us.
              </p><br />

              <p>Please be aware that we have no control over the content and practices of these sites, and cannot accept
                responsibility or liability for their respective privacy policies
                You are free to refuse our request for your personal information,
                with the understanding that we may be unable to provide you with
                some of your desired services. Your continued use of our app will
                be regarded as acceptance of our practices around privacy and
                personal information. This policy is effective as of{" "}
                {new Date().getFullYear()}.
              </p><br />
            </CardBody>
          </AboutCard>
        </AboutCardWrapper>
      </AboutContainer>
    </>
  );
};

export default Privacy;
