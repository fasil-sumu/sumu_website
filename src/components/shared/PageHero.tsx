import { cn } from '@/utils/cn';
// import Link from 'next/link';
import { ReactNode } from 'react';

interface PageHeroProps {
  className?: string;
  title?: ReactNode;
  heading?: ReactNode;
  link?: string;
  showHeading?: boolean;
}

const PageHero = ({ className, heading, showHeading = false }: PageHeroProps) => {
  const shouldShowHeading = Boolean(showHeading && heading);

  return (
    <section
      className={cn(
        shouldShowHeading ? 'xl:pt-[50px] md:pt-32 sm:pt-24 pt-24' : '!pt-24 sm:!pt-28 md:!pt-32 xl:!pt-36',
        className,
      )}
      aria-label="Page hero section">
      <div className="main-container">
        {shouldShowHeading ? (
          <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
            {/* <RevealAnimation delay={0.1}>
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              <Link
                href="/"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Home
              </Link>
              <span className="mx-2">-</span>
              <Link
                href={link || '/'}
                className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                {title}
              </Link>
            </span>
          </RevealAnimation> */}
            <h1 className="font-normal lg:text-heading-2">{heading}</h1>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default PageHero;
