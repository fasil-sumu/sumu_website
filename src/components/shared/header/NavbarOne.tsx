'use client';

// Header v1
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { navigationItems } from '@/data/header';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';
import { FC, lazy, Suspense, useState, useRef, useEffect } from 'react';
import MobileMenu from '../MobileMenu';
import Logo from './Logo';
import MobileMenuButton from './MobileMenuButton';
import NavCTAButton from './NavCTAButton';
import NavItemLink from './NavItemLink';
import LanguageSwitcher from '../LanguageSwitcher';

// Lazy load mega menus for better performance
const AboutMenu = lazy(() => import('../mega-menu/AboutMenu'));
const BlogMenu = lazy(() => import('../mega-menu/BlogMenu'));
const HomeMegaMenu = lazy(() => import('../mega-menu/HomeMegaMenu'));
const PageMegaMenu = lazy(() => import('../mega-menu/PageMegaMenu'));
const ResourcesMenu = lazy(() => import('../mega-menu/ResourcesMenu'));
const ServicesMenu = lazy(() => import('../mega-menu/ServicesMenu'));

interface NavbarOneProps {
  className?: string;
  megaMenuColor?: string;
  btnClassName?: string;
}

const NavbarOne: FC<NavbarOneProps> = ({ className, megaMenuColor, btnClassName }) => {
  const { isScrolled } = useNavbarScroll(100);
  const { isRTL } = useLanguage();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <MobileMenuProvider>
      <header className="">
        <div
          className={cn(
            'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto flex w-full max-w-[320px] -translate-x-1/2 items-center justify-between rounded-full px-2.5 py-2.5 transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] xl:py-0',
            isScrolled && 'top-2 transition-all duration-500 ease-in-out',
            className,
          )}
          style={{ direction: 'ltr' }}>
          {/* logo */}
          <div className="flex-shrink-0  p-2">
            <Suspense fallback={<div className=" w-[44px] h-[44px] bg-gray-200 rounded animate-pulse" />}>
              <Logo />
            </Suspense>
          </div>
          {/* navigation */}
          <nav className="hidden items-center xl:flex flex-1 justify-center">
            <ul ref={navRef} className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
              {navigationItems.map((item) => {
                const isOpen = openDropdownId === item?.id;
                const renderMegaMenu = () => {
                  const menuComponent = (() => {
                    switch (item?.megaMenuComponent) {
                      case 'HomeMegaMenu':
                        return <HomeMegaMenu />;
                      case 'PageMegaMenu':
                        return <PageMegaMenu className={megaMenuColor} />;
                      case 'AboutMenu':
                        return <AboutMenu className={megaMenuColor} />;
                      case 'ServicesMenu':
                        return <ServicesMenu className={megaMenuColor} isOpen={isOpen} />;
                      case 'ResourcesMenu':
                        return <ResourcesMenu className={megaMenuColor} isOpen={isOpen} />;
                      case 'BlogMenu':
                        return <BlogMenu className={megaMenuColor} />;
                      default:
                        return null;
                    }
                  })();

                  return (
                    <Suspense
                      fallback={
                        <div className="absolute top-full left-0 mt-2 w-48 h-32 bg-white rounded-lg shadow-lg animate-pulse" />
                      }>
                      {menuComponent}
                    </Suspense>
                  );
                };

                // mega menu render
                return (
                  <li
                    key={item?.id}
                    className={cn('py-2.5', item?.hasDropdown && 'relative')}
                    onMouseEnter={() => item.hasDropdown && setOpenDropdownId(item.id)}
                    onMouseLeave={() => item.hasDropdown && setOpenDropdownId(null)}
                    onFocusCapture={() => item.hasDropdown && setOpenDropdownId(item.id)}
                    onBlurCapture={() => item.hasDropdown && setOpenDropdownId(null)}>
                    <NavItemLink item={item} isOpen={isOpen} />
                    {item.hasDropdown && renderMegaMenu()}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* right side - always on the right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <LanguageSwitcher />
            <NavCTAButton href="/signup-01" btnClassName={btnClassName} label="Get started" />
            {/* mobile menu btn */}
            <MobileMenuButton />
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
};

NavbarOne.displayName = 'NavbarOne';
export default NavbarOne;
