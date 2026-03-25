import { IService } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import TranslatedText from '../shared/TranslatedText';

const ProductFeatures = ({ service }: { service: IService }) => {
  const features = service.features;
  if (!features || features.length === 0) return null;

  return (
    <section id="features" className="main-container mt-20 md:mt-28 lg:mt-[100px]">
      {/* Section header */}
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <RevealAnimation delay={0.2}>
          <span className="badge badge-primary-light inline-block">
            <TranslatedText i18nKey="productDetails.badges.features" defaultText="Features" />
          </span>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <h2 className="max-w-[640px] mx-auto">
            {service.featuresTitle ? (
              <TranslatedText
                i18nKey={`serviceDetails.${service.slug}.featuresTitle`}
                defaultText={service.featuresTitle}
              />
            ) : (
              <TranslatedText
                i18nKey="productDetails.defaults.featuresTitle"
                defaultText={`Everything You Need to Manage ${service.title}`}
                values={{ product: service.title }}
              />
            )}
          </h2>
        </RevealAnimation>
        {service.featuresDescription && (
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/70 dark:text-accent/70 max-w-[560px] mx-auto">
              <TranslatedText
                i18nKey={`serviceDetails.${service.slug}.featuresDescription`}
                defaultText={service.featuresDescription}
              />
            </p>
          </RevealAnimation>
        )}
      </div>

      {/* Features grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <RevealAnimation key={index} delay={0.2 + index * 0.07}>
            <div className="rounded-[20px] border border-stroke-1 dark:border-stroke-5 bg-white dark:bg-background-8 p-7 space-y-3 h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary-500">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-heading-6 text-secondary dark:text-accent">
                <TranslatedText
                  i18nKey={`serviceDetails.${service.slug}.features.${index}.title`}
                  defaultText={feature.title}
                />
              </h3>
              <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">
                <TranslatedText
                  i18nKey={`serviceDetails.${service.slug}.features.${index}.description`}
                  defaultText={feature.description}
                />
              </p>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

ProductFeatures.displayName = 'ProductFeatures';
export default ProductFeatures;
