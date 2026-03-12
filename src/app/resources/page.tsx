import FooterThree from '@/components/homepage-08/FooterThree';
import ResourcesContent from '@/components/resources/ResourcesContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
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
        className="bg-white dark:bg-background-5"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          heading="Resources"
          title="Resources"
          link="/resources"
          className="pt-32 sm:pt-36 md:pt-40 xl:pt-[170px]"
        />
        <ResourcesContent />
        <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeClass="hidden"
          ctaHeading="Want help setting up Sumu"
          spanText="fast?"
          description="Browse documentation, explore tutorials, or contact our team for guided support."
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
          checkListVariant="gray"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default ResourcesPage;
