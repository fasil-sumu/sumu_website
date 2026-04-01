import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-02/Services';
import ServicesV2 from '@/components/our-services-02/ServicesV2';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TranslatedText from '@/components/shared/TranslatedText';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Services 02 - Sumu',
};

const OurServices02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 backdrop-blur-[25px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary dark:btn-accent hover:btn-primary"
        megaMenuColor="!bg-background-3 dark:!bg-background-8"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Our Services 2" heading="Our Services" link="/our-services-02" />
        <Services />
        <ServicesV2 />
        <Features
          className="lg:pt-[200px] lg:pb-[100px]"
          badgeClassName="badge-green-v2"
          btnClassName="btn btn-xl dark:btn-transparent hover:btn-primary btn-white"
        />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeText={<TranslatedText i18nKey="homepage08.cta.badge" defaultText="Get started" />}
          ctaHeading={
            <TranslatedText
              i18nKey="homepage08.cta.heading"
              defaultText="Accelerate your business growth with Sumu's smart platform."
            />
          }
          description={
            <TranslatedText
              i18nKey="homepage08.cta.description"
              defaultText="Start your free trial today and see your business transformation happen easily and securely with Sumu."
            />
          }
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText={<TranslatedText i18nKey="homepage08.cta.button" defaultText="Get started" />}
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default OurServices02;
