'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface ProductDetailsRightCard {
  heading: string;
  body: string;
}

const ProductDetailsRight = ({
  cards,
  coverImg,
  title,
}: {
  cards: ProductDetailsRightCard[];
  coverImg: string;
  title: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => cards.filter((c) => c.heading || c.body), [cards]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cardEls = Array.from(el.querySelectorAll<HTMLElement>('[data-product-card]'));
    if (cardEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]) {
          const idx = Number((visible[0].target as HTMLElement).dataset.index || 0);
          setActiveIndex(Number.isFinite(idx) ? idx : 0);
        }
      },
      {
        root: el,
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
        rootMargin: '-10% 0px -60% 0px',
      },
    );

    cardEls.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={containerRef} className="space-y-4">
      {items.map((card, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={`${card.heading}-${index}`}
            data-product-card
            data-index={index}
            className={[
              'relative rounded-[20px] bg-white dark:bg-background-8 px-7 py-6 shadow-sm flex items-start gap-4 border border-secondary/10 dark:border-accent/10',
              'transition-all duration-300 ease-out',
              isActive ? 'ring-1 ring-primary-500/30 translate-y-0 opacity-100' : 'opacity-90',
            ].join(' ')}
            style={{ transform: isActive ? 'translateY(0px)' : 'translateY(6px)' }}>
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-secondary/10 dark:border-accent/15 text-tagline-2 font-medium text-secondary/80 dark:text-accent/80">
              {index + 1}
            </div>
            <div className="space-y-2 text-left">
              {!!card.heading && <h3 className="text-heading-6 text-secondary dark:text-accent">{card.heading}</h3>}
              {!!card.body && (
                <ReactMarkdown
                  rehypePlugins={[[rehypeSlug]]}
                  components={{
                    p: ({ node: _node, ...props }) => (
                      <p className="text-secondary/70 dark:text-accent/70 text-sm" {...props} />
                    ),
                    ul: ({ node: _node, ...props }) => (
                      <ul
                        className="mt-1 space-y-1 list-disc list-inside text-secondary/70 dark:text-accent/70 text-sm"
                        {...props}
                      />
                    ),
                    li: ({ node: _node, ...props }) => <li {...props} />,
                    strong: ({ node: _node, ...props }) => (
                      <span className="font-semibold text-secondary dark:text-accent" {...props} />
                    ),
                  }}>
                  {card.body}
                </ReactMarkdown>
              )}
            </div>
          </div>
        );
      })}

      <figure className="relative z-10 rounded-[24px] overflow-hidden bg-background-2 dark:bg-background-6 border border-secondary/10 dark:border-accent/10">
        <Image src={coverImg} alt={title} width={960} height={520} className="w-full h-auto object-cover" />
      </figure>
    </div>
  );
};

ProductDetailsRight.displayName = 'ProductDetailsRight';
export default ProductDetailsRight;
