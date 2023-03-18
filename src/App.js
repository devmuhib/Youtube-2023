import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <h1 className="text-indigo-600 text-2xl font-[500]">Hello world</h1>;
}

export default App;
