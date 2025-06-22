import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className="flex-center h-screen">
        <h1 className="text-3xl font-bold">Hello World !!!</h1>
    </div>
  )
}

export default App