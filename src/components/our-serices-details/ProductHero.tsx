import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const TRIAL_URL = 'https://sumu-frontend.vercel.app/';

const ProductHero = ({ service }: { service: IService }) => {
  return (
    <div className="main-container">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Left: text */}
        <div className="space-y-6 lg:space-y-8">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-primary-light inline-block">{service.title}</span>
          </RevealAnimation>

          {service.heroSubtitle && (
            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 text-primary-500 uppercase tracking-wider">
                {service.heroTitle || service.title}
              </p>
            </RevealAnimation>
          )}

          <RevealAnimation delay={0.35}>
            <h2 className="text-heading-2 md:text-heading-1 text-balance">{service.heroSubtitle}</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.45}>
            <p className="text-body-text text-secondary/70 dark:text-accent/70 leading-relaxed max-w-[560px]">
              {service.heroDescription || service.description}
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton
                href={TRIAL_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg w-full sm:w-auto hover:btn-secondary dark:hover:btn-accent">
                Start Free Trial
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        {/* Right: cover image */}
        <RevealAnimation delay={0.4} direction="left">
          <div className="relative rounded-[24px] overflow-hidden border border-stroke-1 dark:border-stroke-5 bg-background-2 dark:bg-background-6 shadow-lg">
            {service.coverImg ? (
              <Image
                src={service.coverImg}
                alt={service.heroTitle || service.title}
                width={960}
                height={640}
                className="w-full h-auto object-cover"
                priority
              />
            ) : (
              <div className="aspect-[4/3] flex items-center justify-center">
                <span className={`${service.icon} text-[120px] text-primary-500/20`} />
              </div>
            )}
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

ProductHero.displayName = 'ProductHero';
export default ProductHero;
