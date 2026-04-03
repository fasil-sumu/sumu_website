'use client';

import { servicesMenuItems } from '@/data/header';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface ServicesMenuProps {
  className?: string;
  isOpen?: boolean;
}

const ServicesMenu = ({ className, isOpen }: ServicesMenuProps) => {
  const { isRTL } = useLanguage();

  return (
    <div>
      <div
        className={cn(
          'fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 dark:bg-transparent',
          isOpen ? 'block' : 'hidden',
        )}
      />
      <div
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 absolute top-full z-50 mt-2 w-[620px] overflow-hidden rounded-[20px] border bg-white px-10 py-8 transition-all duration-300 2xl:w-[700px]',
          isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2',
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0',
          className,
        )}>
        <ul className="grid w-full grid-cols-2 gap-x-10 gap-y-4" dir={isRTL ? 'rtl' : 'ltr'}>
          {servicesMenuItems.map((item) => (
            <MegaMenuItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

ServicesMenu.displayName = 'ServicesMenu';
export default ServicesMenu;
