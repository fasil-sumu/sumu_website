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
import ProductDetailsProcess from './ProductDetailsProcess';

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

  const heroParagraph =
    makeCardDescription(primarySection.body) || makeCardDescription(serviceData.description) || serviceData.description;

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
            description={heroParagraph}
            ctaHref="https://sumu-frontend.vercel.app/"
            ctaLabel="Explore our services"
            cards={offerCards}
            coverImg={serviceData.coverImg}
          />
        </div>

        {remainingFeatures.length > 0 && (
          <ProductDetailsProcess
            title={serviceData.title}
            steps={remainingFeatures.map((s) => ({ heading: s.heading, body: s.body }))}
          />
        )}
      </div>
    </section>
  );
};
Contents.displayName = 'Contents';
export default Contents;
