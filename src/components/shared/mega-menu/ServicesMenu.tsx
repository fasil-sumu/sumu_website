import { servicesMenuItems } from '@/data/header';
import { cn } from '@/utils/cn';
import MegaMenuItem from './MegaMenuItem';

interface ServicesMenuProps {
  className?: string;
}

const ServicesMenu = ({ className }: ServicesMenuProps) => {
  return (
    <div>
      <div className="fixed top-full left-1/2 z-50 hidden w-full max-w-[1290px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-transparent py-6 transition-all duration-200 group-focus-within/nav:flex group-hover/nav:flex dark:bg-transparent"></div>
      <div
        className={cn(
          'dark:bg-background-6 border-stroke-1 dark:border-stroke-6 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[620px] -translate-x-1/2 translate-y-5 overflow-hidden rounded-[20px] border bg-white px-10 py-8 opacity-0 transition-transform duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100 2xl:w-[700px]',
          className,
        )}>
        <ul className="grid w-full grid-cols-2 gap-x-10 gap-y-4">
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
