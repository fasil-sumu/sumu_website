'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';
import SkeletonImage from '../ui/SkeletonImage';

export interface ProductOfferCard {
  id: string;
  icon?: string;
  title: string;
  description: string;
}

const ProductDetailsWhatWeOffer = ({
  heading,
  description,
  ctaHref,
  ctaLabel,
  cards,
  coverImg,
}: {
  heading: string;
  description: string;
  ctaHref: string;
  ctaLabel: string;
  cards: ProductOfferCard[];
  coverImg?: string;
}) => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px]">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] bg-background-3 dark:bg-background-7 rounded-[30px] py-20 md:py-[100px] mx-auto">
          <div className="main-container">
            <div className="flex flex-col md:flex-row items-start gap-y-24 gap-x-[140px]">
              <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left space-y-7 lg:space-y-14">
                <RevealAnimation delay={0.3}>
                  <span className="badge badge-primary-light mb-5">What we offer</span>
                </RevealAnimation>
                <div className="space-y-2 md:max-w-[595px]">
                  <RevealAnimation delay={0.4}>
                    <h2>{heading}</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <p>{description}</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href={ctaHref}
                      target={ctaHref.startsWith('http') ? '_blank' : undefined}
                      rel={ctaHref.startsWith('http') ? 'noreferrer' : undefined}
                      className="btn btn-white btn-lg lg:btn-xl w-[90%] md:w-auto mx-auto md:mx-0 dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
                      {ctaLabel}
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>

              <StackCardWrapper
                topOffset="15vh"
                gap="24px"
                initDelay={100}
                className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
                {cards.map((card) => (
                  <StackCardItem key={card.id}>
                    <div className="border border-stroke-1/90 dark:border-stroke-5 bg-white dark:bg-background-6 rounded-[20px] space-y-6 p-8 h-full flex flex-col justify-center">
                      {card.icon ? (
                        <span className={`block ${card.icon} text-heading-2 text-secondary dark:text-accent`} />
                      ) : (
                        <span className="block size-10 rounded-full bg-background-3 dark:bg-background-7" />
                      )}
                      <div className="space-y-2">
                        <h3 className="text-heading-5">{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </StackCardItem>
                ))}

                {coverImg && (
                  <StackCardItem key="cover-image">
                    <div className="border border-stroke-1/90 dark:border-stroke-5 bg-white dark:bg-background-6 rounded-[20px] p-4 h-full">
                      <figure className="rounded-[16px] overflow-hidden">
                        <SkeletonImage
                          src={coverImg}
                          alt={heading}
                          width={960}
                          height={520}
                          showDimensions
                          className="w-full h-auto object-cover"
                        />
                      </figure>
                    </div>
                  </StackCardItem>
                )}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

ProductDetailsWhatWeOffer.displayName = 'ProductDetailsWhatWeOffer';
export default ProductDetailsWhatWeOffer;
