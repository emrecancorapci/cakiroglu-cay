import { Contact } from "./components/sections/contact";
import { Hero } from "./components/sections/hero";
import { Navbar } from "./components/sections/navbar";
import { Products } from "./components/sections/products";

import { Story } from "./components/sections/story";

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
