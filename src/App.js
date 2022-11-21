import { useState } from "react";

import Contacts from "./components/Contacts";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Experiance from "./components/Experiance";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="app">
      
      <Nav isMenu={isMenu} setIsMenu={setIsMenu} />
      <Hero isMenu={isMenu} />
      <Portfolio />
      <Experiance />
      <Contacts />
      <Footer />
     
    </div>
    
  );
}

export default App;
