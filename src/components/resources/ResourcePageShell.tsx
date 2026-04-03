'use client';

import FooterThree from '@/components/homepage-08/FooterThree';
import CTAV1 from '@/components/shared/cta/CTAV1';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

interface ResourcePageShellProps {
  heading: string;
  children: ReactNode;
  link?: string;
  showCta?: boolean;
}

const ResourcePageShell = ({ heading, children, link, showCta = true }: ResourcePageShellProps) => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7" dir={isRTL ? 'rtl' : 'ltr'}>
        <PageHero title={heading} heading={heading} link={link} className="pt-32 sm:pt-36 md:pt-40 xl:pt-[170px]" />
        {children}
        {showCta && (
          <CTAV1
            className="dark:bg-background-5 bg-white"
            badgeClass="!badge-yellow-v2"
            badgeText={t('resourcesPage.cta.badge')}
            ctaHeading={t('resourcesPage.cta.heading')}
            description={t('resourcesPage.cta.description')}
            btnClass="hover:btn-secondary dark:hover:btn-accent"
            ctaBtnText={t('resourcesPage.cta.button')}
          />
        )}
      </main>
      <FooterThree />
    </>
  );
};

export default ResourcePageShell;
