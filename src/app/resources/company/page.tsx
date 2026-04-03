'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const CompanyResourcesPage = () => {
  const { t } = useTranslation();

  return (
    <ResourcePageShell heading={t('resourcesPage.company.heading')} link="/resources/company">
      <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Company resources">
        <div className="main-container">
          <div className="space-y-14 md:space-y-[70px]">
            <div>
              <Link
                href="/resources"
                className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent inline-flex items-center gap-2 transition-colors">
                <span aria-hidden>←</span>
                {t('resourcesPage.backToResources')}
              </Link>
            </div>

            <RevealAnimation delay={0.1}>
              <div className="md:text-center max-w-[602px] space-y-1.5 md:space-y-3 mx-auto">
                <h2>{t('resourcesPage.company.title')}</h2>
                <p>{t('resourcesPage.company.description')}</p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
              {[
                {
                  id: 'company-about',
                  title: t('resourcesPage.company.cards.about.title'),
                  description: t('resourcesPage.company.cards.about.description'),
                  href: '/resources/about-sumu',
                  icon: 'ns-shape-9',
                },
                {
                  id: 'company-contact',
                  title: t('resourcesPage.company.cards.contact.title'),
                  description: t('resourcesPage.company.cards.contact.description'),
                  href: '/resources/contact-us',
                  icon: 'ns-shape-2',
                },
              ].map((card, index) => (
                <RevealAnimation key={card.id} delay={0.2 + index * 0.1}>
                  <div className="col-span-12 md:col-span-6">
                    <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out min-h-[320px]">
                      <div className="flex items-center justify-center">
                        <span className={`${card.icon} text-[52px] text-secondary dark:text-accent`} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-heading-5">{card.title}</h3>
                        <p className="max-w-[361px] mx-auto line-clamp-3">{card.description}</p>
                      </div>
                      <div>
                        <LinkButton
                          href={card.href}
                          className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                          {t('resourcesPage.readMore')}
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white dark:bg-background-7 p-8 md:p-12 rounded-[24px] border border-stroke-3 dark:border-stroke-6">
              <div className="space-y-8">
                <RevealAnimation delay={0.2}>
                  <h3 className="text-heading-4">{t('resourcesPage.company.contactDetailsTitle')}</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="ns-shape-16 text-xl"></i>
                    </span>
                    <div>
                      <h5 className="text-heading-6 mb-2">{t('resourcesPage.company.officeAddress')}</h5>
                      <p className="text-secondary/80 dark:text-accent/80 leading-relaxed max-w-[320px]">
                        {t('contactPage.info.address.content')}
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <i className="ns-shape-10 text-xl"></i>
                    </span>
                    <div className="space-y-3">
                      <h5 className="text-heading-6">{t('resourcesPage.company.reachOut')}</h5>
                      <div className="flex flex-col gap-2">
                        <Link
                          href="mailto:info@joinsumu.com"
                          className="text-secondary/80 hover:text-primary dark:text-accent/80 font-medium transition-colors inline-block">
                          info@joinsumu.com
                        </Link>
                        <Link
                          href="tel:+98675008142"
                          className="text-secondary/80 hover:text-primary dark:text-accent/80 font-medium transition-colors inline-block">
                          {t('contactPage.info.phone.content')}
                        </Link>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.5}>
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-stroke-3 dark:border-stroke-6 shadow-sm">
                  <Image src="/img/5138237.jpg" alt="Company contact" fill className="object-cover" />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default CompanyResourcesPage;
