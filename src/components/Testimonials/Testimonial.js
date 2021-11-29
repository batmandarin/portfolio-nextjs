import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { GridContainer } from "../Projects/ProjectsStyles";
import { TestmorialsData } from "../../constants/constants";
import {
  TestmonialCard,
  Img,
  CardInfo,
  Name,
  Company,
  CardSection,
  Hr,
} from "./TestimonialStyles";

const Testmonial = () => {
  const testmonials = TestmorialsData;

  return (
    <Section style={{ marginBottom: "5rem" }}>
      <SectionDivider />
      <SectionTitle>Testmonials</SectionTitle>
      <SectionText>I am beginner of web and mobile devlopment.</SectionText>
      <GridContainer>
        {testmonials.map((testmonial, index) => (
          <TestmonialCard key={index}>
            <Img src={testmonial.image} />
            <Name>
              {testmonial.name}
              <br />
              <Hr />
              <Company>{testmonial.company}</Company>
            </Name>
            <CardInfo>{testmonial.testmonial}</CardInfo>
          </TestmonialCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Testmonial;
