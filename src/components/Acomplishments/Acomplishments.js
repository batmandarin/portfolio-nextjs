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
        <Link href="https://github.com/kuri-sun">
          <Box>
            <BoxNum>{data.followers}</BoxNum>
            <BoxText>Github followers</BoxText>
          </Box>
        </Link>
        <Link href="https://github.com/kuri-sun">
          <Box>
            <BoxNum>{data.public_repos}</BoxNum>
            <BoxText>Github public repositories</BoxText>
          </Box>
        </Link>
      </Boxes>
    </Section>
  );
};

export default Acomplishments;
