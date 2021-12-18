import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  background-color: #fafafa;
  grid-template-columns: repeat(5, 2fr);
  grid-template-rows: 2fr;
  grid-column-gap: 2rem;
  padding: 2.7rem;
  padding-top: 2.5rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Span = styled.span`
  color: #4e4e4e;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  margin-left: 1rem;
  margin-right: 3rem;
  opacity: 0.9;
  transition: 0.6s;
  &:hover {
    color: #4e4e4e;
    opacity: 1;
    cursor: pointer;
    font-weight: 1000;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  transition: 0.4s;
  padding-top: 0.5rem;
  margin-left: 1.8rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
    font-size: 1.5rem;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  font-weight: 400;
  margin: 0.6rem;
  line-height: 32px;
  color: #4e4e4e;
  transition: 0.5s ease;
  &:hover {
    color: #4e4e4e;
    opacity: 1;
    cursor: pointer;
    font-weight: 1000;
  }
  media ${(props) => props.theme.breakpoints.md} {
    padding: 1rem;
    font-size: 1.8rem;
    color: #4e4e4e;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.8rem;
    color: #4e4e4e;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: #4e4e4e;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    color: #4e4e4e;
    background-color: white;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
