import { IService } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

const ProductInsights = ({ service }: { service: IService }) => {
  const insights = service.insights;
  if (!insights || insights.length === 0) return null;

  return (
    <section className="mt-20 md:mt-28 lg:mt-[100px]">
      <div className="max-w-[1440px] mx-auto bg-background-1 dark:bg-background-6 rounded-[30px] py-16 md:py-20 lg:py-[88px]">
        <div className="main-container">
          <div className="max-w-[720px] mx-auto text-center space-y-6">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-primary-light inline-block">Insights</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-balance">{service.insightsTitle || 'Real-Time Financial Insights'}</h2>
            </RevealAnimation>
            {service.insightsDescription && (
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">{service.insightsDescription}</p>
              </RevealAnimation>
            )}
          </div>

          <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-3">
            {insights.map((insight, index) => (
              <RevealAnimation key={index} delay={0.3 + index * 0.06}>
                <div className="inline-flex items-center gap-2 rounded-full border border-stroke-1 dark:border-stroke-5 bg-white dark:bg-background-8 px-5 py-2.5 text-sm text-secondary dark:text-accent shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-primary-500 shrink-0" />
                  {insight}
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductInsights.displayName = 'ProductInsights';
export default ProductInsights;
