import { NextResponse } from 'next/server';

import github from '../../../public/images/github.png';
import wave from '../../../public/images/projects/wave.png';
import type { Project } from '@/app/types';

export function GET() {
  const projects: Project[] = [
    {
      name: 'Wave Animation',
      description:
        'sin wave, modulating amplitude, phase and frequency, using the ThreeJS library.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'threeJS',
          color: 'green-text-gradient',
        },
      ],
      image: wave.src,
      source_code_link: 'https://github.com/',
      demo_link: 'http://localhost:3000/wave',
    },
    {
      name: 'Job IT',
      description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: github.src,
      source_code_link: 'https://github.com/',
    },
    {
      name: 'Trip Guide',
      description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: github.src,
      source_code_link: 'https://github.com/',
    },
  ];

  return NextResponse.json({ projects });
}
