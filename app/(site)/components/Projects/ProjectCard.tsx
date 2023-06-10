'use client';

// @ts-ignore
import Tilt from 'react-tilt';
import Image from 'next/image';
import { motion } from 'framer-motion';

import github from '../../../../public/images/github.png';
import { fadeIn } from '@/app/constants';
import type { Project } from '@/app/types';

export const ProjectCard = ({
  index,
  project: { description, image, name, source_code_link, tags, demo_link },
}: {
  index: number;
  project: Project;
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl xs:w-[360px] w-1/2"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            height={230}
            width={360}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          {demo_link && (
            <button
              onClick={() => window.open(demo_link, '_blank')}
              className="hover:bg-secondary hover:text-black rounded-[10px] py-2 px-4 text-white text-[14px] font-bold bg-tertiary"
            >
              Demo
            </button>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};
