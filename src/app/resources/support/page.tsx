import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import { Metadata } from 'next';
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

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6 space-y-3 max-w-[830px]">
                <RevealAnimation delay={0.2}>
                  <h4>Help Center topics</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <ul className="space-y-2">
                    {[
                      'platform setup and configuration',
                      'invoicing and payment tracking',
                      'expense management',
                      'accounting and financial reports',
                      'troubleshooting common issues',
                    ].map((text) => (
                      <li
                        key={text}
                        className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary dark:before:bg-accent before:rounded-full before:left-0 before:-translate-y-1/2 before:mr-1 before:inline-block">
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </RevealAnimation>
              </div>

              <div className="col-span-12 lg:col-span-6 space-y-3 max-w-[830px]">
                <RevealAnimation delay={0.2}>
                  <h4>Documentation includes</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <ul className="space-y-2">
                    {[
                      'invoicing and billing processes',
                      'payment recording and tracking',
                      'expense management',
                      'accounting tools and journal entries',
                      'financial reporting features',
                    ].map((text) => (
                      <li
                        key={text}
                        className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary dark:before:bg-accent before:rounded-full before:left-0 before:-translate-y-1/2 before:mr-1 before:inline-block">
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default SupportResourcesPage;
