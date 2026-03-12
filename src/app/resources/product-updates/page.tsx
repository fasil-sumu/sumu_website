import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Updates - Resources | Sumu',
  description: 'Stay updated with the latest features, improvements, and enhancements in Sumu.',
};

const ProductUpdatesPage = () => {
  return (
    <ResourcePageShell heading="Product Updates">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Product updates">
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
            <div className="col-span-12 lg:col-span-7 space-y-6 rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
              <div className="space-y-2">
                <p className="badge badge-yellow-v2">Learn</p>
                <h2 className="text-heading-4">Stay Updated with Platform Improvements</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  Sumu continuously improves its platform to provide better tools for businesses. Product Updates
                  highlights new features, enhancements, and improvements added to the system.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">Updates may include</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-secondary/70 dark:text-accent/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    new platform features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    performance improvements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    security enhancements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    user experience improvements
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href="/changelog" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  View changelog
                </Link>
                <Link
                  href="/resources/blog"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Read the blog
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">Why it matters</h3>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">
                  This helps you stay informed about the latest developments in Sumu, so your team can take advantage of
                  new capabilities as soon as they launch.
                </p>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Need guidance?</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Explore tutorials and documentation for step-by-step workflows.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/resources/guides-tutorials"
                    className="btn btn-sm btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Guides
                  </Link>
                  <Link
                    href="/resources/documentation"
                    className="btn btn-sm btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    Documentation
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

export default ProductUpdatesPage;
