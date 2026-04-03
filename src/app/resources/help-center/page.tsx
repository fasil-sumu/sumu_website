'use client';

import ResourcePageShell from '@/components/resources/ResourcePageShell';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const HelpCenterPage = () => {
  const { t } = useTranslation();

  return (
    <ResourcePageShell heading={t('resourcesPage.helpCenter.heading')}>
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Help center">
        <div className="main-container">
          <div className="mb-8">
            <Link
              href="/resources"
              className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent inline-flex items-center gap-2 transition-colors">
              <span aria-hidden>←</span>
              {t('resourcesPage.backToResources')}
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-7 space-y-6 rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
              <div className="space-y-2">
                <p className="badge badge-yellow-v2">{t('resourcesPage.helpCenter.badge')}</p>
                <h2 className="text-heading-4">{t('resourcesPage.helpCenter.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70">{t('resourcesPage.helpCenter.description')}</p>
              </div>
              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">{t('resourcesPage.helpCenter.coversTitle')}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/70 dark:text-accent/70">
                  {(t('resourcesPage.helpCenter.covers', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/resources/documentation"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {t('resourcesPage.helpCenter.docsBtn')}
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.helpCenter.quickStartTitle')}</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  {t('resourcesPage.helpCenter.quickStartText')}
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/guides-tutorials"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                    {t('resourcesPage.helpCenter.guidesBtn')}
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.helpCenter.contactTitle')}</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  {t('resourcesPage.helpCenter.contactText')}
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/contact-us"
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    {t('resourcesPage.helpCenter.contactBtn')}
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default HelpCenterPage;
