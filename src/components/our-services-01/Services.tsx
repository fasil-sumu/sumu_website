import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import TranslatedText from '../shared/TranslatedText';

const Services = () => {
  // Get all services and filter for the main Sumu products
  const allServices: IService[] = getMarkDownData('src/data/services');

  // Define the main products we want to display in order
  const mainServiceSlugs = [
    'sales-&-invoicing',
    'accept-payment-online',
    'vat-automation',
    'accounting',
    'analytics-&-reporting',
    'banking-&-accounts-aggregation',
  ];

  // Filter and sort services based on the main products list
  const servicesData = mainServiceSlugs
    .map((slug) => allServices.find((service) => service.slug === slug))
    .filter((service): service is IService => service !== undefined);

  const serviceKeyBySlug: Record<string, string> = {
    'sales-&-invoicing': 'salesInvoicing',
    'accept-payment-online': 'payments',
    'vat-automation': 'expenses',
    accounting: 'accounting',
    'analytics-&-reporting': 'reporting',
    'banking-&-accounts-aggregation': 'clients',
  };

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">
              <TranslatedText i18nKey="productsPage.services.badge" defaultText="Our Products" />
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">
                <TranslatedText
                  i18nKey="productsPage.services.title"
                  defaultText="Products Built to Run Your Business Better"
                />
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                <TranslatedText
                  i18nKey="productsPage.services.description"
                  defaultText="Invoicing, payments, expenses, accounting, reporting, and client management in one connected platform."
                />
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out min-h-[320px]">
                  <div className="flex items-center justify-center">
                    <span className={`${service.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">
                      <TranslatedText
                        i18nKey={`productsPage.services.items.${serviceKeyBySlug[service.slug]}.title`}
                        defaultText={service.title}
                      />
                    </h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">
                      <TranslatedText
                        i18nKey={`productsPage.services.items.${serviceKeyBySlug[service.slug]}.description`}
                        defaultText={service.description}
                      />
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/our-services/${service.slug}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      <TranslatedText i18nKey="productsPage.services.readMore" defaultText="Read more" />
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
