import Features from '@/components/our-services-01/Features';
import Pricing from '@/components/homepage-08/Pricing';
import Services from '@/components/our-services-01/Services';
import Solutions from '@/components/our-services-01/Solutions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TranslatedText from '@/components/shared/TranslatedText';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Products - Sumu',
};

const OurServices01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:bg-background-5"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          className="pt-32 sm:pt-36 md:pt-40 xl:pt-[170px]"
          title={<TranslatedText i18nKey="productsPage.hero.title" defaultText="Products" />}
          heading={<TranslatedText i18nKey="productsPage.hero.heading" defaultText="Products" />}
          link="/our-services-01"
        />
        <Services />
        <Features />
        <Solutions />
        <Pricing />
        <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeClass="hidden"
          ctaHeading={
            <TranslatedText i18nKey="productsPage.cta.heading" defaultText="Ready to transform your business" />
          }
          spanText={<TranslatedText i18nKey="productsPage.cta.span" defaultText="finances?" />}
          description={
            <TranslatedText
              i18nKey="productsPage.cta.description"
              defaultText="Start your free trial today and experience the power of Sumu's complete financial platform."
            />
          }
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText={<TranslatedText i18nKey="productsPage.cta.button" defaultText="Get started" />}
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default OurServices01;
