'use client ';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div
        className={`sm:px-16 px-6 absolute inset-0 top-[120px] mx-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Circle / Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5db1ff]" />
          <div
            className="w-1 sm:h-80 h-40 
          bg-[#5db1ff] 
          bg-opacity-50 
          bg-gradient-to-b
           from-blue-300
           to-transparent
          "
          />
        </div>

        {/* My Info */}
        <div
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          <h1>
            Hi, I am <span className="text-[#5db1ff]">Enrique</span>
          </h1>
          <p
            className={`sm:text-[18px] text-[14px] uppercase tracking-wider mt-2 text-white-100`}
          >
            I develop web applications, <br className="sm:block hidden" />
            mobile apps, and backend services
          </p>
        </div>
      </div>

      {/* Scroll Animation */}
      <div
        className="
          absolute bottom-10
          w-full 
          flex justify-center items-center
          z-10
        "
      >
        <Link to="about" smooth={true} duration={800}>
          <div
            className="
          w-[35px] h-[64px] 
          rounded-3xl 
          border-4 border-secondary 
          flex justify-center items-start 
          shadow-lg
          shadow-slate-200
          p-2
          hover:cursor-pointer
          "
          >
            <motion.div
              animate={{
                y: [0, 24, 0], // move it 24px down and back to 0
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
