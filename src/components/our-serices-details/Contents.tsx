import { IService } from '@/interface';
import getMarkDownContent from '@/utils/getMarkDownContent';
import Image from 'next/image';
import gradient16 from '@public/images/gradient/gradient-16.png';
import gradient27 from '@public/images/gradient/gradient-27.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import ProductHero from './ProductHero';
import ProductFeatures from './ProductFeatures';
import ProductBenefits from './ProductBenefits';
import ProductInsights from './ProductInsights';
import ProductCTA from './ProductCTA';

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

  return (
    <section className="pb-[120px] pt-32 sm:pt-36 md:pt-40 xl:pt-[180px] overflow-x-clip">
      <div className="relative overflow-x-clip">
        {backgroundStyles.map((bg, index) => (
          <div key={index} className={bg.className}>
            <Image src={bg.gradient} alt="gradient" />
          </div>
        ))}
        <ProductHero service={serviceData} />
      </div>

      <ProductFeatures service={serviceData} />
      <ProductBenefits service={serviceData} />
      <ProductInsights service={serviceData} />
      <ProductCTA service={serviceData} />
    </section>
  );
};

Contents.displayName = 'Contents';
export default Contents;
