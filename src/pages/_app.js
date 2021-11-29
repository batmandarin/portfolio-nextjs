import Theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Head } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
