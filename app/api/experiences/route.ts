import { NextResponse } from 'next/server';

import nutrien from '../../../public/images/company/nutrien.png';
import eco from '../../../public/images/company/eco.png';
import shareGro from '../../../public/images/company/sharegro.png';
import type { Experience } from '@/app/types';

const experiences: Experience[] = [
  {
    title: 'Principal Software Engineer',
    company_name: 'Nutrien Digital',
    icon: nutrien.src,
    iconBg: 'rgb(81, 162, 71)',
    date: 'Sept 2022 - June 2023',
    points: [
      'As a principal software engineer, I am responsible for managing a team of engineers, and ensuring we deliver on our business commitments.',
      'I work closely with designers, business partners, and other teams to ensure commitments and code quality standards are met.',
    ],
  },
  {
    title: 'Software Engineer III',
    company_name: 'Eco',
    icon: eco.src,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Played a key role in the growth and development of Eco from a small startup to a thriving business with over 70 employees.',
      'Leading contributor to several repositories, responsible for building and maintaining various applications, including a SwiftUI app, a Node NestJS backend, and a NextJS internal admin project.',
      'Collaborated closely with cross-functional teams to deliver high-quality solutions that met customer needs.',
      'Helped establish best practices and standards for engineering processes.',
      'Gained expertise in a variety of technologies and made significant contributions to the success of Eco.',
      'Contributed to a React Native application during my employment at Eco.',
      'Took ownership of an analytics pipeline and made significant contributions to its development.',
      'Contributed towards a SwiftUI rewrite of an application at Eco.',
      'Contributed towards a NestJS, Typescript, Node backend at Eco.',
      'Took ownership of a NextJS (T3 Stack) internal admin application at Eco.',
    ],
  },
  {
    title: 'Leadership Advisor',
    company_name: 'shareGRO',
    icon: shareGro.src,
    iconBg: 'rgb(41, 86, 66)',
    date: 'June 2021 - March 2023',
    points: [
      'Technology advisor for shareGRO, a tailored wealth management platform.',
      'Responsible for providing guidance and support to the leadership team on technology decisions.',
      'Meet with the founder and other members of the leadership team to discuss potential technology solutions and strategies.',
      'Screen potential software engineer hires to ensure they have the necessary skills and experience.',
      'Contribute to the success of the company through technology expertise.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Nutrien',
    icon: nutrien.src,
    iconBg: 'rgb(81, 162, 71)',
    date: 'Mar 2021 - May 2021',
    points: [
      'Full-Stack SDE working with React, React Native, GraphQL, and AWS.',
      "Collaborating with Nutrien's Digital team to modernize an existing application.",
    ],
  },
];

export function GET() {
  return NextResponse.json({ experiences });
}
