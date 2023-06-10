'use client';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '@/app/constants';
import { useQuery } from '@tanstack/react-query';
import { getWorkExperience } from '@/app/actions/getWorkExperience';
import { useMemo } from 'react';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  const { data } = useQuery({
    queryKey: ['experience'],
    queryFn: getWorkExperience,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const experiences = useMemo(() => {
    if (data && data.length > 0) {
      return data;
    }

    return [];
  }, [data]);

  return (
    <>
      <motion.div className="pt-16" variants={textVariant()}>
        <p
          className={
            'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'
          }
        >
          What I have done so far
        </p>
        <p
          className={
            'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
          }
        >
          Work Exprience
        </p>
      </motion.div>

      {/* Veritcal Timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
