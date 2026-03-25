'use client';

import { NavigationItem } from '@/data/header';
import { cn } from '@/utils/cn';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export type NavItemVariant = 'default' | 'border' | 'white' | 'light';

interface NavItemLinkProps {
  item: NavigationItem;
  variant?: NavItemVariant;
  isOpen?: boolean;
}

const getVariantClasses = (variant: NavItemVariant = 'default', isOpen: boolean = false): string => {
  const openClasses = {
    default: isOpen
      ? 'border-stroke-2 dark:border-stroke-7 bg-accent/20 dark:bg-transparent text-secondary dark:text-accent'
      : '',
    border: isOpen ? 'text-secondary dark:text-accent before:origin-left before:scale-x-100' : '',
    white: isOpen ? 'text-accent before:w-full before:bg-accent' : '',
    light: isOpen
      ? 'border-stroke-1 dark:border-transparent bg-accent/20 dark:bg-secondary/20 text-accent dark:text-accent'
      : '',
  };

  const variants = {
    default:
      'flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 hover:dark:border-stroke-7 rounded-full hover:bg-accent/20 hover:dark:bg-transparent text-tagline-1 font-normal text-secondary/60 hover:text-secondary dark:text-accent/60 hover:dark:text-accent transition-all duration-200',
    border:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal text-secondary/60 hover:text-secondary hover:dark:text-accent dark:text-accent transition-all duration-200 overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:transition-transform before:duration-500 before:content-[''] hover:before:origin-left hover:before:scale-x-100 dark:before:bg-white before:bg-secondary",
    white:
      "flex items-center gap-1 h-full relative text-tagline-1 font-normal hover:text-accent text-accent transition-all duration-200 before:absolute before:content-[''] before:bottom-0 before:left-0 before:h-px before:w-0 hover:before:bg-accent before:transition-all before:duration-300 hover:before:w-full ",
    light:
      'flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-1 hover:dark:border-transparent rounded-full hover:bg-accent/20 hover:dark:bg-secondary/20 text-tagline-1 font-normal text-accent/60 hover:text-accent dark:text-accent/60 hover:dark:text-accent transition-all duration-200',
  };

  return `${variants[variant]} ${openClasses[variant]}`;
};

const NavItemLink = ({ item, variant = 'default', isOpen = false }: NavItemLinkProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(getVariantClasses(variant, isOpen))}>
      <Link href={item.href ?? '#'} className="outline-none">
        <span>{t(item?.label)}</span>
      </Link>

      {item?.hasDropdown && (
        <span
          className={cn(
            'block origin-center transition-transform duration-300 flex-shrink-0 ml-1 p-[2px] rounded-full hover:bg-secondary/10 dark:hover:bg-white/10',
            isOpen ? 'rotate-180' : 'rotate-0',
          )}
          aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      )}
    </div>
  );
};

export default NavItemLink;
