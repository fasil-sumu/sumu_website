import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export interface PricingPlan {
  name: string;
  tagline: string;
  description: string;
  price: string;
  currency: string;
  period: string;
  startsFrom?: string;
  isFeatured?: boolean;
  features: string[];
}

const PricingCard = ({ plan, delay }: { plan: PricingPlan; delay: number }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const isFree = plan.price === '0';

  return (
    <RevealAnimation delay={delay}>
      <div className={cn('col-span-12 lg:col-span-4', plan.isFeatured && 'lg:scale-105 lg:-mt-4 lg:mb-4 z-10')}>
        <div
          className={cn(
            'max-w-[604px] w-full lg:mx-0 mx-auto relative py-10 px-8 rounded-[20px] transition-all duration-300',
            plan.isFeatured ? 'bg-white dark:bg-white/95  overflow-hidden' : 'bg-white dark:bg-background-6/50   ',
          )}>
          {plan.isFeatured && (
            <>
              <div className="pointer-events-none select-none absolute inset-0 overflow-hidden rounded-[20px]">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500 opacity-20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-500 opacity-15 blur-3xl" />
              </div>
              <span
                className={cn(
                  'absolute z-30 top-4 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-green-400 to-cyan-400 shadow-lg',
                  isRTL ? 'left-4' : 'right-4',
                )}>
                {t('homepage08.pricing.save40')}
              </span>
            </>
          )}

          {/* Plan Name */}
          <div className="space-y-2 mb-6 relative z-10">
            <h4
              className={cn(
                'text-2xl font-bold',
                plan.isFeatured ? 'text-secondary' : 'text-secondary/80 dark:text-accent/80',
              )}>
              {plan.name}
            </h4>
            <p
              className={cn(
                'text-sm font-normal min-h-[40px]',
                plan.isFeatured ? 'text-secondary/70' : 'text-secondary/60 dark:text-accent/60',
              )}>
              {plan.tagline}
            </p>
          </div>

          {/* Price */}
          <div className="mb-8 relative z-10">
            {plan.startsFrom && (
              <span
                className={cn(
                  'text-xs block mb-1',
                  plan.isFeatured ? 'text-secondary/60' : 'text-secondary/50 dark:text-accent/50',
                )}>
                {plan.startsFrom}
              </span>
            )}
            <div className={cn('flex items-baseline gap-2', isRTL && 'flex-row-reverse')}>
              <h3
                className={cn(
                  'text-5xl font-bold',
                  plan.isFeatured ? 'text-secondary' : 'text-secondary/70 dark:text-accent/70',
                )}>
                {isFree ? (isRTL ? 'مجاناً' : 'Free') : plan.price}
              </h3>
              {!isFree && (
                <>
                  <span
                    className={cn(
                      'text-lg font-medium',
                      plan.isFeatured ? 'text-secondary/70' : 'text-secondary/60 dark:text-accent/60',
                    )}>
                    {plan.currency}
                  </span>
                  <span
                    className={cn(
                      'text-sm',
                      plan.isFeatured ? 'text-secondary/60' : 'text-secondary/50 dark:text-accent/50',
                    )}>
                    {plan.period}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8 relative z-10">
            <ul className="space-y-3.5">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className={cn(
                      'rounded-full size-5 flex-shrink-0 mt-0.5 flex items-center justify-center',
                      plan.isFeatured ? 'bg-secondary dark:bg-secondary' : 'bg-secondary/20 dark:bg-accent/20',
                    )}>
                    <CheckIcon
                      className={cn(
                        'w-3 h-3',
                        plan.isFeatured ? 'fill-white dark:fill-white' : 'fill-secondary dark:fill-accent',
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      'text-sm font-normal leading-relaxed',
                      plan.isFeatured ? 'text-secondary' : 'text-secondary/70 dark:text-accent/70',
                    )}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="mb-6 relative z-10">
            <p
              className={cn(
                'text-xs italic',
                plan.isFeatured ? 'text-secondary/60' : 'text-secondary/50 dark:text-accent/50',
              )}>
              {plan.description}
            </p>
          </div>

          <div className="mt-8 relative z-10">
            <Link
              href="https://sumu-frontend.vercel.app/signin"
              className={cn(
                'btn-md w-full before:content-none transition-all duration-300',
                plan.isFeatured
                  ? 'btn bg-secondary text-white hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/90 shadow-lg hover:shadow-xl'
                  : 'btn border-2 border-secondary/20 dark:border-accent/20 text-secondary dark:text-accent hover:border-secondary/40 dark:hover:border-accent/40 bg-transparent',
              )}>
              {t('homepage08.pricing.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

PricingCard.displayName = 'PricingCard';
export default PricingCard;
