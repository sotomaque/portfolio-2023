import { NextResponse } from 'next/server';

import earnbetter from '../../../public/images/projects/earnbetter.png';
import wave from '../../../public/images/projects/wave.png';
import hawaii from '../../../public/images/projects/hawaii.png';
import infobot from '../../../public/images/projects/infobot.png';
import type { Project } from '@/app/types';

export const projects: Project[] = [
  {
    name: 'Wave Animation',
    description:
      'sin wave, modulating amplitude, phase and frequency, using the ThreeJS library.',
    tags: [
      {
        name: 'react',
      },
      {
        name: 'threeJS',
      },
    ],
    image: wave.src,
    source_code_link: 'https://github.com/',
    demo_link: 'http://localhost:3000/wave',
  },
  {
    name: 'Hawaii Animation',
    description:
      'Hawiian Island vizualizaiton using altitude data from UH Manoa, built with ThreeJS library.',
    tags: [
      {
        name: 'react',
      },
      {
        name: 'threeJS',
      },
    ],
    image: hawaii.src,
    source_code_link: 'https://github.com/',
    demo_link: 'http://localhost:3000/hawaii',
  },
  {
    name: 'Infobot.ai',
    description: 'Modern web application for YC Startup',
    tags: [
      {
        name: 'NextJS',
      },
      {
        name: 'Clerk.dev',
      },
      {
        name: 'tailwindcss',
      },
    ],
    image: infobot.src,
    demo_link: 'https://infobot.ai/',
  },
  {
    name: 'Earnbetter',
    description:
      'An online resume builder that uses OpenAI to generate resume content.',
    tags: [
      {
        name: 'nextjs',
      },
      {
        name: 'openai',
      },
      {
        name: 'langchain',
      },
      {
        name: 'trpc',
      },
      {
        name: 'zod',
      },
      {
        name: 'zustand',
      },
    ],
    image: earnbetter.src,
    demo_link: 'https://earnbetter.com/',
  },
];

export function GET() {
  return NextResponse.json({ projects });
}
