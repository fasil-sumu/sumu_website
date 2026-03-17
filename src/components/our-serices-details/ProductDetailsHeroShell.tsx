'use client';

import { ReactNode, useEffect, useRef } from 'react';

const canScroll = (el: HTMLElement, deltaY: number) => {
  if (deltaY === 0) return false;
  const atTop = el.scrollTop <= 0;
  const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;
  return deltaY < 0 ? !atTop : !atBottom;
};

const ProductDetailsHeroShell = ({ left, right }: { left: ReactNode; right: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (e: WheelEvent) => {
      const rightEl = document.getElementById('product-details-right-scroll');
      if (!rightEl) return;

      // Only capture scrolling on large screens (where we show side-by-side columns)
      if (window.innerWidth < 1024) return;

      // If right panel can scroll in this direction, consume the wheel and scroll it.
      if (canScroll(rightEl, e.deltaY)) {
        e.preventDefault();
        rightEl.scrollTop += e.deltaY;
      }
      // Else: allow default page scroll (do not preventDefault)
    };

    wrapper.addEventListener('wheel', onWheel, { passive: false });
    return () => wrapper.removeEventListener('wheel', onWheel as EventListener);
  }, []);

  return (
    <div ref={wrapperRef} className="grid grid-cols-12 gap-y-10 lg:gap-16 items-start">
      <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">{left}</div>

      <div className="col-span-12 lg:col-span-7">{right}</div>
    </div>
  );
};

ProductDetailsHeroShell.displayName = 'ProductDetailsHeroShell';
export default ProductDetailsHeroShell;
