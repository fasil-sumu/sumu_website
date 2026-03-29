import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support - Resources | Sumu',
  description: 'Help Center and documentation to help you find answers and troubleshoot issues.',
};

const SupportResourcesPage = () => {
  return (
    <ResourcePageShell heading="Support" link="/resources/support">
      <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Support resources">
        <div className="main-container">
          <div className="space-y-14 md:space-y-[70px]">
            <div>
              <Link
                href="/resources"
                className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent inline-flex items-center gap-2 transition-colors">
                <span aria-hidden>←</span>
                Back to Resources
              </Link>
            </div>

            <RevealAnimation delay={0.1}>
              <div className="md:text-center max-w-[602px] space-y-1.5 md:space-y-3 mx-auto">
                <h2>Find answers and get help fast</h2>
                <p>Get guidance on using Sumu, troubleshoot common issues, and understand key workflows clearly.</p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
              {[
                {
                  id: 'support-help-center',
                  title: 'Help Center',
                  description: 'Detailed answers to common questions and guidance on using the platform.',
                  href: '/resources/help-center',
                  icon: 'ns-shape-15',
                },
                {
                  id: 'support-documentation',
                  title: 'Documentation',
                  description: 'Structured reference for modules, workflows, accounting tools, and reports.',
                  href: '/resources/documentation',
                  icon: 'ns-shape-11',
                },
              ].map((card, index) => (
                <RevealAnimation key={card.id} delay={0.2 + index * 0.1}>
                  <div className="col-span-12 md:col-span-6">
                    <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out min-h-[320px]">
                      <div className="flex items-center justify-center">
                        <span className={`${card.icon} text-[52px] text-secondary dark:text-accent`} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-heading-5">{card.title}</h3>
                        <p className="max-w-[361px] mx-auto line-clamp-3">{card.description}</p>
                      </div>
                      <div>
                        <LinkButton
                          href={card.href}
                          className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                          Read more
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white dark:bg-background-7 p-8 md:p-12 rounded-[24px] border border-stroke-3 dark:border-stroke-6 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <RevealAnimation delay={0.2}>
                    <h3 className="text-heading-4">Help Center topics</h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <ul className="space-y-4">
                      {[
                        'Platform setup and configuration',
                        'Invoicing and payment tracking',
                        'Expense management',
                        'Accounting and financial reports',
                        'Troubleshooting common issues',
                      ].map((text) => (
                        <li
                          key={text}
                          className="flex items-center gap-4 text-tagline-1 text-secondary/80 dark:text-accent/80 font-medium">
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-primary" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                </div>

                <div className="space-y-6">
                  <RevealAnimation delay={0.4}>
                    <h3 className="text-heading-4">Documentation includes</h3>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <ul className="space-y-4">
                      {[
                        'Invoicing and billing processes',
                        'Payment recording and tracking',
                        'Expense management',
                        'Accounting tools and journal entries',
                        'Financial reporting features',
                      ].map((text) => (
                        <li
                          key={text}
                          className="flex items-center gap-4 text-tagline-1 text-secondary/80 dark:text-accent/80 font-medium">
                          <span className="flex-shrink-0 w-3 h-3 rounded-full bg-primary" />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.6}>
                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[16px] overflow-hidden border border-stroke-3 dark:border-stroke-6 shadow-sm">
                  <Image
                    src="/img/invoice-billing-information-form-graphic-concept.jpg"
                    alt="Support resources"
                    fill
                    className="object-cover"
                  />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default SupportResourcesPage;
