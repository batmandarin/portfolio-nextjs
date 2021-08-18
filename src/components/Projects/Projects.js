import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const Projects = ({ products }) => {

  const projects = products.map(product => product.fields)

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source }) => (
          <BlogCard key={id}>
            <Img src={`https:${image.fields.file.url}`} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <hr /><br />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent></TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Visit App</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  )
};

export default Projects;