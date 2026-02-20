'use client';

import { useTranslation } from 'react-i18next';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard, { PricingPlan } from './PricingCard';

const Pricing = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const pricingPlans: PricingPlan[] = [
    {
      name: t('homepage08.pricing.starter.name'),
      tagline: t('homepage08.pricing.starter.tagline'),
      description: t('homepage08.pricing.starter.description'),
      price: t('homepage08.pricing.starter.price'),
      currency: t('homepage08.pricing.starter.currency'),
      period: t('homepage08.pricing.starter.period'),
      isFeatured: false,
      features: t('homepage08.pricing.starter.features', { returnObjects: true }) as string[],
    },
    {
      name: t('homepage08.pricing.growth.name'),
      tagline: t('homepage08.pricing.growth.tagline'),
      description: t('homepage08.pricing.growth.description'),
      price: t('homepage08.pricing.growth.price'),
      currency: t('homepage08.pricing.growth.currency'),
      period: t('homepage08.pricing.growth.period'),
      startsFrom: t('homepage08.pricing.growth.startsFrom'),
      isFeatured: true,
      features: t('homepage08.pricing.growth.features', { returnObjects: true }) as string[],
    },
    {
      name: t('homepage08.pricing.enterprise.name'),
      tagline: t('homepage08.pricing.enterprise.tagline'),
      description: t('homepage08.pricing.enterprise.description'),
      price: t('homepage08.pricing.enterprise.price'),
      currency: t('homepage08.pricing.enterprise.currency'),
      period: t('homepage08.pricing.enterprise.period'),
      startsFrom: t('homepage08.pricing.enterprise.startsFrom'),
      isFeatured: false,
      features: t('homepage08.pricing.enterprise.features', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="xl:py-[100px] md:py-20 py-10" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="main-container">
        <div className="text-center space-y-4 max-w-[720px] mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">{t('homepage08.pricing.title')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold">{t('homepage08.pricing.subtitle')}</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-8 items-stretch justify-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} delay={0.3 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
