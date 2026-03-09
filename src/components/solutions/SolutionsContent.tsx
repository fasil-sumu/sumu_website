import RevealAnimation from '../animation/RevealAnimation';

const solutionCards = [
  {
    title: 'Small Businesses',
    text: 'Simplify financial management with invoicing, payments, expenses, and reporting in one dashboard.',
  },
  {
    title: 'Freelancers & Consultants',
    text: 'Manage clients, invoices, and income with structured financial control for independent professionals.',
  },
  {
    title: 'Accountants & Bookkeepers',
    text: 'Maintain organized records, journal entries, and reporting workflows with reliable accounting tools.',
  },
  {
    title: 'Growing Businesses',
    text: 'Scale financial operations with better visibility across revenue, expenses, and profitability.',
  },
];

const SolutionsContent = () => {
  return (
    <section className="pb-14 pt-6 md:pb-16 lg:pb-[88px] xl:pb-[100px]" aria-label="Solutions content">
      <div className="main-container space-y-[70px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Solutions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[900px]">Built for every stage of business growth</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[760px]">
              Sumu helps businesses and professionals manage invoicing, payments, expenses, accounting, and reporting
              with structured and reliable financial workflows.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {solutionCards.map((card, index) => (
            <RevealAnimation key={card.title} delay={0.5 + index * 0.1} className="col-span-12 md:col-span-6">
              <div className="h-full rounded-[20px] bg-white p-6 text-center dark:bg-background-6">
                <h3 className="mb-3 text-heading-5">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="space-y-10">
          <RevealAnimation delay={0.2}>
            <article className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-4 text-heading-4 text-center md:text-left">Small Businesses</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 space-y-3">
                  <p className="font-medium">Simplify Financial Management for Your Business</p>
                  <p>
                    Running a small business requires tracking invoices, payments, expenses, and records while handling
                    daily operations. Sumu provides one centralized platform to manage these activities from a single
                    dashboard.
                  </p>
                  <p>
                    Small businesses can create professional invoices, monitor incoming payments, record expenses, and
                    generate financial reports without relying on multiple tools.
                  </p>
                  <p>
                    With organized records and clear visibility into performance, Sumu helps businesses operate more
                    efficiently and make better financial decisions.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h4 className="mb-3 text-heading-6">Key Benefits</h4>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>Simple invoicing and payment tracking</li>
                    <li>Organized expense management</li>
                    <li>Clear financial reporting and insights</li>
                    <li>Structured accounting records</li>
                    <li>Better visibility into business performance</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-[14px] bg-background-2 p-5 dark:bg-background-7">
                <h4 className="mb-2 text-heading-6">Built for Businesses in Oman</h4>
                <p>
                  Sumu supports businesses in Oman with structured financial management aligned with local regulatory
                  and tax requirements, including reporting readiness for Oman Tax Authority expectations.
                </p>
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <article className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-4 text-heading-4 text-center md:text-left">Freelancers &amp; Consultants</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 space-y-3">
                  <p className="font-medium">Professional Financial Tools for Independent Professionals</p>
                  <p>
                    Freelancers and consultants manage multiple clients, projects, and payments. Sumu provides a
                    reliable platform to organize financial activities and maintain professional billing processes.
                  </p>
                  <p>
                    Independent professionals can manage client information, issue invoices, track payments, and monitor
                    income and expenses from one platform.
                  </p>
                  <p>
                    Sumu helps freelancers maintain professional financial management without the complexity of
                    traditional accounting systems.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h4 className="mb-3 text-heading-6">Key Benefits</h4>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>Manage client information and billing records</li>
                    <li>Issue professional invoices and track payments</li>
                    <li>Monitor income and business expenses</li>
                    <li>Maintain organized financial records</li>
                    <li>Generate reports for tracking and tax preparation</li>
                  </ul>
                </div>
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <article className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-4 text-heading-4 text-center md:text-left">Accountants &amp; Bookkeepers</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 space-y-3">
                  <p className="font-medium">Structured Financial Records for Accounting Professionals</p>
                  <p>
                    Accounting professionals need reliable systems for structured records and accurate reporting. Sumu
                    provides accounting tools that help accountants and bookkeepers manage financial data efficiently.
                  </p>
                  <p>
                    The platform supports chart of accounts management, journal entries, transaction tracking, and
                    report generation so records stay transparent and ready for review.
                  </p>
                  <p>
                    Sumu helps accountants maintain accurate bookkeeping while supporting broader business financial
                    management needs.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h4 className="mb-3 text-heading-6">Key Benefits</h4>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>Structured accounting records and financial data</li>
                    <li>Organized transaction tracking</li>
                    <li>Journal entry and ledger management</li>
                    <li>Financial reporting and analysis</li>
                    <li>Reliable documentation for financial oversight</li>
                  </ul>
                </div>
              </div>
            </article>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <article className="rounded-[20px] bg-white p-6 md:p-8 dark:bg-background-6">
              <h3 className="mb-4 text-heading-4 text-center md:text-left">Growing Businesses</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-8 space-y-3">
                  <p className="font-medium">Scalable Financial Management for Expanding Companies</p>
                  <p>
                    As companies grow, financial operations become more complex. Sumu provides scalable tools that
                    maintain clear financial visibility while handling increasing operational complexity.
                  </p>
                  <p>
                    By centralizing invoicing, payment tracking, expense management, accounting, and reporting, Sumu
                    helps businesses keep structured records and make informed decisions as they expand.
                  </p>
                  <p>Sumu supports sustainable growth with stronger financial clarity and control.</p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h4 className="mb-3 text-heading-6">Key Benefits</h4>
                  <ul className="list-disc space-y-2 pl-5 text-secondary/80 dark:text-accent/80">
                    <li>Manage larger transaction volumes efficiently</li>
                    <li>Maintain structured financial records</li>
                    <li>Monitor revenue, expenses, and profitability</li>
                    <li>Generate reports for performance analysis</li>
                    <li>Support sustainable business growth</li>
                  </ul>
                </div>
              </div>
            </article>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SolutionsContent;
