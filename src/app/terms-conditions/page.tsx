'use client';

import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const TermsConditions = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7" dir={isRTL ? 'rtl' : 'ltr'}>
        <PageHero title={t('termsPage.hero.title')} heading={t('termsPage.hero.heading')} link="/terms-conditions" />
        <TermsConditionContent />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText={t('termsPage.cta.badge')}
          ctaHeading={t('termsPage.cta.heading')}
          description={t('termsPage.cta.description')}
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText={t('termsPage.cta.button')}
        />
      </main>
      <FooterThree />
    </>
  );
};

export default TermsConditions;
