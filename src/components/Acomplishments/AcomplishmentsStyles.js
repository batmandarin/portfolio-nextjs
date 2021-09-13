import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  opacity: 0.9;
  transition: 0.5s;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
    font-weight: 1000;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;
export const BoxNum = styled.h5`
  font-style: italic;
  font-weight: 1000;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #585a5c;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
    color: #585a5c;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
    color: #585a5c;
  }
`;

export const BoxText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #585a5c;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
