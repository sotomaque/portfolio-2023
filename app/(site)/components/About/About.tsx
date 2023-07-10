'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import { getAboutSection } from '@/app/actions/getAboutSection';
import { fadeIn, styles, textVariant } from '@/app/constants';

type AboutProps = {
  className?: string;
};

export const About = ({ className }: AboutProps) => {
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

  return (
    <div className={`pt-16 ${className}`} id="about">
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
    </div>
  );
};
