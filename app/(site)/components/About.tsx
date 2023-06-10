'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import { getAboutSection } from '@/app/actions/getAboutSection';
import { fadeIn, styles, textVariant } from '@/app/constants';
import { AboutCard } from './AboutCard';

export const About = () => {
  const { data } = useQuery({
    queryKey: ['about'],
    queryFn: getAboutSection,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const overview = useMemo(() => {
    if (data?.overview) {
      return data.overview;
    }

    return '';
  }, [data?.overview]);

  const services = useMemo(() => {
    if (data?.services) {
      return data.services;
    }

    return [];
  }, [data?.services]);

  return (
    <div className="pt-16" id="about">
      {/* Intro / Overview */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      {/* Overview */}
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn('', '', 0.1, 1)}
      >
        {overview}
      </motion.p>

      {/* Services */}
      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map(({ title, icon }, index) => (
          <AboutCard key={title} title={title} index={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};
