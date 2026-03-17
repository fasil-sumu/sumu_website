import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import gradient16 from '@public/images/gradient/gradient-16.png';
import gradient27 from '@public/images/gradient/gradient-27.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import ProductDetailsWhatWeOffer, { type ProductOfferCard } from './ProductDetailsWhatWeOffer';

const backgroundStyles = [
  {
    gradient: gradient27,
    className:
      '-z-10 absolute -right-[105%] -top-[50%] sm:-right-[104%] sm:-top-[95%] md:-right-[88%] md:-top-[98%] lg:-right-[80%] lg:-top-[90%] xl:-right-[78%] xl:-top-[97%] -rotate-[160deg] size-[650px] sm:size-[1060px] pointer-events-none select-none',
  },
  {
    gradient: gradient6,
    className:
      '-z-10 absolute -right-[100%] -top-[45%] sm:-right-[120%] sm:-top-[95%] md:-right-[94%] md:-top-[98%] lg:-right-[84%] xl:-right-[74%] xl:-top-[92%] -rotate-[260deg] size-[650px] sm:size-[1060px] pointer-events-none select-none',
  },
  {
    gradient: gradient6,
    className:
      '-z-10 absolute -right-[85%] -top-[38%] sm:-right-[92%] sm:-top-[78%] md:-right-[80%] md:-top-[84%] lg:-right-[66%] lg:-top-[80%] xl:-right-[68%] xl:-top-[84%] rotate-[260deg] size-[650px] sm:size-[1060px] pointer-events-none select-none',
  },
  {
    gradient: gradient16,
    className:
      '-z-10 absolute -right-[85%] -top-[30%] sm:-right-[88%] sm:-top-[64%] md:-right-[78%] md:-top-[70%] lg:-right-[64%] lg:-top-[73%] xl:-right-[65%] xl:-top-[78%] rotate-[45deg] size-[650px] sm:size-[1060px] pointer-events-none select-none',
  },
];

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);
  const serviceData = service.data as IService;

  const sections = service.content.split(/(?=^##\s)/m).filter((section) => section.trim().length > 0);

  const parseSection = (section: string) => {
    const lines = section.trim().split('\n');
    const rawHeading = lines[0] || '';
    const heading = rawHeading.replace(/^##\s*/, '').trim();
    const body = lines.slice(1).join('\n').trim();
    return { heading, body };
  };

  const primarySection = sections[0] ? parseSection(sections[0]) : { heading: '', body: '' };
  const featureSections = sections.slice(1).map(parseSection);

  const heroCards = featureSections.slice(0, 5);
  const remainingFeatures = featureSections.slice(3);

  const toPlainText = (md: string) =>
    md
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[`*_>#-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const makeCardDescription = (body: string) => {
    const plain = toPlainText(body);
    if (!plain) return '';
    const sentenceEnd = plain.search(/[.!?]\s/);
    const short = sentenceEnd > 60 ? plain.slice(0, sentenceEnd + 1) : plain;
    return short.length > 140 ? `${short.slice(0, 137)}...` : short;
  };

  const offerCards: ProductOfferCard[] = heroCards.map((c, idx) => ({
    id: `${slug}-offer-${idx}`,
    icon: serviceData.icon,
    title: c.heading || serviceData.title,
    description: makeCardDescription(c.body),
  }));

  return (
    <section className="pb-[200px] pt-32 sm:pt-36 md:pt-40 xl:pt-[200px] overflow-x-clip">
      <div className="main-container space-y-20">
        <div className="relative overflow-x-clip">
          {backgroundStyles.map((bg, index) => (
            <div key={index} className={bg.className}>
              <Image src={bg.gradient} alt="gradient" />
            </div>
          ))}
          <ProductDetailsWhatWeOffer
            heading={`${serviceData.title}.`}
            description={serviceData.description}
            ctaHref="/our-services-01"
            ctaLabel="Explore our services"
            cards={offerCards}
            coverImg={serviceData.coverImg}
          />
        </div>

        {/* Full content: modern cards, not document-like */}
        {remainingFeatures.length > 0 && (
          <div className="space-y-10">
            <RevealAnimation delay={0.15}>
              <div className="text-center space-y-3 max-w-[760px] mx-auto">
                <h3>Everything you get with {serviceData.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">
                  A complete set of capabilities, explained clearly so you can see exactly how Sumu fits your workflow.
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-12 gap-y-5 lg:gap-y-6 lg:gap-x-8">
              {remainingFeatures.map((section, index) => (
                <div key={section.heading || index} className="col-span-12 lg:col-span-6">
                  <RevealAnimation delay={0.2 + index * 0.06}>
                    <div className="sm:max-w-[596px] lg:mx-0 mx-auto sm:py-6 py-5 sm:px-[34px] px-7 bg-white dark:bg-background-8 sm:rounded-[20px] rounded-2xl flex items-start sm:gap-[22px] gap-4 border border-secondary/10 dark:border-accent/10 shadow-sm">
                      <div>
                        <div className="size-10 rounded-full bg-ns-yellow text-tagline-1 font-semibold text-secondary flex items-center justify-center shrink-0">
                          {index + 4}
                        </div>
                      </div>
                      <div className="space-y-2 text-left">
                        {section.heading && (
                          <h4 className="text-lg font-medium leading-[27px] text-secondary dark:text-accent">
                            {section.heading}
                          </h4>
                        )}
                        {section.body && (
                          <ReactMarkdown
                            rehypePlugins={[[rehypeSlug]]}
                            components={{
                              p: ({ node: _node, ...props }) => (
                                <p className="text-secondary/70 dark:text-accent/70" {...props} />
                              ),
                              ul: ({ node: _node, ...props }) => (
                                <ul
                                  className="mt-2 space-y-2 list-disc list-inside text-secondary/70 dark:text-accent/70"
                                  {...props}
                                />
                              ),
                              li: ({ node: _node, ...props }) => <li {...props} />,
                              strong: ({ node: _node, ...props }) => (
                                <span className="font-semibold text-secondary dark:text-accent" {...props} />
                              ),
                            }}>
                            {section.body}
                          </ReactMarkdown>
                        )}
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
