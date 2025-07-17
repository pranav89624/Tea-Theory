import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    // Animate footer elements on scroll
    gsap.fromTo(
      "#footer h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#footer",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      "#footer .footer-content > div",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#footer",
          start: "top 70%",
        },
      }
    );

    // Animate social links on hover
    gsap.set(".social-link", { scale: 1 });
  }, []);

  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  };

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden radial-gradient">
      <div className="noisy"></div>
      
      {/* Decorative leaves */}
      <img 
        src="/images/tea-left-leaf.png" 
        alt="" 
        className="absolute bottom-0 left-0 pointer-events-none lg:w-fit w-1/3 opacity-30"
      />
      <img 
        src="/images/tea-right-leaf.png" 
        alt="" 
        className="absolute top-0 right-0 pointer-events-none lg:w-fit w-1/4 opacity-30"
      />

      <div className="container mx-auto px-5 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="footer-content grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" className="w-12 h-12" alt="Tea Theory Logo" />
              <h3 className="font-modern-negra text-3xl">Tea Theory</h3>
            </div>
            <p className="text-lg mb-6 max-w-md text-gray-300 leading-relaxed">
              Crafting exceptional tea experiences that blend tradition with innovation. 
              Every cup tells a story of passion, quality, and the art of tea.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="social-link w-12 h-12 rounded-full border border-gray-600 flex-center hover:border-yellow hover:text-yellow transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="social-link w-12 h-12 rounded-full border border-gray-600 flex-center hover:border-yellow hover:text-yellow transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="social-link w-12 h-12 rounded-full border border-gray-600 flex-center hover:border-yellow hover:text-yellow transition-colors"
                onMouseEnter={handleSocialHover}
                onMouseLeave={handleSocialLeave}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-modern-negra text-xl text-yellow mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#tea" className="text-gray-300 hover:text-yellow transition-colors">Our Teas</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow transition-colors">About Us</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-yellow transition-colors">The Art</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-modern-negra text-xl text-yellow mb-6">Get in Touch</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p>123 Tea Garden Street</p>
                  <p>Blend City, TC 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <p>hello@teatheory.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-modern-negra text-3xl text-yellow mb-4">
              Stay Steeped in News
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest tea blends, brewing tips, and exclusive offers.
            </p>
            <div className="flex max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow transition-colors"
              />
              <button className="px-6 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Tea Theory. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
