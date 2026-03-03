import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import TableOfContent from './TableOfContent';
import UserReview from './UserReview';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);
  const serviceData = service.data as IService;

  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]">
      <div className="main-container">
        {/* Service Header */}
        <div className="mb-12 md:mb-16 text-center">
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center mb-6">
              <div className="p-6 rounded-2xl bg-background-1 dark:bg-background-6 shadow-sm">
                <span className={`${serviceData.icon} text-[56px] md:text-[64px] text-secondary dark:text-accent`} />
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="max-w-[878px] mx-auto mb-5">{serviceData.title}</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[700px] mx-auto text-lg md:text-xl leading-relaxed opacity-80">
              {serviceData.description}
            </p>
          </RevealAnimation>
        </div>

        {/* Cover Image */}
        {serviceData.coverImg && (
          <RevealAnimation delay={0.4}>
            <figure className="mb-12 md:mb-16 rounded-[20px] overflow-hidden max-w-[1200px] mx-auto shadow-lg">
              <Image
                src={serviceData.coverImg}
                alt={serviceData.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </figure>
          </RevealAnimation>
        )}

        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[72px] xl:gap-[100px]">
          {/* Left Content - Scrollable */}
          <div className="lg:max-w-[720px] xl:max-w-[767px] max-w-full w-full mb-8 lg:mb-0">
            <RevealAnimation delay={0.5}>
              <div className="services-details-content mb-14 md:mb-16 bg-background-1 dark:bg-background-6 rounded-[20px] p-8 md:p-12 shadow-sm">
                <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{service.content}</ReactMarkdown>
              </div>
            </RevealAnimation>

            {/* user review  */}
            <UserReview service={serviceData} />
          </div>

          {/* Right Sidebar - Sticky */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <TableOfContent markdownContent={service.content} />
          </div>
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
