import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Sumu - Resources | Sumu',
  description: 'Learn about Sumu, our story, mission, vision, and core values.',
};

const AboutSumuPage = () => {
  return (
    <ResourcePageShell heading="About Sumu">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="About Sumu">
        <div className="main-container">
          <div className="mb-8">
            <Link
              href="/resources"
              className="text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent inline-flex items-center gap-2 transition-colors">
              <span aria-hidden>←</span>
              Back to Resources
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-6 rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
              <div className="space-y-2">
                <p className="badge badge-yellow-v2">Company</p>
                <h2 className="text-heading-4">Smart Financial Management for Modern Businesses</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  Sumu is the product brand of OceanGate for Smart Technologies LLC, an Omani technology company focused
                  on developing innovative digital solutions for business and financial management.
                </p>
                <p className="text-secondary/70 dark:text-accent/70">
                  Sumu brings invoicing, payment tracking, expense management, accounting, and financial reporting into
                  one integrated system—helping businesses simplify financial operations and maintain structured
                  records.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-6 rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                  <h3 className="text-heading-6">Our Story</h3>
                  <p className="mt-3 text-secondary/70 dark:text-accent/70">
                    Sumu was developed to solve a common challenge: managing financial operations using multiple
                    disconnected tools. By bringing core workflows into one platform, businesses gain better visibility
                    and operational control.
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 rounded-2xl border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-6 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                  <h3 className="text-heading-6">Built for Businesses</h3>
                  <p className="mt-3 text-secondary/70 dark:text-accent/70">
                    Designed to support modern businesses with structured financial tools that keep records clear,
                    performance visible, and operations efficient.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-white p-6 dark:border-stroke-6 dark:bg-background-6">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">Our Mission</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      To simplify financial management with reliable, accessible, and easy-to-use digital tools.
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">Our Vision</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      To become a trusted digital financial management platform across the region.
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <p className="text-heading-6">Core Values</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">
                      Integrity, Customer Focus, Simplicity, Continuous Improvement, Innovation, Empowerment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://sumu-frontend.vercel.app/signin"
                  className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Start Free Trial
                </Link>
                <Link
                  href="/resources/contact-us"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Contact Our Team
                </Link>
                <Link
                  href="/about-03"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Full company page
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">Our Core Values</h3>
                <ul className="mt-4 space-y-2 text-secondary/70 dark:text-accent/70">
                  {[
                    'Integrity',
                    'Customer Focus',
                    'Simplicity',
                    'Continuous Improvement',
                    'Innovation',
                    'Empowerment',
                  ].map((value) => (
                    <li
                      key={value}
                      className="flex items-center justify-between rounded-xl border border-stroke-3 bg-white/70 px-4 py-2 dark:border-stroke-6 dark:bg-background-6/70">
                      <span>{value}</span>
                      <span className="text-secondary/40 dark:text-accent/40">•</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Get started</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Start managing your business finances with a smarter and more organized platform.
                </p>
                <div className="mt-5">
                  <Link
                    href="https://sumu-frontend.vercel.app/signin"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent w-full justify-center">
                    Start Free Trial
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </ResourcePageShell>
  );
};

export default AboutSumuPage;
