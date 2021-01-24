import ScrollIndicator from "../components/ScrollIndicator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollIndicator />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
