import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const resourcesCards = [
  {
    id: 'resources-learn',
    title: 'Learn',
    description: 'Blog, guides & tutorials, and product updates to help you get more value from Sumu.',
    href: '/resources/learn',
    icon: 'ns-shape-8',
  },
  {
    id: 'resources-support',
    title: 'Support',
    description: 'Help Center and documentation to troubleshoot issues and understand workflows clearly.',
    href: '/resources/support',
    icon: 'ns-shape-15',
  },
  {
    id: 'resources-company',
    title: 'Company',
    description: 'Learn about Sumu and contact our team for product info, support, setup, or partnerships.',
    href: '/resources/company',
    icon: 'ns-shape-9',
  },
];

const ResourcesContent = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] pt-[100px]" aria-label="Resources content">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-yellow-v2">Resources</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">Everything you need to learn, get support, and grow with Sumu</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                Explore insights, tutorials, documentation, and company information — organized in one place.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-5">
          {resourcesCards.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out min-h-[320px]">
                  <div className="flex items-center justify-center">
                    <span className={`${item.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{item.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={item.href}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Read more
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

export default ResourcesContent;
