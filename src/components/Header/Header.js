import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { WiAlien } from "react-icons/wi";
import { GiAlienSkull, GiAlienBug } from "react-icons/gi";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";
import { FaRedditAlien } from "react-icons/fa";

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
              marginBottom: "20px",
            }}
          >
            <WiAlien size="3rem" />
            <Span>Kuri-sun</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>
              <GiAlienSkull size="2.5rem" /> Projects
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>
              <GiAlienBug size="2.5rem" /> Tech
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>
              <FaRedditAlien size="2.5rem" /> About
            </NavLink>
          </Link>
        </li>
      </Div2>

      <Div3>
        <Link href="/mail">
          <SocialIcons>
            <AiOutlineMail size="3rem" />
          </SocialIcons>
        </Link>
        <SocialIcons href="https://github.com/kuri-sun">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/haruki-kuriwada-97591220b/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/Haruki15Soccer">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
