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
        {projects.map(
          ({ jpegImage, webpImage, title, description, tags, source }) => (
            <BlogCard key={title}>
              <picture>
                <source type="image/webp" srcSet={webpImage}></source>
                <source type="image/jpeg" srcSet={jpegImage}></source>
                <Img
                  src={jpegImage}
                  alt={title}
                  srcSet={jpegImage + " 480w, " + jpegImage + " 1080w"}
                  sizes="50vw"
                />
              </picture>
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
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
