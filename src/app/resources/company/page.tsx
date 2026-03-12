import RevealAnimation from '@/components/animation/RevealAnimation';
import ResourcePageShell from '@/components/resources/ResourcePageShell';
import LinkButton from '@/components/ui/button/LinkButton';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Company - Resources | Sumu',
  description: 'Learn about Sumu and contact our team.',
};

const CompanyResourcesPage = () => {
  return (
    <ResourcePageShell heading="Company" link="/resources/company">
      <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Company resources">
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
                <h2>About Sumu and how to reach us</h2>
                <p>
                  Learn who we are, why we built Sumu, and how to contact our team for product info, support, setup, and
                  partnerships.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
              {[
                {
                  id: 'company-about',
                  title: 'About Sumu',
                  description: 'Our story, mission, vision, and core values — built for modern businesses.',
                  href: '/resources/about-sumu',
                  icon: 'ns-shape-9',
                },
                {
                  id: 'company-contact',
                  title: 'Contact Us',
                  description: 'Reach our team for product information, technical support, setup, and partnerships.',
                  href: '/resources/contact-us',
                  icon: 'ns-shape-2',
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

            <div className="space-y-3 max-w-[830px]">
              <RevealAnimation delay={0.2}>
                <h4>Contact details</h4>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  Office #2, 1st Floor, Zawamri Building, Opp. Salman Store, Central Salalah-211, Salalah, Dhofar,
                  Sultanate of Oman.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    href="mailto:info@joinsumu.com"
                    className="text-secondary transition-colors hover:text-primary-500 dark:text-accent">
                    info@joinsumu.com
                  </Link>
                  <Link
                    href="tel:+98675008142"
                    className="text-secondary transition-colors hover:text-primary-500 dark:text-accent">
                    Mobile: +986 75008142
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default CompanyResourcesPage;
