'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Link as SmoothLink } from 'react-scroll';

import logo from '../../public/images/logo.svg';
import menu from '../../public/images/menu.svg';
import { useLayoutStore } from '../store/LayoutStore';

export const Navbar = () => {
  // State
  const [toggle, setToggle] = useState(false);
  const { links: routes } = useLayoutStore();

  return (
    <nav
      className={`sm:px-16 px-6 pb-2 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <SmoothLink
          to={'hero'}
          smooth={true}
          duration={800}
          className="flex items-center gap-2"
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Enrique &nbsp;
            <span className="sm:block hidden">|&nbsp;Developer</span>
          </p>
        </SmoothLink>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {routes.map((link) => (
            <SmoothLink key={link.id} to={link.id} smooth={true} duration={800}>
              <li
                className={`${'text-secondary'} hover:text-white font-medium cursor-pointer text-[18px]`}
              >
                <span>{link.title}</span>
              </li>
            </SmoothLink>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {routes.map((link) => (
                <SmoothLink
                  to={link.id}
                  smooth={true}
                  duration={800}
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                  key={link.id}
                >
                  <li
                    className={`${'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  >
                    <span>{link.title}</span>
                  </li>
                </SmoothLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
