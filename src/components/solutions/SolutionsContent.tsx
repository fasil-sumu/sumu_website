'use client';

import Image from 'next/image';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/hooks/useLanguage';
import TranslatedText from '../shared/TranslatedText';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

// Reference images
import netSalesDark from '@public/images/services/net-sales-dark.svg';
import netSales from '@public/images/services/net-sales.svg';
import revenueDark from '@public/images/services/revenue-dark.svg';
import revenue from '@public/images/services/revenue.svg';
import userActivityDark from '@public/images/services/user-activity-dark.svg';
import userActivity from '@public/images/services/user-activity.svg';

const TRIAL_URL = 'https://sumu-frontend.vercel.app/';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={cn('size-4', className)}>
    <path d="M8 12L12 8L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SolutionsContent = () => {
  const { isRTL } = useLanguage();

  // Section 1: Small Businesses
  const Section1 = () => (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] overflow-hidden">
      <div className="main-container bg-background-3 dark:bg-background-5 rounded-[20px] p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-6 space-y-8 lg:text-start text-center">
            <div>
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2 mb-5">
                  <TranslatedText i18nKey="solutionsPage.items.smallBusinesses.title" />
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-2 mb-4">
                  <TranslatedText i18nKey="solutionsPage.details.smallBusinesses.heading" />
                </h2>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <div className="space-y-4 text-secondary/70 text-lg">
                <p>
                  <TranslatedText i18nKey="solutionsPage.details.smallBusinesses.p1" />
                </p>
                <p>
                  <TranslatedText i18nKey="solutionsPage.details.smallBusinesses.p2" />
                </p>
                <p>
                  <TranslatedText i18nKey="solutionsPage.details.smallBusinesses.p3" />
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="text-start">
                <p className="text-sm font-semibold text-secondary mb-3">
                  <TranslatedText i18nKey="solutionsPage.keyBenefits" />
                </p>
                <div className="flex flex-wrap gap-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-background-6 rounded-full shadow-sm border border-stroke-1">
                      <div className="size-5 rounded-full bg-primary flex items-center justify-center text-white text-xs flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-sm text-secondary">
                        <TranslatedText i18nKey={`solutionsPage.details.smallBusinesses.benefits.b${i + 1}`} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="flex lg:justify-start justify-center">
                <LinkButton href={TRIAL_URL} className="btn btn-primary btn-xl flex items-center gap-2 w-fit group">
                  <TranslatedText i18nKey="solutionsPage.cta.primary" />
                  <ArrowIcon className={cn('group-hover:translate-x-1 transition-transform', isRTL && 'rotate-180')} />
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Image Layout based on Solutions reference */}
          <div className="col-span-12 lg:col-span-6 relative z-10 xl:mt-0 mt-20">
            <div className="max-w-[595px] lg:mx-0 mx-auto w-full relative z-20">
              <RevealAnimation delay={0.3}>
                <figure className="xl:max-w-[408px] max-w-[340px] w-full rounded-[20px] overflow-hidden xl:ml-9 relative z-10">
                  <Image src={revenue} className="size-full object-cover inline-block dark:hidden" alt="solutions" />
                  <Image
                    src={revenueDark}
                    className="size-full object-cover hidden dark:inline-block"
                    alt="solutions"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} useSpring={true} duration={1.9} direction="right">
                <figure className="absolute xl:-top-28 -top-20 -z-10 xl:right-0 right-6 xl:max-w-[227px] max-w-[190px] w-full overflow-hidden rounded-2xl drop-shadow-11">
                  <Image src={netSales} className="size-full object-cover inline-block dark:hidden" alt="solutions" />
                  <Image
                    src={netSalesDark}
                    className="size-full object-cover hidden dark:inline-block"
                    alt="solutions"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Section 2: Freelancers
  const Section2 = () => {
    const benefitNumbers = ['01', '02', '03', '04', '05', '06'];

    return (
      <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
        <div className="main-container">
          {/* Header */}
          <div className="text-center mb-[70px] space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2">
                <TranslatedText i18nKey="solutionsPage.items.freelancers.title" />
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[878px] mx-auto text-heading-2">
                  <TranslatedText i18nKey="solutionsPage.details.freelancers.heading" />
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="max-w-2xl mx-auto space-y-3 text-secondary/70">
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.freelancers.p1" />
                  </p>
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.freelancers.p2" />
                  </p>
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.freelancers.p3" />
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
            {benefitNumbers.map((num, idx) => (
              <RevealAnimation key={idx} delay={0.4 + idx * 0.1}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                  <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:-translate-y-[10px] transition-transform duration-500 ease-in-out h-full border border-stroke-1 hover:border-primary/30">
                    <div className="flex items-center justify-center">
                      <div className="size-16 rounded-[20px] bg-white dark:bg-background-8 flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                        {num}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-secondary md:text-base font-medium">
                        <TranslatedText i18nKey={`solutionsPage.details.freelancers.benefits.b${idx + 1}`} />
                      </p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <RevealAnimation delay={0.8}>
              <LinkButton
                href={TRIAL_URL}
                className="btn btn-secondary hover:btn-primary btn-xl flex items-center gap-2 group">
                <TranslatedText i18nKey="solutionsPage.cta.primary" />
                <ArrowIcon className={cn('group-hover:translate-x-1 transition-transform', isRTL && 'rotate-180')} />
              </LinkButton>
            </RevealAnimation>
          </div>
        </div>
      </section>
    );
  };

  // Section 3: Accountants
  const Section3 = () => {
    const features = [
      { icon: '📊', key: 'b1' },
      { icon: '🔒', key: 'b2' },
      { icon: '⚡', key: 'b3' },
      { icon: '🎯', key: 'b4' },
      { icon: '📋', key: 'b5' },
    ];

    return (
      <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] overflow-hidden">
        <div className="main-container bg-background-3 dark:bg-background-5 rounded-[20px] p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-12 gap-y-16 lg:gap-16 items-center">
            {/* Left Image Reference Layout */}
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 relative z-10 w-full pt-16 lg:pt-0">
              <div className="max-w-[595px] lg:mx-0 mx-auto w-full relative z-20">
                <RevealAnimation delay={0.2} direction="left">
                  <figure className="xl:max-w-[408px] max-w-[340px] w-full rounded-[20px] overflow-hidden relative z-10 shadow-2xl">
                    <Image
                      src={userActivity}
                      className="size-full object-cover inline-block dark:hidden"
                      alt="solutions"
                    />
                    <Image
                      src={userActivityDark}
                      className="size-full object-cover hidden dark:inline-block"
                      alt="solutions"
                    />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.3} direction="right" useSpring={true} duration={1.5}>
                  <figure className="absolute -bottom-16 -right-6 md:-right-10 xl:-right-12 z-20 xl:max-w-[227px] max-w-[190px] w-full overflow-hidden rounded-2xl drop-shadow-11 border-4 border-white dark:border-background-6 shadow-xl relative">
                    <Image
                      src="/images/services/earning.png"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover inline-block dark:hidden"
                      alt="earning"
                    />
                    <Image
                      src="/images/services/earning-dark.png"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover hidden dark:inline-block"
                      alt="earning dark"
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-span-12 lg:col-span-6 space-y-8 order-1 lg:order-2 lg:text-start text-center">
              <div>
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-yellow-v2 mb-5">
                    <TranslatedText i18nKey="solutionsPage.items.accountants.title" />
                  </span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className="text-heading-2 mb-4">
                    <TranslatedText i18nKey="solutionsPage.details.accountants.heading" />
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="space-y-3 text-secondary/70">
                    <p>
                      <TranslatedText i18nKey="solutionsPage.details.accountants.p1" />
                    </p>
                    <p>
                      <TranslatedText i18nKey="solutionsPage.details.accountants.p2" />
                    </p>
                    <p>
                      <TranslatedText i18nKey="solutionsPage.details.accountants.p3" />
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.4}>
                <div className="text-start">
                  <p className="text-sm font-semibold text-secondary mb-4">
                    <TranslatedText i18nKey="solutionsPage.keyBenefits" />
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white dark:bg-background-6 rounded-[16px] border border-stroke-1 hover:-translate-y-1 transition duration-300">
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <p className="text-sm text-secondary font-medium">
                          <TranslatedText i18nKey={`solutionsPage.details.accountants.benefits.${feature.key}`} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Section 4: Growing Businesses
  const Section4 = () => {
    const benefits = [{ key: 'b1' }, { key: 'b2' }, { key: 'b3' }, { key: 'b4' }, { key: 'b5' }];

    return (
      <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
        <div className="main-container">
          <div className="bg-gradient-to-br from-secondary to-[#1A1A1A] rounded-[20px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Left */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-yellow-v2 mb-6">
                  <TranslatedText i18nKey="solutionsPage.items.growingBusinesses.title" />
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h3 className="text-heading-2 mb-6 text-white">
                  <TranslatedText i18nKey="solutionsPage.details.growingBusinesses.heading" />
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <div className="space-y-4 text-white/80">
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.growingBusinesses.p1" />
                  </p>
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.growingBusinesses.p2" />
                  </p>
                  <p>
                    <TranslatedText i18nKey="solutionsPage.details.growingBusinesses.p3" />
                  </p>
                </div>
              </RevealAnimation>
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/2 bg-white dark:bg-background-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <RevealAnimation delay={0.2}>
                <h3 className="text-heading-5 mb-8">
                  <TranslatedText i18nKey="solutionsPage.keyBenefits" />
                </h3>
              </RevealAnimation>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <RevealAnimation key={i} delay={0.3 + i * 0.1}>
                    <div className="flex items-center gap-4 group cursor-default">
                      <div className="size-10 rounded-full bg-background-3 dark:bg-background-8 flex items-center justify-center text-secondary dark:text-accent font-semibold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {i + 1}
                      </div>
                      <span className="text-secondary dark:text-accent font-medium">
                        <TranslatedText i18nKey={`solutionsPage.details.growingBusinesses.benefits.${benefit.key}`} />
                      </span>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              <RevealAnimation delay={0.8}>
                <div className="mt-10">
                  <LinkButton
                    href={TRIAL_URL}
                    className="btn btn-secondary hover:btn-primary btn-xl flex items-center gap-2 justify-center group w-fit">
                    <TranslatedText i18nKey="solutionsPage.cta.primary" />
                    <ArrowIcon
                      className={cn('group-hover:translate-x-1 transition-transform', isRTL && 'rotate-180')}
                    />
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-14 md:py-28 lg:py-[120px] text-center">
        <div className="main-container">
          <div className="space-y-6 max-w-[900px] mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2 inline-block">
                <TranslatedText i18nKey="solutionsPage.overview.badge" />
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-2 md:text-heading-1">
                <TranslatedText i18nKey="solutionsPage.overview.title" />
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-[700px] mx-auto text-secondary/70 text-lg">
                <TranslatedText i18nKey="solutionsPage.overview.description" />
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className={cn('flex flex-wrap justify-center gap-4 mt-8', isRTL && 'flex-row-reverse')}>
                <LinkButton href={TRIAL_URL} className="btn btn-primary btn-xl flex items-center gap-2 group">
                  <TranslatedText i18nKey="solutionsPage.cta.primary" />
                  <ArrowIcon
                    className={cn(isRTL ? 'rotate-180' : '', 'group-hover:translate-x-1 transition-transform')}
                  />
                </LinkButton>

                <LinkButton
                  href={TRIAL_URL}
                  className="btn btn-transparent hover:bg-stroke-1 dark:hover:bg-background-6 btn-xl outline outline-1 outline-stroke-1 text-secondary dark:text-white">
                  <TranslatedText i18nKey="solutionsPage.cta.secondary" />
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Sections */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      {/* Final CTA */}
      <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
        <div className="main-container">
          <div className="relative overflow-hidden rounded-[20px] bg-background-3 dark:bg-background-5 p-12 text-center text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-2 mb-6">
                <TranslatedText i18nKey="solutionsPage.cta.title" />
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="max-w-[700px] mx-auto text-secondary/80 dark:text-accent/80 text-lg mb-8">
                <TranslatedText i18nKey="solutionsPage.cta.description" />
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className={cn('flex flex-wrap justify-center gap-4', isRTL && 'flex-row-reverse')}>
                <LinkButton
                  href={TRIAL_URL}
                  className="btn btn-secondary hover:btn-primary btn-xl flex items-center gap-2 group">
                  <TranslatedText i18nKey="solutionsPage.cta.primary" />
                  <ArrowIcon className={cn('group-hover:translate-x-1 transition-transform', isRTL && 'rotate-180')} />
                </LinkButton>

                <LinkButton
                  href={TRIAL_URL}
                  className="btn btn-transparent hover:bg-stroke-1 dark:hover:bg-background-6 btn-xl outline outline-1 outline-stroke-1 text-secondary dark:text-white">
                  <TranslatedText i18nKey="solutionsPage.cta.secondary" />
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsContent;
