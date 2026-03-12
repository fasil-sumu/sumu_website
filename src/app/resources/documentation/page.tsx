import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation - Resources | Sumu',
  description: 'Structured documentation for Sumu modules, workflows, and financial management processes.',
};

const DocumentationPage = () => {
  return (
    <ResourcePageShell heading="Documentation">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Documentation">
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
                <p className="badge badge-yellow-v2">Support</p>
                <h2 className="text-heading-4">Detailed Platform Guidance</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  The Sumu documentation provides structured information about modules, workflows, and financial
                  management processes to help you fully understand how the platform works.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">Documentation includes</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary/70 dark:text-accent/70">
                  <li>invoicing and billing processes</li>
                  <li>payment recording and tracking</li>
                  <li>expense management workflows</li>
                  <li>accounting tools and journal entries</li>
                  <li>financial reporting features</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/documentation"
                  className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Open documentation
                </Link>
                <Link
                  href="/resources/help-center"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  Help Center
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-5 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-7 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">Want a quick start?</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Use Guides & Tutorials for step-by-step walkthroughs and examples.
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/guides-tutorials"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Guides & Tutorials
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Stay updated</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">
                  Follow Product Updates to track new features and improvements.
                </p>
                <div className="mt-5">
                  <Link
                    href="/resources/product-updates"
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                    Product Updates
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

export default DocumentationPage;
