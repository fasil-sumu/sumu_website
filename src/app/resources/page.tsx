import FooterThree from '@/components/homepage-08/FooterThree';
import ResourcesContent from '@/components/resources/ResourcesContent';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Sumu',
  description: 'Resources, support, and company information for Sumu users.',
};

const ResourcesPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          heading="Resources"
          title="Resources"
          link="/resources"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <ResourcesContent />
      </main>
      <FooterThree />
    </>
  );
};

export default ResourcesPage;
