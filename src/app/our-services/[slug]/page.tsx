import Contents from '@/components/our-serices-details/Contents';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/homepage-08/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import getMarkDownData from '@/utils/getMarkDownData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import { IService } from '@/interface';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const metadata: Metadata = {
  title: 'Product Details - Sumu',
};

const OurServicesDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const service = getMarkDownContent('src/data/services/', slug);
  const serviceData = service.data as IService;

  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-6">
        <PageHero
          className="pt-32 sm:pt-36 md:pt-40 xl:pt-[170px]"
          title={serviceData.title}
          heading={serviceData.title}
          link={`/our-services/${slug}`}
        />
        <Contents slug={slug} />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default OurServicesDetails;
