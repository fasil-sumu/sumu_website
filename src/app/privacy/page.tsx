'use client';

import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import PrivacyContent from '@/components/privacy/PrivacyContent';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7" dir={isRTL ? 'rtl' : 'ltr'}>
        <PageHero title={t('privacyPage.hero.title')} heading={t('privacyPage.hero.heading')} link="/privacy" />
        <PrivacyContent />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText={t('privacyPage.cta.badge')}
          ctaHeading={t('privacyPage.cta.heading')}
          description={t('privacyPage.cta.description')}
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText={t('privacyPage.cta.button')}
        />
      </main>
      <FooterThree />
    </>
  );
};

export default Privacy;
