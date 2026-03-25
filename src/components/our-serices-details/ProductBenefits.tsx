import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import TranslatedText from '../shared/TranslatedText';

const ProductBenefits = ({ service }: { service: IService }) => {
  const benefits = service.benefits;
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="main-container mt-20 md:mt-28 lg:mt-[100px]">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-stretch">
        {/* Left: cover image */}
        <RevealAnimation delay={0.2} direction="right" className="h-full">
          <div className="relative rounded-[24px] overflow-hidden border border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-6 shadow-sm h-full min-h-[300px]">
            {service.benefitImg || service.coverImg ? (
              <Image
                src={service.benefitImg || service.coverImg}
                alt={service.benefitsTitle || service.title}
                fill
                className="object-contain"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`${service.icon} text-[100px] text-primary-500/20`} />
              </div>
            )}
          </div>
        </RevealAnimation>

        {/* Right: benefits */}
        <div className="space-y-6 lg:space-y-8">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-primary-light inline-block">
              <TranslatedText i18nKey="productDetails.badges.benefits" defaultText="Benefits" />
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="text-balance">
              {service.benefitsTitle ? (
                <TranslatedText
                  i18nKey={`serviceDetails.${service.slug}.benefitsTitle`}
                  defaultText={service.benefitsTitle}
                />
              ) : (
                <TranslatedText i18nKey="productDetails.defaults.benefitsTitle" defaultText="Why Choose Sumu" />
              )}
            </h2>
          </RevealAnimation>
          {service.benefitsDescription && (
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                <TranslatedText
                  i18nKey={`serviceDetails.${service.slug}.benefitsDescription`}
                  defaultText={service.benefitsDescription}
                />
              </p>
            </RevealAnimation>
          )}
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <RevealAnimation key={index} delay={0.35 + index * 0.07}>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-500 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-secondary dark:text-accent leading-relaxed">
                    <TranslatedText
                      i18nKey={`serviceDetails.${service.slug}.benefits.${index}.text`}
                      defaultText={benefit.text}
                    />
                  </span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

ProductBenefits.displayName = 'ProductBenefits';
export default ProductBenefits;
