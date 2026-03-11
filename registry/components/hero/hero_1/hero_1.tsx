'use client';

import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/primitives/button/button';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface HeroPanelContent {
  title: string;
  subtitle: string;
  image?: string;
}

export interface HeroSlideContent {
  tagline?: string;
  title: string;
  subtitle?: string;
}

export interface Hero1Props {
  slides?: HeroSlideContent[];
  topPanel: HeroPanelContent;
  bottomPanel: HeroPanelContent;
  className?: string;
}

const DEFAULT_SLIDES: HeroSlideContent[] = [
  { tagline: 'Get 50% Off', title: 'SHOP WISE WITH PRICE', subtitle: 'COMPARISONS' },
  { tagline: 'New Arrivals', title: 'FRESH STYLES', subtitle: 'THIS SEASON' },
  { tagline: 'Limited Time', title: 'BEST DEALS', subtitle: 'SHOP NOW' },
];

// ─────────────────────────────────────────────
// Right panel (shared layout)
// ─────────────────────────────────────────────

function HeroPanel({ content, className = '' }: { content: HeroPanelContent; className?: string }) {
  return (
    <div className={`flex min-h-0 flex-1 flex-col gap-3 overflow-hidden p-4 md:p-5 ${className}`}>
      <div className="min-h-0 flex-1 overflow-hidden rounded-lg bg-neutral-300/80">
        {content.image ? (
          <img src={content.image} alt="" className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="flex shrink-0 flex-col gap-0.5">
        <h3 className="text-base font-bold tracking-tight text-white md:text-lg">
          {content.title}
        </h3>
        <p className="text-sm text-white/90 md:text-base">{content.subtitle}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Hero1
// ─────────────────────────────────────────────

export function Hero1({
  slides = DEFAULT_SLIDES,
  topPanel,
  bottomPanel,
  className = '',
}: Hero1Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onReInit = () => setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onReInit);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onReInit);
    };
  }, [emblaApi]);

  return (
    <section
      className={`flex min-w-0 flex-col gap-4 md:flex-row ${className}`}
      aria-label="Hero banner"
    >
      {/* Left: main hero carousel — solid teal */}
      <div className="relative min-h-[320px] w-full flex-shrink-0 md:w-2/3">
        <div className="absolute inset-0 bg-neutral-900" />
        <div className="relative flex h-full min-h-[320px] flex-col p-4 md:min-h-[400px] md:p-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="min-w-0 flex-[0_0_100%] flex flex-col gap-4 md:flex-row md:items-center md:gap-6"
                >
                  <div className="flex flex-1 flex-col justify-center gap-3">
                    {slide.tagline ? (
                      <p className="text-sm font-medium text-white/90 md:text-base">
                        {slide.tagline}
                      </p>
                    ) : null}
                    <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>
                    {slide.subtitle ? (
                      <p className="text-xl font-bold text-white md:text-3xl lg:text-4xl">
                        {slide.subtitle}
                      </p>
                    ) : null}
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-blue-600 border-blue-600 hover:bg-blue-500 hover:border-blue-500 focus-visible:ring-blue-600"
                      >
                        VIEW COLLECTION
                      </Button>
                      <Button
                        variant="primary"
                        size="lg"
                        className="border-amber-400 bg-amber-400 text-neutral-900 hover:bg-amber-300 hover:border-amber-300 focus-visible:ring-amber-400"
                      >
                        CATEGORIES
                      </Button>
                    </div>
                  </div>
                  <div className="flex shrink-0 justify-center md:w-2/5">
                    <div className="aspect-[4/5] w-full max-w-[240px] rounded-lg bg-neutral-300/50 md:max-w-[280px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="mt-4 flex justify-center gap-0 md:mt-6">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                className="rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-500"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={selectedIndex === i ? 'true' : undefined}
              >
                <span
                  className={`block h-4 w-4 rounded-full transition-colors ${
                    selectedIndex === i ? 'bg-blue-700' : 'bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: two panels, each ~50% of column height, white separator */}
      <div className="flex w-full flex-col md:w-1/3 md:min-h-0">
        <div className="flex min-h-0 flex-1 flex-col border-b-2 border-white bg-neutral-300">
          <HeroPanel content={topPanel} />
        </div>
        <div
          className="flex min-h-0 flex-1 flex-col bg-neutral-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm10 10h4v4h-4v-4z' fill='%2394a3b8' fill-opacity='0.15'/%3E%3C/svg%3E")`,
          }}
        >
          <HeroPanel
            content={bottomPanel}
            className="[&_h3]:text-neutral-900 [&_p]:text-neutral-700"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero1;
