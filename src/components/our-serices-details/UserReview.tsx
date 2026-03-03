import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

type UserReviewProps = {
  service: IService;
};

const UserReview = ({ service }: UserReviewProps) => {
  return (
    <div className="mt-[70px] space-y-8">
      <div className="space-y-3">
        <RevealAnimation delay={0.1}>
          <h3 className="text-heading-3">What Our Clients Say</h3>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-body-text">
            Real feedback from businesses using Sumu to transform their financial operations.
          </p>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.3}>
        <div className="bg-gradient-to-br from-secondary to-secondary/90 dark:from-accent dark:to-accent/90 p-8 md:p-10 rounded-[20px] space-y-6 shadow-lg">
          <div className="flex items-start gap-4">
            <figure className="size-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white/20">
              <Image
                className="size-full object-cover"
                src={service.userReview.image}
                alt={service.userReview.name}
                width={64}
                height={64}
              />
            </figure>
            <div className="flex-1">
              <RevealAnimation delay={0.4}>
                <p className="text-lg font-semibold text-white mb-1">{service.userReview.name}</p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-sm text-white/80">{service.userReview.userRole}</p>
              </RevealAnimation>
            </div>
          </div>
          <blockquote className="relative">
            <svg
              className="absolute -top-2 -left-2 w-8 h-8 text-white/20"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <RevealAnimation delay={0.6}>
              <p className="text-white text-lg leading-relaxed pl-6">{service.userReview.reviewContent}</p>
            </RevealAnimation>
          </blockquote>
        </div>
      </RevealAnimation>
    </div>
  );
};

UserReview.displayName = 'UserReview';
export default UserReview;
