"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "FLIM Director",
    quote: "A rare location where every frame looks production-ready and premium.",
    image: "/images/gulab.jpg"
  },
  {
    name: "Nisha Kapoor",
    role: "Commercial Producer",
    quote: "Smooth logistics, rich visuals, and a highly cooperative on-ground team.",
    image: "/images/couple.webp"
  },
  {
    name: "Kabir Anand",
    role: "Wedding FLIMmaker",
    quote: "Our clients were stunned by the natural texture and cinematic light.",
    image: "/images/heartview.jpeg"
  },
  {
    name: "Riya Sen",
    role: "Event Curator",
    quote: "The venue feels luxurious yet grounded in nature. Perfect for premium events.",
    image: "/images/lake view.jpeg"
  },
  {
    name: "Samar Dutt",
    role: "Travel Vlogger",
    quote: "An immersive location with endless backdrops and incredible golden-hour scenes.",
    image: "/images/best_view.jpeg"
  },
  {
    name: "Vivek S",
    role: "Line Producer",
    quote: "Versatile spaces from forest mood to grand open areas in one destination.",
    image: "/images/light.webp"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="scene-layer section-shell relative bg-transparent px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <span className="section-kicker">Social Proof</span>
        <h2 className="section-heading">
          Guest <span className="accent">Testimonials</span>
        </h2>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="luxe-card relative min-w-[290px] flex-1 rounded-2xl p-6 md:min-w-[360px]"
              >
                <span className="absolute right-5 top-3 text-4xl text-[#D4AF37]/60">❝</span>
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D4AF37]/40">
                  <Image src={review.image} alt={review.name} fill unoptimized className="object-cover" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#F1FAEE]/82">{review.quote}</p>
                <p className="mt-4 text-[#D4AF37]">★★★★★</p>
                <h3 className="mt-3 font-semibold text-[#F1FAEE]">{review.name}</h3>
                <p className="text-sm text-[#F1FAEE]/65">{review.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
