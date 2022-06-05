import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { DiWordpress } from "react-icons/di";
import { DiJava } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <AiFillAndroid size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>"Android" and "SwiftUI"</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>"Spring-Framework" and "Java"</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX-design</ListTitle>
          <ListParagraph>"SEO" and "WordPress"</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
