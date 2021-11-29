import React from "react";
import { DiReact, DiMongodb } from "react-icons/di";
import { AiFillHtml5, AiFillDatabase } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
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
    <SectionText>
      I am completely beginner of web and mobile devlopment.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            exprience with <br />
            "React.js", "Next.js", "Swift"
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            exprience with
            <br />
            "Node.js", "Java"
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
            "Postgres", "MySQL"
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillHtml5 size="3rem" />
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
