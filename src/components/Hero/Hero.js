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
        I am CICCC student. Now I am studying mobile development.
        <br />I started to love to use Java.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1f0cyq2f1X4ymm91jJxOjKQ-1FE85z-N9fu73PwWw2PA/edit?usp=sharing",
            "_blank",
            "noreferrer"
          )
        }
      >
        Get Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
