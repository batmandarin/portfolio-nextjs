import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <Span>Kuri-sun</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/#tech">
            <NavLink> Technology</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <NavLink> About</NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <Link href="/mail">
          <SocialIcons>
            <AiOutlineMail size="2.5rem" />
          </SocialIcons>
        </Link>
        <SocialIcons
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kuri-sun"
        >
          <AiFillGithub size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/haruki-kuriwada-97591220b/"
        >
          <AiFillLinkedin size="2.5rem" />
        </SocialIcons>
        <SocialIcons
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Haruki15Soccer"
        >
          <AiFillTwitterCircle size="2.5rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
