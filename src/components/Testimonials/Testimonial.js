import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { GridContainer } from "../Projects/ProjectsStyles";
import { TestimorialsData } from "../../constants/constants";
import {
  TestimonialCard,
  Img,
  CardInfo,
  Name,
  Company,
  Hr,
} from "./TestimonialStyles";

const Testimonial = () => {
  const testmonials = TestimorialsData;

  return (
    <Section style={{ marginBottom: "5rem" }}>
      <SectionDivider />
      <SectionTitle>Testmonials</SectionTitle>
      <SectionText>Here are what my clients said.</SectionText>
      <GridContainer>
        {testmonials.map((testmonial, index) => (
          <TestimonialCard key={index}>
            <Img src={testmonial.image} />
            <Name>
              {testmonial.name}
              <br />
              <Hr />
              <Company>{testmonial.company}</Company>
            </Name>
            <CardInfo>{testmonial.testmonial}</CardInfo>
          </TestimonialCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Testimonial;
