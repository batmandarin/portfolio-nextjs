import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle> &nbsp;- Email -</LinkTitle>
          <LinkItem href="mailto:harukikuriwada@gmail.com">
            harukikuriwada@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>copyright@HARUKI_KURIWADA.2021</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href="https://github.com/kuri-sun"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/haruki-kuriwada-97591220b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/Haruki15Soccer"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
