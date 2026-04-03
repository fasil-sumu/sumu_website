'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { useTranslation } from 'react-i18next';

const ResourcesContent = () => {
  const { t } = useTranslation();

  const resourcesCards = [
    {
      id: 'resources-learn',
      title: t('resourcesPage.cards.learn.title'),
      description: t('resourcesPage.cards.learn.description'),
      href: '/resources/learn',
      icon: 'ns-shape-8',
    },
    {
      id: 'resources-support',
      title: t('resourcesPage.cards.support.title'),
      description: t('resourcesPage.cards.support.description'),
      href: '/resources/support',
      icon: 'ns-shape-15',
    },
    {
      id: 'resources-company',
      title: t('resourcesPage.cards.company.title'),
      description: t('resourcesPage.cards.company.description'),
      href: '/resources/company',
      icon: 'ns-shape-9',
    },
  ];

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]" aria-label="Resources content">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">{t('resourcesPage.badge')}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">{t('resourcesPage.heading')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">{t('resourcesPage.subheading')}</p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {resourcesCards.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out min-h-[320px]">
                  <div className="flex items-center justify-center">
                    <span className={`${item.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{item.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={item.href}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      {t('resourcesPage.readMore')}
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesContent;
