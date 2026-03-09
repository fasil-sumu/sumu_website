import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import SolutionsContent from '@/components/solutions/SolutionsContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Sumu',
  description: 'Solutions for small businesses, freelancers, accountants, and growing businesses.',
};

const SolutionsPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          heading="Solutions"
          title="Solutions"
          link="/solutions"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <SolutionsContent />
      </main>
      <FooterThree />
    </>
  );
};

export default SolutionsPage;
