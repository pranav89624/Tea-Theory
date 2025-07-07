import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teas from "./components/Teas";
import About from "./components/About";
import Art from "./components/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Teas />
      <About />
      <Art  />
    </main>
  )
}

export default App