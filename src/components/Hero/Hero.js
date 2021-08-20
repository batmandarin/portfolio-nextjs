import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome, <br />
        I'm Haruki Kuriwada.
      </SectionTitle>
      <SectionText>
        I am CICCC student and I am studying mobile development.
        <br />I started to love to use JavaScript.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://docs.google.com/document/d/1dpH7ZGRcXgTWkY6UjsrqOUMmWLuCTglBk2pQV3XfX1E/edit?usp=sharing")
        }
      >
        Get Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
