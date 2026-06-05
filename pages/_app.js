import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Pages from "@/components/Pages/Pages";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {

  return (
    <>
    <Header></Header>
    <Component {...pageProps} />
    <Pages></Pages>
    <Footer></Footer>
    </>
  ) 
}
