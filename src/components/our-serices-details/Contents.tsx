import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import gradient16 from '@public/images/gradient/gradient-16.png';
import gradient27 from '@public/images/gradient/gradient-27.png';
import gradient6 from '@public/images/gradient/gradient-6.png';

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

  // Split content by ## tags to create individual cards
  const sections = service.content.split(/(?=^##\s)/m).filter((section) => section.trim().length > 0);

  return (
    <section className="pb-[200px] pt-32 sm:pt-36 md:pt-40 xl:pt-[200px]">
      <div className="main-container">
        <div className="space-y-[70px] changelog">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <h2>{serviceData.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>{serviceData.description}</p>
            </RevealAnimation>
          </div>
          <div className="space-y-8">
            <RevealAnimation delay={0.5}>
              <h3 className="max-w-[850px] mx-auto">Feature Overview</h3>
            </RevealAnimation>

            {sections.map((section, index) => {
              const bgStyle = backgroundStyles[index % backgroundStyles.length];
              return (
                <RevealAnimation delay={0.6 + index * 0.1} key={index}>
                  <div className="bg-background-2 dark:bg-background-6 px-[42px] py-14 space-y-6 rounded-[20px] relative overflow-hidden z-10 max-w-[850px] mx-auto">
                    <div className={bgStyle.className}>
                      <Image src={bgStyle.gradient} alt="gradient" />
                    </div>
                    <ReactMarkdown
                      rehypePlugins={[[rehypeSlug]]}
                      components={{
                        h2: ({ node: _node, ...props }) => <h4 className="mb-6 first:mt-0" {...props} />,
                        h3: ({ node: _node, ...props }) => (
                          <div className="space-y-3">
                            <p className="text-secondary dark:text-accent mt-10 mb-3 font-semibold" {...props} />
                          </div>
                        ),
                        p: ({ node: _node, ...props }) => <p className="mb-6" {...props} />,
                        ul: ({ node: _node, ...props }) => (
                          <ul
                            className="space-y-3 list-disc list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 mb-6"
                            {...props}
                          />
                        ),
                        li: ({ node: _node, ...props }) => (
                          <li className="text-secondary/60 dark:text-accent/60" {...props} />
                        ),
                      }}>
                      {section}
                    </ReactMarkdown>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
