'use client';

import heroPatternDark from '@public/images/home-page-8/hero-pattern-dark.png';
import heroPattern from '@public/images/home-page-8/hero-pattern.png';
import dashboard from '@public/img/dashboard1.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  const { t } = useTranslation();
  const title = t('hero.title').replace(/\\n/g, '\n');

  return (
    <section className="relative xl:pt-[230px] xl:pb-[100px] pt-[170px] pb-20 ">
      {/* hero bg  */}
      <RevealAnimation delay={0.1} offset={0}>
        <figure className="h-[765px] w-full top-[13%] md:top-[11%] lg:top-[10%] xl:top-[13%] lp:!top-[15%] left-0  absolute dark:hidden max-w-[2560px]">
          <Image src={heroPattern} alt="hero" className="w-full h-full " />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2} offset={0}>
        <figure className="h-[765px] w-full top-[15%] left-0 absolute dark:block hidden">
          <Image src={heroPatternDark} alt="hero" className="w-full h-full" />
        </figure>
      </RevealAnimation>

      <div className="main-container mb-[70px]">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">{t('hero.badge', 'Keep an eye on your finances')}</span>
          </RevealAnimation>
          <div className={`max-w-[822px] mt-5 mb-14 space-y-4 w-full mx-auto text-center `}>
            <RevealAnimation delay={0.2}>
              <h1 style={{ whiteSpace: 'pre-line' }} className="">
                {title}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-xl mx-auto">{t('hero.subtitle')}</p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="w-full text-center">
              <LinkButton
                href="https://sumu-frontend.vercel.app/signin"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl w-[90%] md:w-auto">
                {t('hero.cta')}
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      {/* Dashboard image */}
      <div className="lp:max-w-[1416px] xl:max-w-[1280px] lg:max-w-[1140px] max-w-[980px] mx-auto px-4">
        <RevealAnimation delay={1} offset={100} instant>
          <figure className="rounded-[20px] overflow-hidden w-full">
            <Image src={dashboard} alt="dashboard" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
