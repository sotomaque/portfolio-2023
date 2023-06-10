'use client';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import type { Experience as ExperienceType } from '@/app/types';
import Image from 'next/image';

interface ExperienceCardProps {
  index: number;
  experience: ExperienceType;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{
        borderRight: '7px solid #232632',
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            className="w-[70%] h-[70%] object-contain"
            src={experience.icon}
            alt={experience.title}
            width={100}
            height={100}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience Details */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
