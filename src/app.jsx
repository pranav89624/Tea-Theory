import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teas from "./components/Teas";
import About from "./components/About";
import Art from "./components/Art";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Teas />
      <About />
      <Art  />
      <Footer />
    </main>
  )
}

export default App