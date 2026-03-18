import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const TRIAL_URL = 'https://sumu-frontend.vercel.app/';

const ProductCTA = ({ service }: { service: IService }) => {
  return (
    <section className="main-container mt-20 md:mt-28 lg:mt-[100px]">
      {/* User review */}
      {service.userReview && (
        <RevealAnimation delay={0.2}>
          <div className="rounded-[24px] bg-gradient-to-br from-secondary to-secondary/90 dark:from-accent dark:to-accent/90 p-8 md:p-10 space-y-6 shadow-lg mb-12 md:mb-16">
            <div className="flex items-start gap-4">
              <figure className="size-14 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white/20">
                <Image
                  src={service.userReview.image}
                  alt={service.userReview.name}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
              </figure>
              <div>
                <p className="text-base font-semibold text-white">{service.userReview.name}</p>
                <p className="text-sm text-white/70">{service.userReview.userRole}</p>
              </div>
            </div>
            <blockquote>
              <p className="text-white text-lg leading-relaxed">&ldquo;{service.userReview.reviewContent}&rdquo;</p>
            </blockquote>
          </div>
        </RevealAnimation>
      )}

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
