import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const Acomplishments = ({ data }) => {
  return (
    <Section>
      <SectionDivider />
      <SectionTitle>Personal Achievement</SectionTitle>
      <Boxes>
        <Box>
          <BoxNum>{data.followers}</BoxNum>
          <BoxText>Github followers</BoxText>
        </Box>
        <Box>
          <BoxNum>{data.public_repos}</BoxNum>
          <BoxText>Github public repositories</BoxText>
        </Box>
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
