'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import {
  navigationItems,
  servicesMenuItems,
  resourcesTopMenuItems,
  MegaMenuItem,
  ResourcesTopMenuItem,
} from '@/data/header';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-removebg.png';
import logo from '@public/images/shared/logo-removebg.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import MobileMenuItem from './mobile-menu/MobileMenuItem';

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenuContext();
  const { t } = useTranslation();
  const sidebarRef = useRef<HTMLElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeMenu]);
  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'dark:bg-background-7 scroll-bar fixed top-0 right-0 z-[999] h-screen w-full bg-white transition-transform duration-300 ease-in-out sm:w-1/2 xl:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[85px] p-2">
              <Image src={logo} alt="Sumu" className="block w-full dark:hidden" />
              <Image src={logoDark} alt="Sumu" className="hidden w-full dark:block" />
            </figure>
          </Link>
          {/* close menu btn */}
          <button
            onClick={closeMenu}
            className="nav-hamburger-close bg-background-4 dark:bg-background-9 hover:bg-background-5 dark:hover:bg-background-8 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
            aria-label="Close mobile menu">
            <span className="sr-only">Close Menu</span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
            <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45 transition-all duration-200 group-hover:bg-stroke-1"></span>
          </button>
        </div>
        <div className="scroll-bar h-[85vh] w-full overflow-x-hidden overflow-y-auto pb-10">
          <ul className="mt-4">
            {navigationItems.map((item) => {
              if (item.hasDropdown) {
                let subItems: (MegaMenuItem | ResourcesTopMenuItem)[] = [];
                if (item.megaMenuComponent === 'ServicesMenu') subItems = servicesMenuItems;
                else if (item.megaMenuComponent === 'ResourcesMenu') subItems = resourcesTopMenuItems;

                return (
                  <MobileMenuItem key={item.id} id={item.id} title={t(item.label)} hasSubmenu>
                    <ul className="flex flex-col space-y-2 py-2">
                      {subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            href={subItem.href}
                            onClick={closeMenu}
                            className="text-tagline-1 text-secondary/70 dark:text-accent/70 block w-full py-2 pl-4 text-left font-normal transition-all duration-200 hover:text-brand">
                            {t(subItem.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </MobileMenuItem>
                );
              }

              return (
                <li key={item.id}>
                  <Link
                    href={item.href ?? '#'}
                    onClick={closeMenu}
                    className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200 hover:text-brand">
                    {t(item.label)}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
