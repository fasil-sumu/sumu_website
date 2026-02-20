'use client';

import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';
import { useTranslation } from 'react-i18next';

interface NavCTAButtonProps {
  btnClassName?: string;
  href: string;
  label?: string;
  className?: string;
}

const NavCTAButton = ({ btnClassName, href = '/', label, className }: NavCTAButtonProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn('hidden items-center justify-center xl:flex', className)}>
      <LinkButton href={href} className={cn('btn btn-md', btnClassName)}>
        {label || t('common.getStarted')}
      </LinkButton>
    </div>
  );
};

export default NavCTAButton;
