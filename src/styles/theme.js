import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div style={{ width: "100%" }}>
      <GlobalStyles />
      {children}
    </div>
  </ThemeProvider>
);

export default Theme;
