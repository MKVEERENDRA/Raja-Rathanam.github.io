import React, { useState, useEffect } from 'react';
import Seo from './seo';
import Header from './header';
import Footer from './footer';
import ExternalButton from './External'; // Import the new component
import './layout.css';

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const maxScroll = document.body.offsetHeight - window.innerHeight;
        let scrolled = window.scrollY;
        scrolled = Math.max(0, Math.min(scrolled, maxScroll));

        let parallaxAmount = 0.3;
        let paddingOffset = 50;
        let fadeStart = paddingOffset;
        let fadeEnd = 250;
        let opacity = 1 - Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart));
        let headlogo = document.getElementById('headlogo');

        if (headlogo) {
          headlogo.style.transform = `translateY(${-scrolled * parallaxAmount}px)`;
          headlogo.style.opacity = opacity;
        }

        let parallaxAmountLanding = 0.1;
        let fadeStartLanding = 15;
        let fadeEndLanding = 500;
        let opacityLanding = 1 - Math.min(1, (scrolled - fadeStartLanding) / (fadeEndLanding - fadeStartLanding));
        let landinglogo = document.getElementById('landinglogo');

        if (landinglogo) {
          landinglogo.style.transform = `translateY(${-scrolled * parallaxAmountLanding}px)`;
          landinglogo.style.opacity = opacityLanding;
        }

        setShowScroll(scrolled > 500);

        if (scrollTimeout) clearTimeout(scrollTimeout);
        const newTimeout = setTimeout(() => {
          setShowScroll(false);
        }, 7000);
        setScrollTimeout(newTimeout);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
    }
  }, [scrollTimeout]);

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowScroll(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    }
  };

  return (
    <>
      <Seo title="Raja Rathanam" description="A to Z services" />
      <div id="pagecontent">
        <header>
          <Header />
        </header>
        <div id="contentarea">
          <main>{children}</main>
        </div>
        <br />
        <footer>
          <Footer />
        </footer>
        <button
          onClick={scrollTop}
          className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up fa-flip"></i>
        </button>
      </div>
    </>
  );
};

export default Layout;
