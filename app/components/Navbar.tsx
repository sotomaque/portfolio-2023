'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { LinkWrapper } from './WrappedLink';
import logo from '../../public/images/logo.svg';
import menu from '../../public/images/menu.svg';
import close from '../../public/images/close.svg';
import { type NavItem, useLayoutStore } from '../store/LayoutStore';

export const Navbar = () => {
  // State
  const [toggle, setToggle] = useState(false);
  const { links: routes } = useLayoutStore();
  const pathname = usePathname();
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>('hero');

  const isElementVisible = useCallback((id: string): boolean => {
    const element = document.getElementById(id);
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const isVisible = top < windowHeight && bottom >= 0;
      console.log(`${id}: is visible? ${isVisible}`);
      return isVisible;
    }

    return false;
  }, []);

  const handleMobileItemClick = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (pathname.includes('/posts')) {
      setSelectedNavItem('posts');
      return;
    }

    if (pathname.includes('/projects')) {
      setSelectedNavItem('projects');
      return;
    }

    const handleScroll = () => {
      const visibleNavItems = routes.filter((link) =>
        isElementVisible(link.id),
      );
      if (visibleNavItems && visibleNavItems.length > 0) {
        // if we are on about & work experience, need a special case
        // to keep account as selected nav item
        if (visibleNavItems.find((item) => item.id === 'about')) {
          setSelectedNavItem('about');
          return;
        }

        setSelectedNavItem(visibleNavItems[visibleNavItems.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [routes, isElementVisible, pathname]);

  return (
    <nav
      className={`sm:px-16 px-6 pb-2 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <LinkWrapper isHome={pathname === '/'}>
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Enrique &nbsp;
            <span className="sm:block hidden">|&nbsp;Developer</span>
          </p>
        </LinkWrapper>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {routes.map((link) => (
            <LinkWrapper
              key={link.id}
              to={link.id}
              isHome={pathname === '/'}
              href={link.href}
            >
              <li
                className={clsx(
                  `${'text-secondary'} hover:text-white font-medium cursor-pointer text-[18px]`,
                  selectedNavItem === link.id && 'text-white',
                )}
              >
                <span>{link.title}</span>
              </li>
            </LinkWrapper>
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
            className={`
            ${toggle ? 'flex' : 'hidden'} 
            px-4
            py-6
            absolute 
            top-20 
            right-0 
            mx-4 
            my-2 
            min-w-[140px] 
            z-10 
            rounded-xl 
            bg-black 
            border-2
            border-slate-800
            `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {routes.map((link) => (
                <LinkWrapper
                  key={link.id}
                  to={link.id}
                  isHome={pathname === '/'}
                  href={link.href}
                  onClick={handleMobileItemClick}
                >
                  <li
                    className={clsx(
                      `text-secondary font-poppins font-medium cursor-pointer text-[16px]`,
                      selectedNavItem === link.id && 'text-white',
                    )}
                  >
                    <span>{link.title}</span>
                  </li>
                </LinkWrapper>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
