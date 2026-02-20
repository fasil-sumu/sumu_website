'use client';

import { CheckIcon } from '@/icons';
import barChartDark from '@public/images/home-page-8/bar-chart-dark.png';
import barChart from '@public/images/home-page-8/bar-chart.png';
import lineChartDark from '@public/images/home-page-8/line-chart-dark.png';
import lineChart from '@public/images/home-page-8/line-chart.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

// Helper function to convert Western numerals to Arabic numerals
const toArabicNumerals = (num: number): string => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().replace(/\d/g, (digit) => arabicDigits[parseInt(digit)]);
};

const FeaturesV2 = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Convert numbers to Arabic numerals when in Arabic language
  const displayNumber = (num: number) => (isRTL ? toArabicNumerals(num) : num.toString());

  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="main-container md:space-y-[70px] space-y-10">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">{t('homepage08.featuresV2.badge')}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[674px] mx-auto">{t('homepage08.featuresV2.title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[578px] mx-auto">{t('homepage08.featuresV2.description')}</p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-8 items-end">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <div className="space-y-4 max-h-[130px]">
                  <p className="text-heading-5 font-normal">{t('homepage08.featuresV2.expense')}</p>
                  <div className="flex items-start justify-between">
                    <ul className="space-y-[3px]">
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>

                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          {t('homepage08.featuresV2.dataIntegration')}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          {t('homepage08.featuresV2.shopping')}
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          {t('homepage08.featuresV2.technologySolutions')}
                        </span>
                      </li>
                    </ul>
                    <div className="xl:block lg:hidden block">
                      <div className="relative">
                        <svg width={90} height={90} viewBox="0 0 90 90">
                          <circle cx={45} cy={45} r={40} stroke="#F0F2F6" strokeWidth={10} fill="none" />
                          <circle
                            cx={45}
                            cy={45}
                            r={40}
                            stroke="#A585FF"
                            strokeWidth={10}
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="251.327"
                            strokeDashoffset="100.531"
                            transform="rotate(-90 45 45)"
                          />
                        </svg>
                        <p className="absolute inset-0 flex items-center justify-center text-heading-6 font-normal text-secondary dark:text-accent">
                          {isRTL ? (
                            <span className="inline-block">{displayNumber(60)}</span>
                          ) : (
                            <NumberAnimation number={60} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                              60
                            </NumberAnimation>
                          )}
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">
                    {t('homepage08.featuresV2.manageProject')}
                  </h3>
                  <p className="line-clamp-3">{t('homepage08.featuresV2.manageDescription')}</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <figure className="max-w-[344px] min-h-[130px] mx-auto">
                  <Image src={barChart} alt="data process chart" className="block dark:hidden" />
                  <Image src={barChartDark} alt="data process chart" className="hidden dark:block" />
                </figure>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">
                    {t('homepage08.featuresV2.streamlinedData')}
                  </h3>
                  <p className="line-clamp-3">{t('homepage08.featuresV2.streamlinedDescription')}</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <figure className="max-w-[344px] min-h-[130px] mx-auto">
                  <Image src={lineChart} alt="data process chart" className="block dark:hidden" />
                  <Image src={lineChartDark} alt="data process chart" className="hidden dark:block" />
                </figure>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">
                    {t('homepage08.featuresV2.realTimeAnalytics')}
                  </h3>
                  <p className="line-clamp-3">{t('homepage08.featuresV2.analyticsDescription')}</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesV2;
