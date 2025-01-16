'use client'
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './loader';
import Barnav from './Components/Barnav/page';
import Homepage from './Components/home/page';
import About from './Components/About/page';
import Skills from './Components/Skills/page';
import Projects from './Components/Projects/page';
import Contact from './Components/Contact/page';
import Ending from './Components/footer/page';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2700);

    const handleNavClick = (e) => {
      const targetId = e.target.getAttribute('href')?.replace('#', '');
      if (targetId) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (targetId === 'home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      clearTimeout(timer);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed top-0 left-0 w-full z-50">
            <Barnav />
          </div>
          <div className="relative w-full">
            <div className="fixed top-0 left-0 w-full h-screen">
              <Homepage />
            </div>
            <div className="relative">
              <div id="home" className="h-screen w-full" />
              <div className="relative bg-gray-100 z-10">
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Ending />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}