import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Hero = () => {
  
    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "words, chars" });

        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        heroSplit.chars.forEach((char) => {
            char.classList.add("text-gradient");
        })

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.05,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        })
        .to(".left-leaf", { y: 200 }, 0)
        .to(".right-leaf", { y: -200 }, 0);
    },[]);
  
    return (
    <>
        <section id="hero" className='noisy'>
            <h1 className='title'>Chai</h1>

            <img
             src="images/hero-left-leaf.png"
             alt="left-leaf"
             className="left-leaf" 
            />

            <img
             src="images/hero-right-leaf.png"
             alt="right-leaf"
             className="right-leaf" 
            />

            <div className="body">
                <div className="content">
                    <div className='space-y-5 hidden md:block'>
                        <p>Steep. Sip. Think.</p>
                        <p className='subtitle'>
                            Drink the Hypothesis <br /> of Flavor
                        </p>
                    </div>

                    <div className='view-teas'>
                        <p className='subtitle'>
                            Handpicked leaves, brewed to perfection. Experience the harmony of flavor and aroma.
                        </p>
                        <a href="#tea">View Teas</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero