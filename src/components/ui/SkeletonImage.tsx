'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/utils/cn';

type SkeletonImageProps = Omit<ImageProps, 'placeholder'> & {
  wrapperClassName?: string;
  skeletonClassName?: string;
  showDimensions?: boolean;
};

const SkeletonImage = ({
  wrapperClassName,
  skeletonClassName,
  showDimensions = false,
  className,
  onLoad,
  onLoadingComplete,
  ...props
}: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const width = typeof props.width === 'number' ? props.width : undefined;
  const height = typeof props.height === 'number' ? props.height : undefined;

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-background-2 dark:bg-background-6 animate-pulse transition-opacity duration-300',
          loaded ? 'opacity-0' : 'opacity-100',
          skeletonClassName,
        )}
      />
      {showDimensions && !loaded && width && height && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-secondary/70 dark:text-accent/70 select-none">
          <span className="font-semibold tracking-tight text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-none">
            {width}x{height}
          </span>
        </div>
      )}
      <Image
        {...props}
        className={cn('transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0', className)}
        onLoad={(e) => {
          onLoad?.(e);
          setLoaded(true);
        }}
        onLoadingComplete={(img) => {
          onLoadingComplete?.(img);
          setLoaded(true);
        }}
      />
    </div>
  );
};

SkeletonImage.displayName = 'SkeletonImage';
export default SkeletonImage;
