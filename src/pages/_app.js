import Theme from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  // // to enable Service-Worker
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log(
  //             "Service Worker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
