import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Projects = ({ products }) => {
  const projects = products;

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>&nbsp;&nbsp;Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ image, title, description, tags, source }) => (
          <BlogCard key={title}>
            <Img src={image} alt={title} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <hr style={{ background: "black" }} />
              <br />
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
              <ExternalLinks href={source} target="_blank" rel="noreferrer">
                Visit App
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
