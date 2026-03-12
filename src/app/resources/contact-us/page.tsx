import ResourcePageShell from '@/components/resources/ResourcePageShell';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Resources | Sumu',
  description: 'Contact the Sumu team for product information, technical support, and partnership inquiries.',
};

const ResourcesContactPage = () => {
  return (
    <ResourcePageShell heading="Contact Us">
      <section className="pb-14 pt-2 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Contact Sumu">
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
                <p className="badge badge-yellow-v2">Company</p>
                <h2 className="text-heading-4">We’re Here to Help</h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  If you need assistance with the Sumu platform or would like to learn more about our services, our team
                  is ready to help.
                </p>
              </div>

              <div className="rounded-2xl border border-stroke-3 bg-background-2 p-6 dark:border-stroke-6 dark:bg-background-7">
                <h3 className="text-heading-6">You can contact us for</h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-secondary/70 dark:text-accent/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    product information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    technical support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    account setup assistance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-secondary/50 dark:bg-accent/50" />
                    partnership inquiries
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href="/contact-us" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  Contact form
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
                <h3 className="text-heading-6">Contact details</h3>
                <p className="mt-3 text-secondary/70 dark:text-accent/70">
                  Office #2, 1st Floor, Zawamri Building, Opp. Salman Store, Central Salalah-211, Salalah, Dhofar,
                  Sultanate of Oman.
                </p>
                <div className="mt-5 space-y-3">
                  <Link
                    href="mailto:info@joinsumu.com"
                    className="text-secondary hover:text-primary-500 dark:text-accent dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors">
                    <span className="text-secondary/40 dark:text-accent/40">Email:</span>
                    info@joinsumu.com
                  </Link>
                  <Link
                    href="tel:+98675008142"
                    className="text-secondary hover:text-primary-500 dark:text-accent dark:hover:text-primary-400 inline-flex items-center gap-2 transition-colors">
                    <span className="text-secondary/40 dark:text-accent/40">Mobile:</span>
                    +986 75008142
                  </Link>
                </div>
              </div>
              <div className="rounded-[20px] border border-stroke-3 bg-white p-7 dark:border-stroke-6 dark:bg-background-6">
                <h3 className="text-heading-6">Learn more about Sumu</h3>
                <p className="mt-2 text-secondary/70 dark:text-accent/70">Explore our story, mission, and values.</p>
                <div className="mt-5">
                  <Link
                    href="/resources/about-sumu"
                    className="btn btn-md btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full justify-center">
                    About Sumu
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

export default ResourcesContactPage;
