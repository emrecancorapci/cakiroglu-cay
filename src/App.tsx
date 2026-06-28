import { Contact } from "./components/sections/contact";
import Footer from "./components/sections/footer";
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
      <Footer />
    </div>
  );
}

export default App;
