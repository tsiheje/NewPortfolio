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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 5000);
    return () => clearTimeout(timer);
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
          <Barnav/>
          <Homepage/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
