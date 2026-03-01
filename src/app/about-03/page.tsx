import AboutMap from '@/components/aboutpage-03/AboutMap';
import Feature from '@/components/aboutpage-03/Feature';
import Innovation from '@/components/aboutpage-03/Innovation';
import OurMission from '@/components/aboutpage-03/OurMission';
import OurVision from '@/components/aboutpage-03/OurVision';
import Teams from '@/components/homepage-08/Teams';
import CTA from '@/components/homepage-08/CTA';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Feature2 from '@/components/features-02/Features';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Sumu',
  description: 'About Sumu fintech and business platform',
};

const AboutPage03 = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-xl dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <PageHero
          className="bg-background-3 pt-32 sm:pt-36 md:pt-40 xl:pt-[170px] dark:bg-background-5"
          title="About"
          heading="About"
          link="/about-03"
        />
        <Feature />
        <OurMission />
        <OurVision />
        <Innovation />
        {/* <Teams /> */}
        {/* <AboutMap /> */}
        <Feature2 />
        <CTA />
      </main>
      <FooterThree />
    </>
  );
};
AboutPage03.displayName = 'AboutPage03';
export default AboutPage03;
