'use client';

import { faqData } from '@/data/faq';
import { useTranslation } from 'react-i18next';
import RevealAnimation from '../animation/RevealAnimation';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section
      className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
      dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-3.5 md:mb-5">{t('homepage08.faq.badge')}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>{t('homepage08.faq.title')}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto lg:max-w-[620px]">{t('homepage08.faq.description')}</p>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.4}>
        <div>
          <Accordion
            className="mx-auto w-full max-w-[850px] space-y-4"
            defaultValue="1"
            enableScrollAnimation={true}
            animationDelay={0.1}>
            {faqData.map((item) => (
              <AccordionItem
                className="bg-background-1 dark:bg-background-6 rounded-[20px] px-6 sm:px-8"
                key={item.id}
                value={item.id.toString()}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                  value={item.id.toString()}
                  iconType="arrow">
                  {t(item.question)}
                </AccordionTrigger>
                <AccordionContent value={item.id.toString()}>{t(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </RevealAnimation>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
