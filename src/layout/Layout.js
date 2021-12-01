import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <title>haruki portfolio</title>
        <meta key="haruki 玄紀　kuriwada kuri-sun" />
        <meta
          name="description"
          content="This is Haruki's(Kuri-sun) portfolio page. Take a look Thank you. #kuriwada #haruki #kuri-sun"
        />
      </Header>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
