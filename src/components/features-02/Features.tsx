{
  /* =========================
Feature v1 section
===========================*/
}
import cardOneImgDark from '@public/images/home-page-9/feature-card-img-01-dark.png';
import cardOneImg from '@public/images/home-page-9/feature-card-img-01.png';
import cardTwoImgDark from '@public/images/home-page-9/feature-card-img-02-dark.png';
import cardTwoImg from '@public/images/home-page-9/feature-card-img-02.png';
import cardThreeImgDark from '@public/images/home-page-9/feature-card-img-03-dark.png';
import cardThreeImg from '@public/images/home-page-9/feature-card-img-03.png';
import cardFourImgDark from '@public/images/home-page-9/feature-card-img-04-dark.png';
import cardFourImg from '@public/images/home-page-9/feature-card-img-04.png';
import cardFiveImgDark from '@public/images/home-page-9/feature-card-img-05-dark.png';
import cardFiveImg from '@public/images/home-page-9/feature-card-img-05.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const Features = () => {
  return (
    <section className="pb-[200px] pt-[100px]" aria-label="Features">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* feature heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[814px] mx-auto">A unified ecosystem built for modern businesses</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[734px] mx-auto">
                Sumu goes beyond traditional accounting and payment tools by combining automation, compliance,
                analytics, and integrations in one platform designed for real business growth.
              </p>
            </RevealAnimation>
          </div>
          {/* feature cards  */}
          {/* 1st row cards  */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-8 sm:gap-x-8">
            {/* card one  */}

            <RevealAnimation delay={0.5}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardOneImg}
                      alt="Invoice and VAT automation feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardOneImgDark}
                      alt="Invoice and VAT automation feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Invoice and VAT automation</h3>
                  <p>Create invoices and automate VAT with ease.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card two  */}
            <RevealAnimation delay={0.6}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardTwoImg}
                      alt="Payments management feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardTwoImgDark}
                      alt="Payments management feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Effortless payment management</h3>
                  <p>Accept and manage payments from one place.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card three  */}
            <RevealAnimation delay={0.7}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardThreeImg}
                      alt="Compliance and regulation feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardThreeImgDark}
                      alt="Compliance and regulation feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Regional compliance by design</h3>
                  <p>Stay aligned with tax and regulatory frameworks.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {/* 2nd row cards  */}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-8 sm:gap-x-8">
            {/* card four  */}
            <RevealAnimation delay={0.8}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardFourImg}
                      alt="Cash flow tracking feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFourImgDark}
                      alt="Cash flow tracking feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Real-time operational control</h3>
                  <p>Track expenses, payroll, and cash flow in real time.</p>
                </div>
              </div>
            </RevealAnimation>
            {/* card five  */}
            <RevealAnimation delay={0.9}>
              <div className="space-y-3">
                {/* card img  */}
                <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-5 p-2.5">
                  <figure className="overflow-hidden p-4 bg-background-3 dark:bg-background-7 rounded-2xl">
                    <Image
                      src={cardFiveImg}
                      alt="Analytics and API feature"
                      className="w-full h-full object-cover dark:hidden"
                      loading="lazy"
                    />
                    <Image
                      src={cardFiveImgDark}
                      alt="Analytics and API feature"
                      className="w-full h-full object-cover hidden dark:block"
                      loading="lazy"
                    />
                  </figure>
                </div>
                {/* card content  */}
                <div className="space-y-1">
                  <h3 className="text-heading-5">Analytics and secure APIs</h3>
                  <p>Unlock insights and connect with partners, banks, and platforms.</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
Features.displayName = 'Features';
export default Features;
