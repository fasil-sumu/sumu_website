import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';

const Contents = ({ slug }: { slug: string }) => {
  const service = getMarkDownContent('src/data/services/', slug);
  const serviceData = service.data as IService;

  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <ReactMarkdown
                rehypePlugins={[[rehypeSlug]]}
                components={{
                  h2: ({ node, ...props }) => <h3 className="text-heading-4 mt-12 first:mt-0 mb-6" {...props} />,
                  h3: ({ node, ...props }) => <h4 className="text-heading-5 mt-10 mb-4" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                  ul: ({ node, ...props }) => <ul className="space-y-3 mb-6" {...props} />,
                  li: ({ node, ...props }) => (
                    <li className="flex items-start justify-start gap-2">
                      <span className="size-1.5 rounded-full inline-block bg-secondary dark:bg-accent mt-2.5 flex-shrink-0" />
                      <span className="text-tagline-1 text-secondary/60 dark:text-accent/60" {...props} />
                    </li>
                  ),
                }}>
                {service.content}
              </ReactMarkdown>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
