import styled from "styled-components";

export const TestimonialCard = styled.div`
  border-radius: 10px;
  color: white;
  box-shadow: 10px 10px 20px rgba(90, 88, 88, 0.9);
  text-align: center;
  width: 90%;
  margin: 0.3rem 1rem 0.3rem 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    color: white;
    width: 100%;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  width: 45%;
  border-radius: 75%;
  border: 5px solid #ededed;
  margin: 2rem 2rem 2rem 1rem;
`;

export const Name = styled.div`
  color: #353334;
  font-size: 1.7rem;
  font-weight: bold;
  background-color: #a7a7a7;
  border-radius: 5px;
  padding: 1rem 0 0 0;
  margin: 0 4rem 2rem 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const Hr = styled.hr`
  margin: 0;
`;

export const Company = styled.p`
  color: #ededed;
  font-size: 1.35rem;
  font-weight: bold;
  border-radius: 3rem;
  padding: 0.7rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const CardInfo = styled.div`
  color: black;
  font-style: 1rem;
  font-family: cursive;
  line-height: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 1.9rem;
  margin: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;
