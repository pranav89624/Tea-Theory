import React from "react";

const About = () => {
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
