import Feature from '@/components/our-services-03/Feature';
import Integration from '@/components/our-services-03/Integration';
import Services from '@/components/our-services-03/Services';
import UseCases from '@/components/our-services-03/UseCases';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TranslatedText from '@/components/shared/TranslatedText';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Our Services 03 - Sumu',
};

const OurServices03 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Services 03" heading="Our Services" link="/our-services-03" />
        <Services />
        <Integration />
        <UseCases />
        <Feature
          btnClassName="btn btn-md hover:btn-primary btn-white"
          className="lg:py-[200px] py-[100px] bg-background-3 dark:bg-background-7"
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

export default OurServices03;
