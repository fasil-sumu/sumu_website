'use client';

import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import LinkButton from '../ui/button/LinkButton';

export interface ProductDetailsStep {
  heading: string;
  body: string;
}

const ProductDetailsProcess = ({ title, steps }: { title: string; steps: ProductDetailsStep[] }) => {
  const TRIAL_URL = 'https://sumu-frontend.vercel.app/';

  const isTrialCta = (value: unknown) => {
    const text = typeof value === 'string' ? value : '';
    const normalized = text.trim().toLowerCase();
    return (
      normalized === 'start your free trial' ||
      normalized === 'start free trial' ||
      normalized === 'start your free trial.' ||
      normalized === 'start free trial.'
    );
  };

  const { ref } = useProgressStepsAnimation({
    delay: 0.4,
    duration: 1.6,
    delayBetweenSteps: 0.6,
    triggerOnScroll: true,
  });

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-14">
        <div className="space-y-5 text-center mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge inline-block badge-primary-light">Everything included</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[560px] mx-auto">Everything you get with {title}</h2>
          </RevealAnimation>
        </div>

        <div
          ref={ref}
          className="flex flex-col md:flex-row md:flex-wrap items-center justify-center md:items-start gap-y-10 gap-x-14">
          {steps.map((step, index) => {
            const stepNo = String(index + 1).padStart(2, '0');
            return (
              <RevealAnimation key={`${step.heading}-${index}`} delay={0.35 + index * 0.05}>
                <div className="space-y-3 max-w-[420px] w-full text-center md:text-left">
                  <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative">
                    <div className="progress-line w-0 bg-ns-cyan rounded-full h-full absolute left-0" />
                  </div>
                  <p className="text-tagline-2 text-primary-500">{stepNo}</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{step.heading}</h3>
                    <div className="text-secondary/70 dark:text-accent/70">
                      <ReactMarkdown
                        rehypePlugins={[[rehypeSlug]]}
                        components={{
                          p: ({ node, children, ...props }) => {
                            void node;
                            const content = Array.isArray(children) && children.length === 1 ? children[0] : null;
                            if (isTrialCta(content)) {
                              return (
                                <LinkButton
                                  href={TRIAL_URL}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="btn btn-white btn-md hover:btn-secondary dark:btn-transparent dark:hover:btn-accent mt-4 w-full sm:w-auto mx-auto md:mx-0">
                                  Start Your Free Trial
                                </LinkButton>
                              );
                            }
                            return (
                              <p className="leading-relaxed" {...props}>
                                {children}
                              </p>
                            );
                          },
                          ul: ({ node, ...props }) => {
                            void node;
                            return (
                              <ul
                                className="mt-3 space-y-2 list-disc list-inside text-left md:text-left inline-block md:block"
                                {...props}
                              />
                            );
                          },
                          li: ({ node, ...props }) => {
                            void node;
                            return <li {...props} />;
                          },
                          strong: ({ node, ...props }) => {
                            void node;
                            return <span className="font-semibold text-secondary dark:text-accent" {...props} />;
                          },
                        }}>
                        {step.body}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ProductDetailsProcess.displayName = 'ProductDetailsProcess';
export default ProductDetailsProcess;
