'use client';

import FooterThree from '@/components/homepage-08/FooterThree';
import ResourcesContent from '@/components/resources/ResourcesContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const ResourcesPage = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <>
      <NavbarOne
        className="bg-white dark:bg-background-5"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7" dir={isRTL ? 'rtl' : 'ltr'}>
        <PageHero
          heading={t('resourcesPage.hero.heading')}
          title={t('resourcesPage.hero.title')}
          link="/resources"
          className="pt-32 sm:pt-36 md:pt-40 xl:pt-[170px]"
        />
        <ResourcesContent />
        <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeClass="hidden"
          ctaHeading={t('resourcesPage.cta.heading')}
          spanText={t('resourcesPage.cta.span')}
          description={t('resourcesPage.cta.description')}
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText={t('resourcesPage.cta.button')}
          checkListVariant="gray"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default ResourcesPage;
