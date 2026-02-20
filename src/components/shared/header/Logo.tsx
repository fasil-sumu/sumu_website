import logoDark from '@public/images/shared/logo-removebg.png';
import logo from '@public/images/shared/logo-removebg.png';
import mainLogo from '@public/images/shared/logo-removebg.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <span className="sr-only">Home</span>
        <figure className="hidden ml-6 p-2 lg:block lg:max-w-[100px]">
          <Image src={mainLogo} alt="Sumu" className="" priority />
        </figure>

        {/* mobile logo */}
        <figure className="block max-w-[65px] lg:hidden">
          <Image src={logo} alt="Sumu" className="block w-full dark:hidden" priority />
          <Image src={logoDark} alt="Sumu" className="hidden w-full dark:block" priority />
        </figure>
      </Link>
    </div>
  );
};

export default Logo;
