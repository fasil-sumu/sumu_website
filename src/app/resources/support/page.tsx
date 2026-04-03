'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SupportResourcesPage = () => {
  const { t } = useTranslation();

  return (
    <ResourcePageShell heading={t('resourcesPage.support.heading')} link="/resources/support">
      <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Support resources">
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
                <h2>{t('resourcesPage.support.title')}</h2>
                <p>{t('resourcesPage.support.description')}</p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
              {[
                {
                  id: 'support-help-center',
                  title: t('resourcesPage.support.cards.helpCenter.title'),
                  description: t('resourcesPage.support.cards.helpCenter.description'),
                  href: '/resources/help-center',
                  icon: 'ns-shape-15',
                },
                {
                  id: 'support-documentation',
                  title: t('resourcesPage.support.cards.documentation.title'),
                  description: t('resourcesPage.support.cards.documentation.description'),
                  href: '/resources/documentation',
                  icon: 'ns-shape-11',
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white dark:bg-background-7 p-8 md:p-12 rounded-[24px] border border-stroke-3 dark:border-stroke-6 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <RevealAnimation delay={0.2}>
                    <h3 className="text-heading-4">{t('resourcesPage.support.helpTopicsTitle')}</h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <ul className="space-y-4">
                      {(t('resourcesPage.support.helpTopics', { returnObjects: true }) as string[]).map((text) => (
                        <li
                          key={text}
                          className="flex items-center gap-4 text-tagline-1 text-secondary/80 dark:text-accent/80 font-medium">
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-primary" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                </div>
                <div className="space-y-6">
                  <RevealAnimation delay={0.4}>
                    <h3 className="text-heading-4">{t('resourcesPage.support.docsTopicsTitle')}</h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <ul className="space-y-4">
                      {(t('resourcesPage.support.docsTopics', { returnObjects: true }) as string[]).map((text) => (
                        <li
                          key={text}
                          className="flex items-center gap-4 text-tagline-1 text-secondary/80 dark:text-accent/80 font-medium">
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-primary" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.6}>
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[16px] overflow-hidden border border-stroke-3 dark:border-stroke-6 shadow-sm">
                  <Image
                    src="/img/invoice-billing-information-form-graphic-concept.jpg"
                    alt="Support resources"
                    fill
                    className="object-cover"
                  />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default SupportResourcesPage;
