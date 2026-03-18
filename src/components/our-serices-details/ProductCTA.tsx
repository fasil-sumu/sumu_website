import { IService } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const TRIAL_URL = 'https://sumu-frontend.vercel.app/';

const ProductCTA = ({ service }: { service: IService }) => {
  return (
    <section className="main-container mt-20 md:mt-28 lg:mt-[100px]">
      {/* CTA block */}
      <RevealAnimation delay={0.3}>
        <div className="rounded-[24px] bg-primary-500 px-8 py-14 md:py-20 text-center space-y-6">
          <h2 className="text-white text-balance max-w-[600px] mx-auto">
            {service.ctaTitle || `Get Started with ${service.title}`}
          </h2>
          {service.ctaDescription && (
            <p className="text-white/80 max-w-[520px] mx-auto leading-relaxed">{service.ctaDescription}</p>
          )}
          <LinkButton
            href={TRIAL_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-white btn-lg hover:btn-secondary dark:hover:btn-accent inline-flex">
            Start Your Free Trial
          </LinkButton>
        </div>
      </RevealAnimation>
    </section>
  );
};

ProductCTA.displayName = 'ProductCTA';
export default ProductCTA;
