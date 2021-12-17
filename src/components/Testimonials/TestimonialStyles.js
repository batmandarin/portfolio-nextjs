import styled from "styled-components";

export const TestimonialCard = styled.div`
  border-radius: 10px;
  background-color: #a7a7a7;
  color: white;
  box-shadow: 10px 10px 20px rgba(90, 88, 88, 0.9);
  text-align: center;
  width: 90%;
  margin: 0.3rem 1rem 0.3rem 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    color: white;
    width: 90%;
    margin: 0.3rem 2rem 0.3rem 3rem;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 45%;
  height: 45%;
  border-radius: 75%;
  border: 5px solid #ededed;
  margin: 2rem 2rem 2rem 1rem;
`;

export const Name = styled.div`
  color: #353334;
  font-size: 1.7rem;
  font-weight: 400;
  background-color: #e8e8e8;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 4rem 2rem 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const Hr = styled.hr`
  margin: 0;
`;

export const Company = styled.div`
  color: #353334;
  font-size: 1.5rem;
  font-weight: 400;
  border-radius: 3rem;
  padding: 1.2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    color: linear-gradient(270deg, #00dbd8 0%, #5dd670 100%);
  }
`;

export const CardInfo = styled.div`
  color: black;
  background-color: white;
  border-radius: 5px;
  padding: 2.9rem;
  margin: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding: 2rem;
  }
  transition: 0.6s;
  &:hover {
    box-shadow: 10px 10px 20px rgba(90, 88, 88, 0.9);
  }
`;

export const A = styled.a`
  color: #353334;
  font-weight: bold;
  font-size: 1.7rem;
  transition: 0.6s;
  &:hover {
    color: #ffffff;
    text-shadow: 2px 2px #48db94;
  }
`;
