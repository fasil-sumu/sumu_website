import { cn } from '@/utils/cn';
// import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { ReactNode } from 'react';

interface PageHeroProps {
  className?: string;
  title?: ReactNode;
  heading?: ReactNode;
  link?: string;
}

const PageHero = ({ className, heading }: PageHeroProps) => {
  return (
    <section className={cn('xl:pt-[50px] md:pt-32 sm:pt-24 pt-24 ', className)} aria-label="Page hero section">
      <div className="main-container">
        {/* Hero content */}
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
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal lg:text-heading-2">{heading}</h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
