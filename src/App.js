import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Hero from "./component/UI/Hero";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
export default App;
