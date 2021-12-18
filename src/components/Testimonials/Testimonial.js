import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { GridContainer } from "../Projects/ProjectsStyles";
import { TestimorialsData } from "../../constants/constants";
import { TestimonialCard, Img, CardInfo, Name, A } from "./TestimonialStyles";

const Testimonial = () => {
  const testmonials = TestimorialsData;

  return (
    <Section style={{ marginBottom: "3rem" }}>
      <SectionDivider />
      <SectionTitle>Testimonials</SectionTitle>
      <GridContainer>
        {testmonials.map((testmonial, index) => (
          <TestimonialCard key={index}>
            <picture>
              <source type="image/webp" srcSet={testmonial.webpImage}></source>
              <source type="image/jpeg" srcSet={testmonial.jpegImage}></source>
              <Img
                src={testmonial.image}
                srcSet={
                  testmonial.image + " 480w, " + testmonial.image + " 1080w"
                }
                sizes="50vw"
                alt={testmonial.name}
              />
            </picture>
            <Name>
              <strong>{testmonial.name}</strong> from
              <A href={testmonial.companyUrl} target="_blank" rel="noreferrer">
                <strong> {testmonial.company}</strong>
              </A>
            </Name>
            <a href={testmonial.testmonialUrl} target="_blank" rel="noreferrer">
              <CardInfo href={testmonial.testmonialUrl}>
                {testmonial.testmonial}
              </CardInfo>
            </a>
          </TestimonialCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Testimonial;
