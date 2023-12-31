'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import { fadeIn, textVariant } from '@/app/constants';
import { getProjects } from '@/app/actions/getProjects';
import { ProjectCard } from './ProjectCard';

type ProjectsProps = {
  className?: string;
};

export const Projects = ({ className }: ProjectsProps) => {
  // Hook(s)
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const projects = useMemo(() => {
    if (data && data.length > 0) {
      return data;
    }

    return [];
  }, [data]);

  return (
    <div id="projects" className={className}>
      <motion.div className="pt-16" variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}
        >
          My work
        </p>
        <h2
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div
        className={`
        mt-20 
        grid
        grid-cols-1
        md:grid-cols-2
        md:gap-4
        lg:grid-cols-3
        items-center 
        space-y-4 
        `}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};
