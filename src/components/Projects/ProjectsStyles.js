import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 7px 7px 20px rgba(80, 78, 78, 0.8);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1.5rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #000;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #353334;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const UtilityList = styled.div`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fbfbfb;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 1.5rem;
  background: linear-gradient(270deg, #00dbd8 0%, #5dd670 100%);
  border-radius: 15px;
  transition: 0.6s;
  &:hover {
    color: #353334;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;
export const Tag = styled.li`
  color: #353334;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #dad6d8;
  border-radius: 3rem;
  padding: 1rem 1.2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;
