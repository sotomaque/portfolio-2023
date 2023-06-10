'use client';

import { Container } from '../components/Container';
import { WaveAnimation } from '../components/WaveAnimation';
import { About } from './components/About/About';
import { Experience } from './components/WorkExperience/Experience';
import { Hero } from './components/Hero';
import { Navbar } from '../components/Navbar';
import { Projects } from './components/Projects/Projects';

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
        <Projects />
      </Container>

      <div className="relative z-0">
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
      </div>
    </div>
  );
}
