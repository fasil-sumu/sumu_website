'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>{t('termsPage.intro.title')}</h2>
            <div className="space-y-7">
              <p>{t('termsPage.intro.p1')}</p>
              <p>{t('termsPage.intro.p2')}</p>
              <p>{t('termsPage.intro.p3')}</p>
            </div>
          </div>
        </RevealAnimation>

        <article className="terms-conditions-body">
          {/* 1. Limitation of liability */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.liability.title')}</h3>
              <p>{t('termsPage.sections.liability.p1')}</p>
              <p>{t('termsPage.sections.liability.p2')}</p>
            </div>
          </RevealAnimation>

          {/* 2. License */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.license.title')}</h3>
              <p>{t('termsPage.sections.license.p1')}</p>
              <p>{t('termsPage.sections.license.p2')}</p>
            </div>
          </RevealAnimation>

          {/* 3. Ownership and liability */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.ownership.title')}</h3>
              <p>{t('termsPage.sections.ownership.p1')}</p>
              <p>{t('termsPage.sections.ownership.p2')}</p>
              <p>
                {t('termsPage.sections.ownership.p3')}
                <strong className="font-bold !text-secondary dark:!text-accent">
                  {' '}
                  {t('termsPage.sections.ownership.nonTransferable')}{' '}
                </strong>
                {t('termsPage.sections.ownership.p3End')}
              </p>
            </div>
          </RevealAnimation>

          {/* 4. Refund policy */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.refund.title')}</h3>
              <p>{t('termsPage.sections.refund.p1')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/refund-policy"
              className="section-button btn dark:btn-accent hover:btn-primary btn-xl btn-secondary">
              {t('termsPage.sections.refund.link')}
            </Link>
          </RevealAnimation>

          {/* 5. Warranty */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.warranty.title')}</h3>
              <p>{t('termsPage.sections.warranty.p1')}</p>
            </div>
          </RevealAnimation>

          {/* 6. Account termination */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.termination.title')}</h3>
              <p>{t('termsPage.sections.termination.p1')}</p>
              <ul>
                {(t('termsPage.sections.termination.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* 7. Privacy policy */}
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>{t('termsPage.sections.privacy.title')}</h3>
              <p>{t('termsPage.sections.privacy.p1')}</p>
              <ul>
                {(t('termsPage.sections.privacy.items', { returnObjects: true }) as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{t('termsPage.sections.privacy.p2')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link
              href="/refund-policy"
              className="section-button btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              {t('termsPage.sections.privacy.link')}
            </Link>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
