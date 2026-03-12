import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides & Tutorials - Resources | Sumu',
  description: 'Step-by-step guidance to help you use Sumu effectively.',
};

const GuidesTutorialsPage = () => {
  return (
    <ResourcePageShell heading="Guides & Tutorials">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Guides and tutorials">
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
                <p className="badge badge-yellow-v2">Learn</p>
                <h2 className="text-heading-4">Learn How to Use Sumu Effectively</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  Our guides and tutorials provide step-by-step instructions to help users understand the platform and
                  manage financial activities more efficiently.
                </p>
              </div>

              <div className="grid grid-cols-12 gap-5">
                {[
                  {
                    title: 'Invoice workflows',
                    text: 'Create, customize, and manage invoices with confidence.',
                  },
                  {
                    title: 'Payments tracking',
                    text: 'Track customer payments and stay on top of receivables.',
                  },
                  {
                    title: 'Expenses & reporting',
                    text: 'Record expenses and understand your financial reports.',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="col-span-12 md:col-span-4 rounded-2xl border border-stroke-3 bg-background-2 p-5 dark:border-stroke-6 dark:bg-background-7">
                    <p className="text-heading-6">{card.title}</p>
                    <p className="mt-2 text-secondary/70 dark:text-accent/70">{card.text}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-gradient-to-br from-background-2 to-white p-6 dark:border-stroke-6 dark:from-background-7 dark:to-background-6">
                <h3 className="text-heading-6">Topics covered include</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-secondary/70 dark:text-accent/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    creating and managing invoices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    tracking customer payments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    recording and categorizing expenses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    managing client records
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    understanding financial reports
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href="/tutorial" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Open tutorials
                </Link>
                <Link
                  href="/resources/product-updates"
                  className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent">
                  See updates
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Why it helps</h3>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">
                  These practical guides help businesses adopt better financial management practices with clarity and
                  structure.
                </p>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-background-2 p-7 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">Need an answer now?</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">Check the Help Center for quick solutions.</p>
                <div className="mt-5">
                  <Link
                    href="/resources/help-center"
                    className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                    Help Center
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

export default GuidesTutorialsPage;
