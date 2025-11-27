import React, { useEffect, useRef } from "react";

// Mock components for demonstration
import Banner from '../components/home/Banner'
import Counter from '../components/home/Counter'
import { LetsWorkTogether } from '../components/home/LetsWorkTogether'
import AboutMe from '../components/home/AboutMe'
import { Skills } from '../components/home/Skills'
import HomeServices from '../components/home/HomeServices'
import Projects from '../components/home/Projects'
import ContactMe from '../components/home/ContactMe'

export default function Home() {
  const stackRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current;
      const stackTop = stackRef.current.offsetTop;
      const scrollY = window.scrollY;

      cards.forEach((card, index) => {
        if (!card) return;

        const cardTop = stackTop + (index * window.innerHeight);
        const progress = (scrollY - cardTop + window.innerHeight) / window.innerHeight;

        // Clamp progress between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress));

        // Calculate translateY (slides up from bottom)
        const translateY = (1 - clampedProgress) * 100;

        // Apply transform
        card.style.transform = `translateY(${translateY}%)`;

        // Determine if card should be sticky
        if (scrollY >= cardTop && scrollY < cardTop + window.innerHeight) {
          card.style.position = 'fixed';
          card.style.top = '0';
        } else if (scrollY >= cardTop + window.innerHeight) {
          card.style.position = 'absolute';
          card.style.top = `${(index + 1) * window.innerHeight}px`;
        } else {
          card.style.position = 'absolute';
          card.style.top = `${index * window.innerHeight}px`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Banner />
      <Counter />

      <section
        className="relative md:block hidden"
        ref={stackRef}
        style={{ height: `${5 * 88}vh` }}
      >
        <div
          ref={el => cardsRef.current[0] = el}
          className="w-full h-[200px] will-change-transform flex items-center justify-center md:pt-70"
          style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
        >
          <LetsWorkTogether />
        </div>
        <div
          ref={el => cardsRef.current[1] = el}
          className="flex items-center justify-center h-screen bg-[#E5E3DC] will-change-transform border-t-1 border-[#333332]"
          style={{ position: 'absolute', top: '100vh', left: 0, right: 0 }}
        >
          <AboutMe />
        </div>
        <div
          ref={el => cardsRef.current[2] = el}
          className="w-full h-[150vh] bg-[#E5E3DC] will-change-transform border-t-1 border-[#333332]"
          style={{ position: 'absolute', top: '50px', left: 0, right: 0 }}
        >
          <Skills />
        </div>
      </section>
      <section className="md:hidden visible">
        <LetsWorkTogether />
        <AboutMe />
        <Skills />
      </section>
      <HomeServices />
      <Projects />
      <ContactMe />
    </div>
  );
}