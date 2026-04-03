'use client';

import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title={t('contactPage.hero.title')}
          heading={t('contactPage.hero.heading')}
          link="/contact-us"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
        />
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText={t('contactPage.cta.badge')}
          ctaBtnText={t('contactPage.cta.button')}
          ctaHeading={t('contactPage.cta.heading')}
          description={t('contactPage.cta.description')}
        />
      </main>
      <FooterThree />
    </>
  );
};

ContactUs.displayName = 'ContactUs';
export default ContactUs;
