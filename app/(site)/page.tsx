'use client';

import { Container } from '../components/Container';
import { WaveAnimation } from '../components/WaveAnimation';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Works } from './components/Works';

export default function PorfolioPage() {
  return (
    <div className="relative z-0">
      <WaveAnimation>
        <Navbar />
        <Hero />
      </WaveAnimation>

      <Container>
        <About />
        <Experience />
        <Works />
      </Container>

      <div className="relative z-0">
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}
