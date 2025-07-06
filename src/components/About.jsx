import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2",{
      type:"words"
    })

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      }
    })

    scrollTimeline
    .from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.02,
    })
    .from(".top-grid div, .bottom-grid div", { opacity: 0, duration: 1, ease: "power1.inOut", stagger: 0.04 }, "-=0.5")
  },[]);
  return (
    <>
      <div id="about">
        <div className="mb-16 md:px-0 px-5">
          <div className="content">
            <div className="md:col-span-8">
              <p className="badge">Best Teas</p>
              <h2>
                Where every leaf tells a story{" "}
                <span className="text-white">-</span> from steep to sip
              </h2>
            </div>

            <div className="sub-content">
              <p>
                Every infusion we craft carries the weight of our passion — from
                the whisper of steam to the dance of leaves. It’s this care that
                turns warmth into wonder, and sips into stories.
              </p>

              <div>
                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than 20000+ customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy"/>
          </div>

          <div className="md:col-span-6">
            <div className="noisy"/>
          </div>

          <div className="md:col-span-3">
            <div className="noisy"/>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy"/>
          </div>

          <div className="md:col-span-4">
            <div className="noisy"/>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{"--position": 1}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 2}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 3}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 4}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 5}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 6}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 7}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 8}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 9}}> <img src="/images/tea.webp" alt="image 1" /> </div>
          <div className="item" style={{"--position": 10}}> <img src="/images/tea.webp" alt="image 1" /> </div>
        </div>
      </div>
    </>
  );
};

export default About;
