import Theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default App;
