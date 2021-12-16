import React from "react";
import { DiReact } from "react-icons/di";
import { AiFillDatabase } from "react-icons/ai";
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
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            exprience with <br />
            "React.js", "Swift"
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            exprience with
            <br />
            "JavaScript", "Java"
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            exprience with
            <br />
            "Postgresql"
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiWordpress size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX-design</ListTitle>
          <ListParagraph>
            volunteer job experiece with
            <br />
            "HTML", "CSS" and "WordPress"
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
