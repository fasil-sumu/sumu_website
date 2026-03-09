import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const ResourcesContent = () => {
  return (
    <section className="pb-14 pt-6 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Resources content">
      <div className="main-container space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Resources</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[900px]">Learn, get support, and stay updated with Sumu</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[760px]">
              Explore practical business insights, product guidance, and company information in one place.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealAnimation delay={0.5} className="col-span-12 md:col-span-4">
            <div className="rounded-[20px] bg-white p-6 text-center dark:bg-background-6">
              <h3 className="mb-4 text-heading-5">Learn</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog-03"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorial"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Guides &amp; Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Product Updates
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6} className="col-span-12 md:col-span-4">
            <div className="rounded-[20px] bg-white p-6 text-center dark:bg-background-6">
              <h3 className="mb-4 text-heading-5">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/support"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.7} className="col-span-12 md:col-span-4">
            <div className="rounded-[20px] bg-white p-6 text-center dark:bg-background-6">
              <h3 className="mb-4 text-heading-5">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about-03"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    About Sumu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-secondary/70 transition-colors hover:text-secondary dark:text-accent/70 dark:hover:text-accent">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>

        <div className="space-y-10">
          <RevealAnimation delay={0.2}>
            <div className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-5 text-heading-4 text-center md:text-left">Learn</h3>
              <div className="grid grid-cols-12 gap-8">
                <article className="col-span-12 lg:col-span-4 space-y-3">
                  <h4 className="text-heading-6">Blog</h4>
                  <p>Insights for Modern Business Management</p>
                  <p>
                    The Sumu Blog provides practical insights on financial management, invoicing, accounting, and
                    business operations.
                  </p>
                </article>
                <article className="col-span-12 lg:col-span-4 space-y-3">
                  <h4 className="text-heading-6">Guides &amp; Tutorials</h4>
                  <p>Learn How to Use Sumu Effectively</p>
                  <p>
                    Step-by-step tutorials help users manage invoices, payments, expenses, clients, and reports with
                    better consistency.
                  </p>
                </article>
                <article className="col-span-12 lg:col-span-4 space-y-3">
                  <h4 className="text-heading-6">Product Updates</h4>
                  <p>Stay Updated with Platform Improvements</p>
                  <p>
                    Follow new features, performance updates, security enhancements, and experience improvements across
                    the Sumu platform.
                  </p>
                </article>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-5 text-heading-4 text-center md:text-left">Support</h3>
              <div className="grid grid-cols-12 gap-8">
                <article className="col-span-12 lg:col-span-6 space-y-3">
                  <h4 className="text-heading-6">Help Center</h4>
                  <p>Find Answers and Get Support</p>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>platform setup and configuration</li>
                    <li>invoicing and payment tracking</li>
                    <li>expense management</li>
                    <li>accounting and financial reports</li>
                    <li>troubleshooting common issues</li>
                  </ul>
                </article>
                <article className="col-span-12 lg:col-span-6 space-y-3">
                  <h4 className="text-heading-6">Documentation</h4>
                  <p>Detailed Platform Guidance</p>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>invoicing and billing processes</li>
                    <li>payment recording and tracking</li>
                    <li>expense management workflows</li>
                    <li>accounting tools and journal entries</li>
                    <li>financial reporting features</li>
                  </ul>
                </article>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-5 text-heading-4 text-center md:text-left">About Sumu</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-7 space-y-3">
                  <p className="font-medium">Smart Financial Management for Modern Businesses</p>
                  <p>
                    Sumu is the product brand of OceanGate for Smart Technologies LLC, an Omani technology company
                    focused on digital solutions for business and financial management.
                  </p>
                  <p>
                    Sumu combines invoicing, payment tracking, expense management, accounting, and financial reporting
                    into one connected platform.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-5 space-y-4">
                  <div>
                    <h4 className="mb-1 text-heading-6">Our Mission</h4>
                    <p>To simplify financial management with reliable and accessible tools.</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-heading-6">Our Vision</h4>
                    <p>To become a trusted digital financial management platform across the region.</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-heading-6">Core Values</h4>
                    <p>Integrity, Customer Focus, Simplicity, Continuous Improvement, Innovation, Empowerment.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <Link href="/signup-01" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Start Free Trial
                </Link>
                <Link
                  href="/contact-us"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="rounded-[20px] bg-white p-6 text-center md:p-8 dark:bg-background-6">
              <h3 className="mb-4 text-heading-4">Contact Us</h3>
              <p className="mx-auto mb-6 max-w-[900px]">
                Office #2, 1st Floor, Zawamri Building, Opp. Salman Store, Central Salalah-211, Salalah, Dhofar,
                Sultanate of Oman.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5">
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
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ResourcesContent;
