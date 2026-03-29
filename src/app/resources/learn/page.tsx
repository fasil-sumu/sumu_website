import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn - Resources | Sumu',
  description: 'Blog, guides & tutorials, and product updates to help you get more value from Sumu.',
};

const LearnResourcesPage = () => {
  return (
    <ResourcePageShell heading="Learn" link="/resources/learn">
      <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Learn resources">
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
                <h2>Insights, guidance, and what’s new</h2>
                <p>
                  Explore practical business insights, step-by-step tutorials, and platform updates designed to help you
                  make confident financial decisions.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
              {[
                {
                  id: 'learn-blog',
                  title: 'Blog',
                  description:
                    'Practical insights on financial management, invoicing, accounting, and business operations.',
                  href: '/resources/blog',
                  icon: 'ns-shape-8',
                },
                {
                  id: 'learn-guides',
                  title: 'Guides & Tutorials',
                  description:
                    'Step-by-step instructions to help users understand the platform and manage workflows efficiently.',
                  href: '/resources/guides-tutorials',
                  icon: 'ns-shape-14',
                },
                {
                  id: 'learn-updates',
                  title: 'Product Updates',
                  description: 'Highlights the latest features, improvements, enhancements, and UX upgrades.',
                  href: '/resources/product-updates',
                  icon: 'ns-shape-13',
                },
              ].map((card, index) => (
                <RevealAnimation key={card.id} delay={0.2 + index * 0.1}>
                  <div className="col-span-12 md:col-span-6 xl:col-span-4">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white dark:bg-background-7 p-8 md:p-12 rounded-[24px] border border-stroke-3 dark:border-stroke-6">
              <div className="space-y-6">
                <RevealAnimation delay={0.2}>
                  <h3 className="text-heading-4">Topics include</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <ul className="space-y-4">
                    {[
                      'Financial management best practices',
                      'Managing invoices and payments',
                      'Controlling business expenses',
                      'Understanding financial reports',
                      'Tips for growing businesses',
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
              <RevealAnimation delay={0.4}>
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-stroke-3 dark:border-stroke-6 shadow-sm">
                  <Image src="/img/O9VV3Q0.jpg" alt="Learn topics" fill className="object-cover" />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default LearnResourcesPage;
