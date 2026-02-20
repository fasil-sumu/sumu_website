// import About from '@/components/homepage-01/About';
// import Blog from '@/components/homepage-01/Blog';
// import Faq from '@/components/homepage-01/Faq';
// import Hero from '@/components/homepage-01/Hero';
// import HowItWorks from '@/components/homepage-01/HowItWorks';
// import OurServices from '@/components/homepage-01/OurServices';
// import Testimonial from '@/components/homepage-01/Testimonial';
// import TimelineIntegration from '@/components/homepage-01/TimelineIntegration';
// import CTAV1 from '@/components/shared/cta/CTAV1';

// import FooterOne from '@/components/shared/footer/FooterOne';
// import NavbarOne from '@/components/shared/header/NavbarOne';
import { Metadata } from 'next';
// import { Fragment } from 'react';
import Homepage08 from './homepage-08/page';

export const metadata: Metadata = {
  title: 'Sumu',
};

const Homepage01 = () => {
  return (
    <div>
      <Homepage08 />
    </div>
  );
};
Homepage01.displayName = 'Homepage08';
export default Homepage01;
