'use client';

import Image from 'next/image';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/hooks/useLanguage';
import TranslatedText from '../shared/TranslatedText';
import LinkButton from '../ui/button/LinkButton';

const TRIAL_URL = 'https://sumu-frontend.vercel.app/';
type SectionProps = {
  id: string;
  titleKey: string;
  headingKey: string;
  descKeys: string[];
  benefitPrefix: string;
  image: string;
  reverse?: boolean;
};
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={cn('size-4', className)}>
    <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <div className="size-5 rounded-full bg-secondary flex items-center justify-center text-white text-xs">✓</div>
);

const SolutionsContent = () => {
  const { isRTL } = useLanguage();

  const renderFeatures = (prefix: string) => (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckIcon />
          <span className="text-sm text-secondary dark:text-accent">
            <TranslatedText i18nKey={`${prefix}.b${i + 1}`} />
          </span>
        </div>
      ))}
    </div>
  );

  const renderSection = ({ id, titleKey, headingKey, descKeys, benefitPrefix, image, reverse }: SectionProps) => (
    <section
      id={id}
      className="rounded-[24px] bg-white dark:bg-background-6 p-6 md:p-10 border border-stroke-1 dark:border-stroke-6">
      <h2 className="text-heading-3 mb-8">
        <TranslatedText i18nKey={titleKey} />
      </h2>

      <div className={cn('grid lg:grid-cols-2 gap-10 items-center', reverse && 'lg:grid-flow-dense')}>
        {/* TEXT */}
        <div className={cn(reverse && 'lg:col-start-2')}>
          <h3 className="text-heading-6 mb-4">
            <TranslatedText i18nKey={headingKey} />
          </h3>

          <div className="space-y-4 text-secondary/70">
            {descKeys.map((key: string) => (
              <p key={key}>
                <TranslatedText i18nKey={key} />
              </p>
            ))}
          </div>

          {renderFeatures(benefitPrefix)}
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden border border-stroke-1 shadow-lg">
          <Image src={image} alt="solution preview" width={600} height={400} className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );

  return (
    <div className="main-container pb-24 space-y-16">
      {/* HERO */}
      <section className="text-center pt-10 md:pt-16 pb-12 space-y-6">
        <span className="badge badge-yellow-v2">
          <TranslatedText i18nKey="solutionsPage.overview.badge" />
        </span>

        <h1 className="text-heading-2 md:text-heading-1 max-w-[900px] mx-auto">
          <TranslatedText i18nKey="solutionsPage.overview.title" />
        </h1>

        <p className="max-w-[700px] mx-auto text-secondary/70">
          <TranslatedText i18nKey="solutionsPage.overview.description" />
        </p>

        <div className={cn('flex justify-center gap-4', isRTL && 'flex-row-reverse')}>
          <LinkButton href={TRIAL_URL} className="btn btn-primary btn-xl flex items-center gap-2">
            <TranslatedText i18nKey="solutionsPage.cta.primary" />
            <ArrowIcon className={isRTL ? 'rotate-180' : ''} />
          </LinkButton>

          <LinkButton href="/contact-us" className="btn btn-outline btn-xl">
            <TranslatedText i18nKey="solutionsPage.cta.secondary" />
          </LinkButton>
        </div>
      </section>

      {/* SECTIONS */}

      {renderSection({
        id: 'small-businesses',
        titleKey: 'solutionsPage.items.smallBusinesses.title',
        headingKey: 'solutionsPage.details.smallBusinesses.heading',
        descKeys: [
          'solutionsPage.details.smallBusinesses.p1',
          'solutionsPage.details.smallBusinesses.p2',
          'solutionsPage.details.smallBusinesses.p3',
        ],
        benefitPrefix: 'solutionsPage.details.smallBusinesses.benefits',
        image: '/images/solutions/small-business.png',
      })}

      {renderSection({
        id: 'freelancers-consultants',
        titleKey: 'solutionsPage.items.freelancers.title',
        headingKey: 'solutionsPage.details.freelancers.heading',
        descKeys: [
          'solutionsPage.details.freelancers.p1',
          'solutionsPage.details.freelancers.p2',
          'solutionsPage.details.freelancers.p3',
        ],
        benefitPrefix: 'solutionsPage.details.freelancers.benefits',
        image: '/images/solutions/freelancers.png',
        reverse: true,
      })}

      {renderSection({
        id: 'accountants-bookkeepers',
        titleKey: 'solutionsPage.items.accountants.title',
        headingKey: 'solutionsPage.details.accountants.heading',
        descKeys: [
          'solutionsPage.details.accountants.p1',
          'solutionsPage.details.accountants.p2',
          'solutionsPage.details.accountants.p3',
        ],
        benefitPrefix: 'solutionsPage.details.accountants.benefits',
        image: '/images/solutions/accountants.png',
      })}

      {renderSection({
        id: 'growing-businesses',
        titleKey: 'solutionsPage.items.growingBusinesses.title',
        headingKey: 'solutionsPage.details.growingBusinesses.heading',
        descKeys: [
          'solutionsPage.details.growingBusinesses.p1',
          'solutionsPage.details.growingBusinesses.p2',
          'solutionsPage.details.growingBusinesses.p3',
        ],
        benefitPrefix: 'solutionsPage.details.growingBusinesses.benefits',
        image: '/images/solutions/growing.png',
        reverse: true,
      })}

      {/* CTA */}
      <section className="rounded-[24px] bg-secondary text-accent px-8 py-16 text-center space-y-6">
        <h2 className="text-heading-2">
          <TranslatedText i18nKey="solutionsPage.cta.title" />
        </h2>

        <p className="max-w-[700px] mx-auto text-accent/80">
          <TranslatedText i18nKey="solutionsPage.cta.description" />
        </p>

        <div className={cn('flex justify-center gap-4', isRTL && 'flex-row-reverse')}>
          <LinkButton href={TRIAL_URL} className="btn btn-white btn-xl flex items-center gap-2">
            <TranslatedText i18nKey="solutionsPage.cta.primary" />
            <ArrowIcon />
          </LinkButton>

          <LinkButton href="/contact-us" className="btn btn-white btn-xl">
            <TranslatedText i18nKey="solutionsPage.cta.secondary" />
          </LinkButton>
        </div>
      </section>
    </div>
  );
};

export default SolutionsContent;
