import darkLogo from '@public/images/shared/logo-removebg.png';
import logoDark from '@public/images/shared/logo-removebg.png';
import logo from '@public/images/shared/logo-removebg.png';
import Image from 'next/image';
import Link from 'next/link';

const LogoV2 = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden lg:block lg:max-w-[198px]">
          <Image src={darkLogo} alt="Sumu" />
        </figure>
        <figure className="block max-w-[44px] lg:hidden">
          <Image src={logo} alt="Sumu" className="block w-full dark:hidden" />
          <Image src={logoDark} alt="Sumu" className="hidden w-full dark:block" />
        </figure>
      </Link>
    </div>
  );
};

export default LogoV2;
