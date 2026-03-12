import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Resources | Sumu',
  description: 'Practical insights on financial management, invoicing, accounting, and business operations.',
};

const ResourcesBlogPage = () => {
  return (
    <ResourcePageShell heading="Blog">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Resources blog">
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
            <div className="col-span-12 lg:col-span-7 space-y-5 rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
              <div className="space-y-2">
                <p className="badge badge-yellow-v2">Learn</p>
                <h2 className="text-heading-4">Insights for Modern Business Management</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  The Sumu Blog provides practical insights on financial management, invoicing, accounting, and business
                  operations. Our articles help entrepreneurs, freelancers, and growing companies improve financial
                  practices and make informed decisions.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <p className="text-heading-6">Featured</p>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Expert insights on navigating Oman’s accounting and tax landscape.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Link href="/blog-03" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Explore articles
                </Link>
                <Link
                  href="/resources/guides-tutorials"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Browse guides
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Topics include</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/70 dark:text-accent/70">
                  <li>financial management best practices</li>
                  <li>managing invoices and payments</li>
                  <li>controlling business expenses</li>
                  <li>understanding financial reports</li>
                  <li>tips for growing businesses</li>
                </ul>
                <p className="mt-5 text-secondary/60 dark:text-accent/60">
                  Stay updated with the latest insights and industry trends.
                </p>
              </div>

              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">Need support while learning?</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Visit the Help Center for step-by-step answers and troubleshooting.
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/help-center"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Go to Help Center
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

export default ResourcesBlogPage;
