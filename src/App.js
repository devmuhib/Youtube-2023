import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Hero from "./component/UI/Hero";
import Services from "./component/UI/Services";
import Portfolio from "./component/UI/Portfolio";
import Contact from "./component/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
