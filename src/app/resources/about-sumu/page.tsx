'use client';

import ResourcePageShell from '@/components/resources/ResourcePageShell';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const AboutSumuPage = () => {
  const { t } = useTranslation();

  return (
    <ResourcePageShell heading={t('resourcesPage.aboutSumu.heading')}>
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="About Sumu">
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
            <div className="col-span-12 lg:col-span-8 space-y-6 rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
              <div className="space-y-2">
                <p className="badge badge-yellow-v2">{t('resourcesPage.aboutSumu.badge')}</p>
                <h2 className="text-heading-4">{t('resourcesPage.aboutSumu.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70">{t('resourcesPage.aboutSumu.p1')}</p>
                <p className="text-secondary/70 dark:text-accent/70">{t('resourcesPage.aboutSumu.p2')}</p>
              </div>

              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                  <h3 className="text-heading-6">{t('resourcesPage.aboutSumu.storyTitle')}</h3>
                  <p className="mt-3 text-secondary/70 dark:text-accent/70">{t('resourcesPage.aboutSumu.storyText')}</p>
                </div>
                <div className="col-span-12 md:col-span-6 rounded-2xl border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-6 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                  <h3 className="text-heading-6">{t('resourcesPage.aboutSumu.builtForTitle')}</h3>
                  <p className="mt-3 text-secondary/70 dark:text-accent/70">
                    {t('resourcesPage.aboutSumu.builtForText')}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-white p-6 dark:border-stroke-6 dark:bg-background-6">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">{t('resourcesPage.aboutSumu.missionTitle')}</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      {t('resourcesPage.aboutSumu.missionText')}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">{t('resourcesPage.aboutSumu.visionTitle')}</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      {t('resourcesPage.aboutSumu.visionText')}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">{t('resourcesPage.aboutSumu.valuesTitle')}</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      {t('resourcesPage.aboutSumu.valuesText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://sumu-frontend.vercel.app/signin"
                  className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  {t('resourcesPage.aboutSumu.startTrial')}
                </Link>
                <Link
                  href="/resources/contact-us"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {t('resourcesPage.aboutSumu.contactTeam')}
                </Link>
                <Link
                  href="/about-03"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {t('resourcesPage.aboutSumu.fullPage')}
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.aboutSumu.coreValuesTitle')}</h3>
                <ul className="mt-4 space-y-2 text-secondary/70 dark:text-accent/70">
                  {(t('resourcesPage.aboutSumu.coreValues', { returnObjects: true }) as string[]).map((value) => (
                    <li
                      key={value}
                      className="flex items-center justify-between rounded-xl border border-stroke-3 bg-white/70 px-4 py-2 dark:border-stroke-6 dark:bg-background-6/70">
                      <span>{value}</span>
                      <span className="text-secondary/40 dark:text-accent/40">•</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.aboutSumu.getStartedTitle')}</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  {t('resourcesPage.aboutSumu.getStartedText')}
                </p>
                <div className="mt-5">
                  <Link
                    href="https://sumu-frontend.vercel.app/signin"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full justify-center">
                    {t('resourcesPage.aboutSumu.startTrial')}
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

export default AboutSumuPage;
