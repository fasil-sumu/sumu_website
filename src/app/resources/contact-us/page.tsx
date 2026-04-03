'use client';

import ResourcePageShell from '@/components/resources/ResourcePageShell';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ResourcesContactPage = () => {
  const { t } = useTranslation();

  return (
    <ResourcePageShell heading={t('resourcesPage.contactUs.heading')}>
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Contact Sumu">
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
                <p className="badge badge-yellow-v2">{t('resourcesPage.contactUs.badge')}</p>
                <h2 className="text-heading-4">{t('resourcesPage.contactUs.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70">{t('resourcesPage.contactUs.description')}</p>
              </div>
              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">{t('resourcesPage.contactUs.reasonsTitle')}</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-secondary/70 dark:text-accent/70">
                  {(t('resourcesPage.contactUs.reasons', { returnObjects: true }) as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/contact-us" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  {t('resourcesPage.contactUs.formBtn')}
                </Link>
                <Link
                  href="/resources/help-center"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  {t('resourcesPage.contactUs.helpBtn')}
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.contactUs.detailsTitle')}</h3>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">{t('contactPage.info.address.content')}</p>
                <div className="mt-5 space-y-3">
                  <Link
                    href="mailto:info@joinsumu.com"
                    className="text-secondary hover:text-primary-500 dark:text-accent dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors">
                    <span className="text-secondary/40 dark:text-accent/40">
                      {t('resourcesPage.contactUs.emailLabel')}
                    </span>
                    info@joinsumu.com
                  </Link>
                  <Link
                    href="tel:+98675008142"
                    className="text-secondary hover:text-primary-500 dark:text-accent dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors">
                    <span className="text-secondary/40 dark:text-accent/40">
                      {t('resourcesPage.contactUs.mobileLabel')}
                    </span>
                    +986 75008142
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">{t('resourcesPage.contactUs.learnMoreTitle')}</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  {t('resourcesPage.contactUs.learnMoreText')}
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/about-sumu"
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full justify-center">
                    {t('resourcesPage.contactUs.aboutBtn')}
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

export default ResourcesContactPage;
